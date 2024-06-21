import {BlingService} from '../service/blingService';
import express from 'express';
import {AxiosError} from 'axios';

const router = express.Router();
const blingService = new BlingService();

router.get('/produtos', async (req, res) => {
    try {
        const response = await blingService.getProdutos();
        res.json(response.data);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});

router.get('/produtos/:id', async (req, res) => {
    try {
        const response = await blingService.getProdutoById(req.params.id);
        res.json(response.data);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});

router.get('/produtos/categoria/:categoriaId', async (req, res) => {
    try {
        const response = await blingService.getProdutosByCategoria(req.params.categoriaId);
        res.json(response.data);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});

export default router;