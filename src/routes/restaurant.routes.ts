import { Router } from 'express';
import { getRestaurants, getRestaurantById } from '../controllers/restaurant.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getRestaurants);
router.get('/:id', authMiddleware, getRestaurantById);

export default router;
