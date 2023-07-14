import { Categoria } from "./categoria";

export interface Productos{
    id?:string;
    nombre?: string;
    modelo?:string;
    marca?:string;
    precio: number;
    categoria?: Categoria;
}

