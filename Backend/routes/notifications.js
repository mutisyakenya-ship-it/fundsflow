const express = require('express');
const { prisma } = require('../prisma');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Get all notifications for current user
router.get('/me', authenticate, async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { userId: req.user.userId },
      orderBy: { createdAt: 'desc' },
    });
    res.json(notifications);
  } catch (err) {
    res.status(400).json({ error: 'check your connectivity and try again' });
  }
});

// Mark a notification as read
router.put('/:id/read', authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await prisma.notification.update({
      where: { id }, // string ObjectId
      data: { read: true },
    });
    res.json({ message: 'Notification marked as read', notification });
  } catch (err) {
    res.status(400).json({ error: 'network error'});
  }
});

// Delete a notification
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.notification.delete({ where: { id } }); // string ObjectId
    res.json({ message: 'Notification deleted' });
  } catch (err) {
    res.status(400).json({ error: 'check your connectivity' });
  }
});

module.exports = router;
