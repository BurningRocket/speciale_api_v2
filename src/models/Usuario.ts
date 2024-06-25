import { Schema, model } from 'dynamoose';
import { Item } from "dynamoose/dist/Item";
import { v4 as uuidv4 } from 'uuid';

export interface IUsuario extends Item{
    id: string;
    nome: string;
    email: string;
    senha: string;
    isAdmin: boolean;
    cgc: string;
    cep: string;
    rua: string;
    numero: number;
    razaoSocial: string;
    urlFoto:string;
    verPreco: boolean;
}

const UsuarioSchema = new Schema({
    id: {
        type: String,
        hashKey: true,
        default: uuidv4(),
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    cgc: {
        type: String,
    },
    cep: {
        type: String,
    },
    rua: {
        type: String,
    },
    numero: {
        type: Number,
    },
    razaoSocial: {
        type: String,
    },
    verPreco: {
        type: Boolean,
        default: false
    },
    urlFoto: {
        type: String,
    },
}, {
    timestamps: true,
});

export const Usuario = model<IUsuario>('Usuario_Speciale', UsuarioSchema);