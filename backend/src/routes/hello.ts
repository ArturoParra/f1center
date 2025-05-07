import { Router } from 'express';

const router = Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hola desde el backend con TypeScript!' });
});

export default router;
