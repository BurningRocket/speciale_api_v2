import {BlingService} from '../service/blingService';
import express from 'express';
import {AxiosError} from 'axios';

const router = express.Router();
const blingService = new BlingService();

router.get('/produtos', async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page as string) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

        const response = await blingService.getProdutos(page, limit);
        res.json(response.data);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});

router.get('/produtos/nome/:nome', async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page as string) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
        const nome = req.params.nome ? req.params.nome : '';

        const response = await blingService.getProdutosByNome(nome, page, limit);
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
        const page = req.query.page ? parseInt(req.query.page as string) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

        const response = await blingService.getProdutosByCategoria(req.params.categoriaId, page, limit);
        res.json(response.data);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});

router.get('/categorias', async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page as string) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

        const response = await blingService.getCategorias(page, limit);
        res.json(response.data);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});

router.get('/categorias/:id', async (req, res) => {
    try {
        const response = await blingService.getCategoriaById(req.params.id);
        res.json(response.data);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
});

export default router;