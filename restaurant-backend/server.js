const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary In-Memory MongoDB Connection / Mock Route
// (Replace connection string below with your real MongoDB Atlas URI)
const MONGO_URI = 'mongodb://127.0.0.1:27017/restaurant';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch((err) => console.log('MongoDB Connection Error (Running in Mock Mode):', err.message));

// Menu Schema & Model
const menuSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
});

const MenuItem = mongoose.model('MenuItem', menuSchema);

// Order Schema & Model
const orderSchema = new mongoose.Schema({
  items: Array,
  totalAmount: Number,
  address: Object,
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

// --- API Routes ---

// 1. Get All Menu Items
app.get('/api/menu', async (req, res) => {
  try {
    const menu = await MenuItem.find();
    res.json(menu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Create New Order
app.post('/api/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ success: true, order: newOrder });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});