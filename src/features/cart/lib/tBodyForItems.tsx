import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { CartItemsList } from "./cartItemsList"
import { CartSlice } from "../model/slice";
import { CartItem } from "../model/type";


export const TBodyForItems = () => {

    const {cartItems} = useAppSelector(state => state.CartReducer)

    const dispatch = useAppDispatch();

    const clickHandler = (item: CartItem) => {
        dispatch(CartSlice.actions.deleteItem(item))
    }

    const [ totalCost, setTotalCost] = useState(0)

    useEffect( () => {
        let cost = 0;

        cartItems.map(item => {
            cost += item.count * item.price;
        })

        setTotalCost(cost)
        console.log(cartItems)
    }, [cartItems])

    return(
        <>
            <tbody>
                {cartItems.map((item, i) => <CartItemsList item={item} number={i+1} key={item.productId} onClick={clickHandler}/> )}
                <tr>
                  <td colSpan={5} className="text-right">Общая стоимость</td>
                  <td>{totalCost} руб.</td>
                </tr>
            </tbody>
        </>
    )
}