import { ProductActions } from '../../action-types'
import { Product } from '../../interfaces'

interface GetProducts{
    type:ProductActions.GET_PRODUCTS,
    payload:Product[]
}
interface ResetProducts{
    type:ProductActions.RESET_PRODUCTS,
    payload:Product[]
}


interface GetCategory{
    type:ProductActions.GET_CATEGORY,
    payload:Product[]
}


interface GetProduct{
    type:ProductActions.GET_PRODUCT,
    payload:Product
}

interface ResetProduct{
    type:ProductActions.RESET_PRODUCT,
    payload:Product
}

export type Action = GetProducts | ResetProducts | GetProduct | ResetProduct | GetCategory