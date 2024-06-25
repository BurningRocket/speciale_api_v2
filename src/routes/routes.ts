import express from 'express';
import blingRoutes from './blingRoutes';
import orcamentoRoutes from './orcamentoRoutes';
import {authRoutes} from './authRoutes';

const router = express.Router();

router.use('/bling', blingRoutes);
router.use('/orcamento', orcamentoRoutes);
router.use('/auth', authRoutes);

export default router;