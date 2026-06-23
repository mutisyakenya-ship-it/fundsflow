const express = require('express');
const { prisma } = require('../prisma');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// invest now
router.post('/', authenticate, async (req, res) => {
  try {
    const { proposalId, amount } = req.body;
    const investment = await prisma.investment.create({
      data: {
        proposalId,
        userId: req.user.userId, // investor
        amount,
      },
    });
    //  Notification 
const proposal = await prisma.proposal.findUnique({ where: { id: proposalId } });
await prisma.notification.create({
  data: {
    userId: proposal.userId, // entrepreneur
    message: `Your proposal received an investment of ${amount}`,
    read: false,
  },
});
    res.json({ message: 'Investment successful', investment });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all investments for current user
router.get('/me', authenticate, async (req, res) => {
  try {
    const investments = await prisma.investment.findMany({
      where: { userId: req.user.userId },
      include: { proposal: true },
    });
    res.json(investments);
  } catch (err) {
    res.status(400).json({ error: 'cant find any investment yet' });
  }
});

module.exports = router;
