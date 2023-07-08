import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { CartItemsList } from "../../../entities/cartItemsList/cartItemsList"
import { CartSlice } from "../model/slice";
import { CartItem } from "../model/type";


export const TBodyForItems: React.FC = () => {

    const {cartItems} = useAppSelector(state => state.CartReducer)

    const dispatch = useAppDispatch();

    const clickHandler = (item: CartItem) => {
        dispatch(CartSlice.actions.deleteItem(item))
    }

    const [ totalCost, setTotalCost] = useState(0)

    useEffect( () => {
        let cost = 0;

        cartItems.map(item => {
            cost += item.count * item.cost;
        })

        setTotalCost(cost)
    }, [cartItems])

    return(
        <>
            <tbody>
                {cartItems.map((item, i) => <CartItemsList item={item} number={i+1} key={item.id} onClick={clickHandler}/> )}
                <tr>
                  <td colSpan={5} className="text-right">Общая стоимость</td>
                  <td>{totalCost} руб.</td>
                </tr>
            </tbody>
        </>
    )
}