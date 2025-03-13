import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);

// Add a protected route for testing
router.get('/me', authMiddleware, (req, res) => {
  res.status(200).json({ user: req.user });
});

export default router;