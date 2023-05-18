export interface Products{
    id?:string;
    productId: string;
    quantity: number;
}

export interface Cart{
   product: Products[]
}