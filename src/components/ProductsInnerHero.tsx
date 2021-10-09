import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Product as ProductModel } from '../APIController/interfaces'
import {useSelector ,useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'
import { productsActionsCreators } from '../APIController/action-creators/productsActions'
import Modal from '../components/Modal'
import { State } from '../APIController/reducers'

type ProductsProps = {
    products:ProductModel[]
} 

const ProductsInnerHero:React.FC<ProductsProps> = ({products}) => {
    const dispatch = useDispatch()
    const product = useSelector((state:State) => state.products.product)
    let productModal:ProductModel = product 
    const { getProduct } = bindActionCreators(productsActionsCreators,dispatch)
    const [isModal,setIsModal] = useState<boolean>(false)
    return (
        <div className="product-i">
            {isModal && <Modal image={productModal.image} title={productModal.title} price={productModal.price} setIsModal={setIsModal} />}
            {products.map((product:ProductModel) => {
                const {id,image,title,price,category} = product
                return (
                    <div className="product-i__wrapper">
                        <div className="product-i">
                            <img src={product.image} alt="p-image" onClick={()=>{
                                    setIsModal(true)
                                    getProduct(id)
                                }}/>
                            <Link to={`/details-${category}/${id}`} onClick={()=>{getProduct(id)}}>
                                <button >Shop Collection</button>
                            </Link>
                        </div>
                    </div>
                ) 
            })}
        </div>
    )
}

export default ProductsInnerHero
