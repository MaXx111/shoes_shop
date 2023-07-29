import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchCartPost } from "../api/postFetchCart";


export const CartOrderForm = () => {

    const dispatch = useAppDispatch();

    const {cartItems} = useAppSelector(state => state.CartReducer)

    const [phoneValue, setPhoneValue] = useState('')

    const phoneInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        setPhoneValue(e.target.value)
    }

    const [addressValue, setAdressValue] = useState('');

    const addressInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        setAdressValue(e.target.value)
    }

    const [x, setX] = useState(false);

    const xHandler = () => {
        setX(!x)
    }

    const submitHandler = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(cartItems.length == 0) return

        const data = {
            owner: {
                phone: phoneValue,
                address: addressValue
            },
            items: cartItems
        }

        dispatch(fetchCartPost(data))
        setAdressValue('');
        setPhoneValue('');
        setX(!x)
    }

    return(
        <>
            <section className="order" onSubmit={submitHandler}>
                <h2 className="text-center">Оформить заказ</h2>
                <div className="card" style={{maxWidth: '30rem', margin: '0 auto'}}>
                    <form className="card-body">
                        <div className="form-group">
                            <label htmlFor="phone">Телефон</label>
                            <input className="form-control" id="phone" placeholder="Ваш телефон" required value={phoneValue} onChange={phoneInputHandler}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Адрес доставки</label>
                            <input className="form-control" id="address" placeholder="Адрес доставки" required value={addressValue} onChange={addressInputHandler}/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="agreement" checked={x} onChange={xHandler} required/>
                            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                        </div>
                        <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                    </form>
            </div>
          </section>
        </>
    )
}