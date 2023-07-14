export interface Data{
    data?: Login[];
    success?: boolean;
}

export interface Login{
    id?:string;
    username?: string;
    password?: string;
}