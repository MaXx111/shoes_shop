import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchProductInfo } from "../api/productInfoApi";
import { AddToCartBtn } from "../../../shared/UI/addToCartBtn";
import { ProductMoreInfo } from "../../../entities/productItemInfo/productMoreInfo";
import { SizesControl } from "./sizesControl/sizesControl";
import { ProductInfoSlice } from "../model/slice";
import { ProductInfoLoader } from "../../../entities/loaders/productInfoLoader";
import { CartSlice } from "../../cart/model/slice";


export const ProductInfo: React.FC = () => {

    const params = useParams();

    const navigate = useNavigate()

    const dispatch = useAppDispatch();

    const {loading, error, product, selected, productCount, allowToAdd} = useAppSelector(state => state.ProductInfoReducer);

    useEffect(() => {
        
        dispatch(ProductInfoSlice.actions.setInitialState())
        dispatch(fetchProductInfo(params.id!))
    },[])

    const onClick = () => {
        if(productCount == 0) return

        const item = {
            number: 0,
            title: product.title,
            size: selected,
            count: productCount,
            cost: product.price,
            totalCost: productCount * product.price,
            id: params.id

        }
        
        dispatch(CartSlice.actions.addToCart(item))

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
                            {allowToAdd && <SizesControl />}
                            {allowToAdd && <AddToCartBtn clickHandler={onClick} />}
                        </div>
                    </div>
                </section>}
        </>
    )
}