import React from "react";
import { ProductItem } from "./model/type"
import { NavLink } from "react-router-dom";

interface ProductItemProps {
    product: ProductItem;
    classNameItem: string
}

const ProductItem = ({product, classNameItem}: ProductItemProps) => {

  return(
        <>
        <div className="col-4">
                <div className={classNameItem}>
                  <img src={product.images[0]}
                    className="card-img-top img-fluid" alt={product.title} />
                  <div className="card-body">
                    <p className="card-text">{product.title}</p>
                    <p className="card-text">{product.price} руб.</p>
                    <NavLink to={'/shoes_shop/product/'+product.id} className="btn btn-outline-primary">Заказать</NavLink>
                  </div>
                </div>
              </div>
        </>
    )
}

export default React.memo(ProductItem)