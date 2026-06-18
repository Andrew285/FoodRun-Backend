import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authMiddleware, AuthRequest } from './middleware/auth.middleware';
import authRoutes from './routes/auth.routes';
import restaurantRoutes from './routes/restaurant.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString()
    });
});
app.get('/protected', authMiddleware, (req: AuthRequest, res) => {
  res.json({ message: 'You are authenticated!', userId: req.userId });
});

app.use('/auth', authRoutes);
app.use('/restaurants', restaurantRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});