import { ProductsActions } from '../action-types'
import { Product } from '../interfaces'

interface GetProducts{
    type:ProductsActions.GET_PRODUCTS,
    payload:Product[]
}
interface ResetProducts{
    type:ProductsActions.RESET_PRODUCTS,
    payload:Product[]
}

interface GetProduct{
    type:ProductsActions.GET_PRODUCT,
    payload:Product
}

interface ResetProduct{
    type:ProductsActions.RESET_PRODUCT,
    payload:Product
}

export type Actions = GetProducts | ResetProducts | GetProduct | ResetProduct