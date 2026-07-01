const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { prisma } = require('../prisma');

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, username, email, password, role, country, phoneNumber } = req.body;

  if (!firstName || !lastName || !username || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const normalizedRole = role?.toUpperCase() === 'INVESTOR' ? 'INVESTOR' : 'ENTREPRENEUR';

  try {
    fs.appendFileSync('signup_debug.log', `REQUEST: ${JSON.stringify(req.body)}\n`);
    // Check if email already exists
    const existingEmailUser = await prisma.user.findUnique({ where: { email } });
    if (existingEmailUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Check if username already exists
    const existingUsernameUser = await prisma.user.findUnique({ where: { username } });
    if (existingUsernameUser) {
      return res.status(400).json({ error: 'Username already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 20);

    // Create user
    const createData = {
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      role: normalizedRole,
      country,
      phone: phoneNumber,
    };

    fs.appendFileSync('signup_debug.log', `CREATE_DATA: ${JSON.stringify(createData)}\n`);
    const user = await prisma.user.create({ data: createData });
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(201).json({ message: 'Signup successful', user, token });
  } catch (err) {
    fs.appendFileSync('signup_debug.log', `ERROR: ${err.message}\nSTACK: ${err.stack}\n`);
    console.error('Signup error:', err);

    if (err?.code === 'P2002') {
      const target = err.meta?.target;
      let message = 'Duplicate field value';
      if (Array.isArray(target)) {
        message = `${target.join(', ')} already exists`;
      } else if (typeof target === 'string') {
        if (target.includes('username')) message = 'Username already registered';
        else if (target.includes('email')) message = 'Email already registered';
        else message = 'Duplicate field value';
      }
      return res.status(400).json({ error: message });
    }

    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ message: 'Login successful', token, user });
  } catch (err) {
    res.status(500).json({ error: 'please try again'});
  }
});

module.exports = router;
