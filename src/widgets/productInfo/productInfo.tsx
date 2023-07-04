import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProductInfo } from "./api/prodectInfoApi";
import { AddToCartBtn } from "../../shared/UI/addToCartBtn";
import { ProductMoreInfo } from "../../entities/productItemInfo/productMoreInfo";
import { Sizes } from "../../entities/sizes/sizes";


export const ProductInfo: React.FC = () => {

    const params = useParams();

    const dispatch = useAppDispatch();

    const {loading, error, product} = useAppSelector(state => state.ProductInfoReducer);
    
    useEffect(() => {
        dispatch(fetchProductInfo(params.id!))
    },[])

    console.log(product)

    const onClick = () => {

    }

    return(
        <>
            {!loading && !error && 
            <section className="catalog-item">
                <h2 className="text-center">Босоножки 'MYER'</h2>
                    <div className="row">
                        <div className="col-5">
                            <img src={product.images[0]}
                                className="img-fluid" alt="" />
                        </div>
                        <div className="col-7">
                            <ProductMoreInfo product={product!} />
                            <div className="text-center">
                                <Sizes sizes={product!.sizes}/>
                                <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                        <button className="btn btn-secondary">-</button>
                                        <span className="btn btn-outline-primary">1</span>
                                        <button className="btn btn-secondary">+</button>
                                    </span>
                                </p>
                            </div>
                            <AddToCartBtn clickHandler={onClick} />
                        </div>
                    </div>
                </section>}
        </>
    )
}