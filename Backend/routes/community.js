const express = require('express');
const { prisma } = require('../prisma');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Vote on a proposal
router.post('/vote', authenticate, async (req, res) => {
  try {
    const { proposalId, value } = req.body; // value could be "up" or "down"
    const vote = await prisma.vote.create({
      data: {
        proposalId,
        userId: req.user.userId,
        value,
      },
    });
    res.json({ message: 'Vote recorded', vote });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Comment on a proposal
router.post('/comment', authenticate, async (req, res) => {
  try {
    const { proposalId, content } = req.body;
    const comment = await prisma.comment.create({
      data: {
        proposalId,
        userId: req.user.userId,
        content,
      },
    });
    //  Notification trigger
const proposal = await prisma.proposal.findUnique({ where: { id: proposalId } });
await prisma.notification.create({
  data: {
    userId: proposal.userId, // entrepreneur
    message: `you got a new comment on your proposal: "${content.substring(0, 50)}..."`,
    read: false,
  },
});
    res.json({ message: 'Comment added', comment });
  } catch (err) {
    res.status(400).json({ error: 'network error' });
  }
});

module.exports = router;
