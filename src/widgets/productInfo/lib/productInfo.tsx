import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchProductInfo } from "../api/productInfoApi";
import { AddToCartBtn } from "../../../shared/UI/addToCartBtn";
import { ProductMoreInfo } from "../../../entities/productItemInfo/productMoreInfo";
import { SizesControl } from "./sizesControl/sizesControl";


export const ProductInfo: React.FC = () => {

    const params = useParams();

    const dispatch = useAppDispatch();

    const {loading, error, product, selected, productCount} = useAppSelector(state => state.ProductInfoReducer);
    
    useEffect(() => {
        dispatch(fetchProductInfo(params.id!))
    },[])

    const onClick = () => {
        if(productCount == 0) return
        console.log(product.sku, selected, productCount)
    }

    return(
        <>
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
                            <SizesControl />
                            <AddToCartBtn clickHandler={onClick} />
                        </div>
                    </div>
                </section>}
        </>
    )
}