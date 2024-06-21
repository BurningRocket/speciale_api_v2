export interface CategoriaProduto {
    id?: string;
    descricao?: string;
    categoriaPai?: {
        id?: string;
    };
}