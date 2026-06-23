const express = require('express');
const { prisma } = require('../prisma');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Create a new proposal
router.post('/', authenticate, async (req, res) => {
  try {
    const { title, description, amountNeeded } = req.body;
    const proposal = await prisma.proposal.create({
      data: {
        title,
        description,
        amountNeeded,
        userId: req.user.userId, // entrepreneur who posted
      },
    });
    res.json({ message: 'Proposal created successfully', proposal });
  } catch (err) {
    res.status(400).json({ error: 'make sure you fill all the fields' });
  }
});

// Get all proposals
router.get('/', async (req, res) => {
  try {
    const proposals = await prisma.proposal.findMany({ include: { user: true } });
    res.json(proposals);
  } catch (err) {
    res.status(400).json({ error: 'mo proposals yet'});
  }
});

module.exports = router;
