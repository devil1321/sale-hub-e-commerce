
import { CartActions } from '../../action-types'
import { Product } from '../../interfaces'


interface AddToCart{
    type:CartActions.ADD_TO_CART,
    payload:Product[]
}

interface RemoveFromCart{
    type:CartActions.REMOVE_FROM_CART,
    payload:Product[]
}

interface ClearCart{
    type:CartActions.CLEAR_CART,
    payload:Product[]
}

export type Action = AddToCart | RemoveFromCart | ClearCart

