import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProductInfo } from "./api/productInfoApi";
import { ProductMoreInfo } from "./lib/productMoreInfo";
import { ProductSizesControl } from "./lib/productSizesControl";
import { ProductInfoSlice } from "./model/slice";
import { ProductInfoLoader } from "../../shared/loaders/productInfoLoader";
import { CartSlice } from "../cart/model/slice";
import { v4 } from 'uuid';


export const ProductInfo = () => {

    const params = useParams();

    const navigate = useNavigate()

    const dispatch = useAppDispatch();

    const {loading, error, product, selected, productCount, allowToAdd} = useAppSelector(state => state.ProductInfoReducer);
    
    const {cartItems} = useAppSelector(state => state.CartReducer)
    useEffect(() => {

        dispatch(ProductInfoSlice.actions.setInitialState())
        dispatch(fetchProductInfo(params.id!))
    },[])

    const clickHandler = () => {
        if(productCount == 0) return

        const item = {
            number: 0,
            title: product.title,
            size: selected,
            count: productCount,
            price: product.price,
            totalCost: productCount * product.price,
            productId: v4(),
            id: Number(params.id)
        }
        
        let upgrade = false
        let index = 0;

        cartItems.map((cartItem, i) => {
            if(cartItem.id == item.id && cartItem.size == item.size) {
                upgrade = true
                index = i
            }
        })

        if(!upgrade) dispatch(CartSlice.actions.addToCart(item))

        if(upgrade) dispatch(CartSlice.actions.upgradeItem({count: item.count, index: index}))
        
        navigate('/shoes_shop/cart')
    }

    return(
        <>
            {loading && <ProductInfoLoader />}
            {!loading && error && <p>{error}</p>}
            {!loading && !error && 
            <section className="catalog-item">
                <h2 className="text-center">{product.title}</h2>
                    <div className="row">
                        <div className="col-5">
                            <img src={product.images[0]}
                                className="img-fluid" alt="" />
                        </div>
                        <div className="col-7">
                            <ProductMoreInfo product={product!} />
                            {allowToAdd && <ProductSizesControl />}
                            {allowToAdd && <button className="btn btn-danger btn-block btn-lg" onClick={clickHandler}>В корзину</button>}
                        </div>
                    </div>
                </section>}
        </>
    )
}