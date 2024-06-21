import express from 'express';
import blingRoutes from './blingRoutes';
import orcamentoRoutes from './orcamentoRoutes';

const router = express.Router();

router.use('/bling', blingRoutes);
router.use('/orcamento', orcamentoRoutes);

export default router;