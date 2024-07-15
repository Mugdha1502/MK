/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import postRouter from './routes/posts.js'; 
import Contact from './models/Contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected!'))
  .catch(err => console.log(err));

// Function to send Telegram notification
const sendTelegramNotification = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`;
  try {
    await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    });
  } catch (error) {
    console.error('Error sending Telegram message:', error);
  }
};

// Contact form route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    // eslint-disable-next-line no-undef
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send Telegram notification
    const notificationMessage = `New Contact Submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    await sendTelegramNotification(notificationMessage);

    res.status(201).send('Message sent successfully!');
  } catch (error) {
    console.error('Error handling /api/contact:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Use the posts routes
app.use('/api/posts', postRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
