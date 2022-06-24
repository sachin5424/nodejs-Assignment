export  interface book {
    _id?: any;
    name:string;
    published:string;
    price:number;
}

export interface author {
    _id?: any
    name:string
    dateOfBirth:string
    age:number
}


export interface user {
    _id?: any,
    email:string,
    password:string
}