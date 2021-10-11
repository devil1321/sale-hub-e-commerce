export type Product = {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    size:string,
    color:string,
    quantity:number,
    total:number,
    inCart:boolean,
    rating:{
        rate:number,
        count:number
    }
}
