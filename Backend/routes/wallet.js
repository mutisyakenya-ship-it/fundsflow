const express = require('express');
const { prisma } = require('../prisma');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Connect a wallet (only once)
router.post('/connect', authenticate, async (req, res) => {
  try {
    const { type, externalId } = req.body; // eg crypto adress or bank acc

    // Check if user already has a wallet
    const existing = await prisma.wallet.findUnique({ where: { userId: req.user.userId } });
    if (existing) {
      return res.status(400).json({ error: 'You already connected a wallet. Cannot connect another.' });
    }

    const wallet = await prisma.wallet.create({
      data: {
        userId: req.user.userId,
        type,
        externalId, // optional field for linking to real-world wallet
        balance: 0,
      },
    });
    // Notification trigger
await prisma.notification.create({
  data: {
    userId: req.user.userId,
    message: `You linked your  ${type} wallet`,
    read: false,
  },
});

    res.json({ message: `Wallet of type ${type} connected`, wallet });
  } catch (err) {
    res.status(400).json({ error: 'check your connectivity and try again' });
  }
});

// Get wallet
router.get('/me', authenticate, async (req, res) => {
  try {
    const wallet = await prisma.wallet.findUnique({
      where: { userId: req.user.userId },
      include: { transactions: true },
    });
    res.json(wallet);
  } catch (err) {
    res.status(400).json({ error: 'cant find this wallet. please connect your real wallet' });
  }
});
