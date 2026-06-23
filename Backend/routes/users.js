const express = require('express');
const  prisma  = require('../prisma');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Get current user
router.get('/me', authenticate, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.userId } });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'this user already exixt' });
  }
});

// Update profile
router.put('/me', authenticate, async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: req.user.userId },
      data: req.body,
    });
    res.json({ message: 'Profile updated successfully', user });
  } catch (err) {
    res.status(400).json({ error: 'please try again after some time' });
  }
});

module.exports = router;
