import { OrderProductLink } from "../../shared/UI/orderProductLink";
import { topSalesItem } from "./model"

interface TopSalseItemProps {
    product: topSalesItem;
}

export const TopSalesItem: React.FC<TopSalseItemProps> = ({product}) => {

    const pruductOnClick = () => {
        console.log('click')
    }

    return(
        <>
        <div className="col-4">
                <div className="card">
                  <img src={product.images[0]}
                    className="card-img-top img-fluid" alt={product.title} />
                  <div className="card-body">
                    <p className="card-text">{product.title}</p>
                    <p className="card-text">{product.price} руб.</p>
                    <OrderProductLink link={product.id} clickHandler={pruductOnClick}/>
                  </div>
                </div>
              </div>
        </>
    )
}