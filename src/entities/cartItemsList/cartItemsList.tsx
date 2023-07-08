import { NavLink } from "react-router-dom"
import { CartItem } from "../../widgets/cart/model/type"

interface CartItemsListProps {
    item: CartItem,
    number: any,
    onClick: (item: CartItem) => void

}

export const CartItemsList: React.FC<CartItemsListProps> = ({item, number, onClick}) => {

    return(
        <>
            <tr>
                <td scope="row">{number}</td>
                <td><NavLink to={`shoes_shop/product/${item.productId}`}>{item.title}</NavLink></td>
                <td>{item.size}</td>
                <td>{item.count}</td>
                <td>{item.cost} руб.</td>
                <td>{item.cost * item.count} руб.</td>
                <td><button className="btn btn-outline-danger btn-sm" onClick={() => onClick(item)}>Удалить</button></td>
            </tr>
        </>
    )
}