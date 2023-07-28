import { NavLink } from "react-router-dom"
import { CartItem } from "../model/type"

interface CartItemsListProps {
    item: CartItem,
    number: number,
    onClick: (item: CartItem) => void

}

export const CartItemsList: React.FC<CartItemsListProps> = ({item, number, onClick}) => {

    return(
        <>
            <tr>
                <td scope="row">{number}</td>
                <td><NavLink to={`/shoes_shop/product/${item.id}`}>{item.title}</NavLink></td>
                <td>{item.size}</td>
                <td>{item.count}</td>
                <td>{item.price} руб.</td>
                <td>{item.price * item.count} руб.</td>
                <td><button className="btn btn-outline-danger btn-sm" onClick={() => onClick(item)}>Удалить</button></td>
            </tr>
        </>
    )
}