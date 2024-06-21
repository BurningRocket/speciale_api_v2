import {BlingService} from '../service/blingService';
import {PdfService} from '../service/pdfService';
import express from 'express';
import {AxiosError} from 'axios';
import {Produtos} from '../models/produtos';

const router = express.Router();
const blingService = new BlingService();
const pdfService = new PdfService();

router.post('/pdf', async (req, res) => {
    try {
        const orcamentoPayload = req.body;
        // const produtosId = orcamentoPayload.produtos.map((produto: any) => produto.id);
        //
        // const response = await blingService.getProdutosByIds(produtosId);
        // const produtos = response.data;

        const pdf = await pdfService.createPdf(orcamentoPayload.produtos, orcamentoPayload);

        res.send(pdf);
    } catch (error: any) {
        res.status(500).json({message: error.message});
        console.log(error)
    }
});

export default router;