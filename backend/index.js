const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

<<<<<<< HEAD
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

=======
const PORT = process.env.PORT || 5000;
const app = express();

>>>>>>> 3ff0fee76e5c0bc5fbffe3b6492d7b7526e1d01b
const corsOptions = { 
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  optionsSuccessStatus: 200
};
<<<<<<< HEAD
app.use(cors(corsOptions));

// Routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// ✅ Define PORT before using it
const PORT = process.env.PORT || 5000;

// MongoDB connection + server start
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/grocery')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });
=======

app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const productRoutes = require('./routes/productRoutes');
    const userRoutes = require('./routes/userRoutes');
    const orderRoutes = require('./routes/orderRoutes');

    app.use('/api/products', productRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/orders', orderRoutes);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
>>>>>>> 3ff0fee76e5c0bc5fbffe3b6492d7b7526e1d01b
