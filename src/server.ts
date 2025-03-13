import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import authRoutes from './routes/auth.routes';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in environment variables');
  process.exit(1);
}

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Routes registered: /api/auth/register, /api/auth/login, /api/auth/me`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// After the existing routes
app.get('/test', (_req, res) => {
  res.json({ message: 'Server is running' });
});