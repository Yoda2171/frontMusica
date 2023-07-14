import { Login } from "./login";
import { Productos } from "./productos";


export interface Products{
    id?:string;
    nombre?: string;
    modelo?:string;
    marca?:string;
    precio: number;
   
}

export interface Cart{
    id?: number;
    createdAt?: string;
    totalPrice?: number;
    userId?: Login;
    products?: Productos[];
 }