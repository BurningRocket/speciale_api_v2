import express from 'express';
import blingRoutes from './blingRoutes';

const router = express.Router();

router.use('/bling', blingRoutes);

export default router;