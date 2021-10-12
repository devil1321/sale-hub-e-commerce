
import { CartActions } from '../../action-types'
import { Product as ProductModel} from '../../interfaces'


interface AddToCart{
    type:CartActions.ADD_TO_CART,
    payload:ProductModel[]
   
}

interface RemoveFromCart{
    type:CartActions.REMOVE_FROM_CART,
    payload:ProductModel[]
}
interface IncreaseCart{
    type:CartActions.INCREASE_PRODUCT,
    payload:ProductModel[]
}
interface DecreaseCart{
    type:CartActions.DECREASE_PRODUCT,
    payload:ProductModel[]
}
interface HandleColor{
    type:CartActions.HANDLE_COLOR,
    payload:ProductModel[]
}
interface ClearCart{
    type:CartActions.CLEAR_CART,
    payload:ProductModel[]
}
interface SetToal{
    type:CartActions.SET_TOTAL,
    payload:number,
    quantity:number
}

export type Action = AddToCart | IncreaseCart | DecreaseCart | RemoveFromCart| HandleColor | ClearCart | SetToal

