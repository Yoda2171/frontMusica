import { Categoria } from "./categoria";

export interface Productos{
    id?:number;
    nombre?: string;
    modelo?:string;
    marca?:string;
    precio: number;
    categoria?: Categoria;
}

