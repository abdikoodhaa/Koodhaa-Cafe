import express from 'express';
import Newsletter from '../models/Newsletter.js';

const router = express.Router();

router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    const subscriber = new Newsletter({ email });
    await subscriber.save();
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;