import React from "react";
import { OrderProductLink } from "../../shared/UI/orderProductLink";
import { topSalesItem } from "./model"

interface ProductItemProps {
    product: topSalesItem;
    classNameItem: string
}

const ProductItem: React.FC<ProductItemProps> = ({product, classNameItem}) => {

  return(
        <>
        <div className="col-4">
                <div className={classNameItem}>
                  <img src={product.images[0]}
                    className="card-img-top img-fluid" alt={product.title} />
                  <div className="card-body">
                    <p className="card-text">{product.title}</p>
                    <p className="card-text">{product.price} руб.</p>
                    <OrderProductLink link={product.id}/>
                  </div>
                </div>
              </div>
        </>
    )
}

export default React.memo(ProductItem)