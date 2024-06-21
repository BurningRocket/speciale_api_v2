import axios from 'axios';
import {CategoriaProduto} from '../models/categoriaProduto';

export class BlingService {
    constructor() {}

    getAxiosConfig(url: string){
        return {
            method: 'get',
            maxBodyLength: Infinity,
            url: url,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + process.env.BLING_API_KEY,
                'Cookie': 'PHPSESSID=q2e27dc8qcds7ui2fvqmmc0i1l'
            }
        };
    }

    async getProdutos(page: number = 1, limit: number = 10) {
        const config = this.getAxiosConfig(`https://bling.com.br/Api/v3/produtos?pagina=${page}&limite=${limit}`);
        return await axios.request(config);
    }

    async getProdutoById(id: string) {
        const config = this.getAxiosConfig(`https://bling.com.br/Api/v3/produtos?idsProdutos[]=${id}`);
        return await axios.request(config);
    }

    async getProdutosByIds(ids: string[]) {
        const config = this.getAxiosConfig(`https://bling.com.br/Api/v3/produtos?idsProdutos[]=${ids.join('&idsProdutos[]=')}`);
        return await axios.request(config);
    }

    async getProdutosByCategoria(categoriaId: string) {
        const config = this.getAxiosConfig(`https://bling.com.br/Api/v3/produtos?idCategoria=${categoriaId}`);
        return await axios.request(config);
    }

    async getCategorias(page: number = 1, limit: number = 10) {
        const config = this.getAxiosConfig(`https://bling.com.br/Api/v3/categorias/produtos?pagina=${page}&limite=${limit}`);
        return await axios.request(config);
    }

    async getCategoriaById(id: string) {
        const config = this.getAxiosConfig(`https://bling.com.br/Api/v3/categorias/produtos/${id}`);
        return await axios.request(config);
    }

}