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
                'Authorization': 'Bearer fbe3514e347ec29cf3c0bdbae0c7637571b0208c',
                'Cookie': 'PHPSESSID=i6a2fh9ru2ssfsc8q8vu4fnslv'
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