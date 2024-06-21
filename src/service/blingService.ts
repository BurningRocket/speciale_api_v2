import axios from 'axios';

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

    async getProdutos() {
        const config = this.getAxiosConfig('https://bling.com.br/Api/v3/produtos');
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


}