import { useNavigate } from "react-router-dom"
import { CartMenuNumber } from "../../shared/UI/carnMenuNumber"
import { CartMenuIcon } from "../../shared/UI/cartMenuIcon"
import { SearchIcon } from "../../shared/UI/searchIcon"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { CatalogSlice } from "../../widgets/catalog/model/slice"


export const HeaderControlsPics: React.FC = () => {

    const {countItems} = useAppSelector(state => state.CartReducer)

    const navigate = useNavigate()

    const cartClickHandler = () => {
        navigate('/shoes_shop/cart')
    }

    const [formToggle, setFormToggle] = useState(false);

    const searchIconHandler = () => {

        if(formToggle && formValue !== '') {
            
            dispatch(CatalogSlice.actions.addSearchValue(formValue))
            navigate('/shoes_shop/catalog')
            setFormValue('')
        }

        setFormToggle(!formToggle)
    }

    const [formValue, setFormValue] = useState('')

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setFormValue(e.target.value)
    }

    const dispatch = useAppDispatch()

    const submitHandler = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(CatalogSlice.actions.addSearchValue(formValue))

        navigate('/shoes_shop/catalog')
        setFormValue('');
    }

    return(
        <>
            <div>
                <div className="header-controls-pics">
                    <SearchIcon clickHandler={searchIconHandler}/>
                    <div className="header-controls-pic header-controls-cart" onClick={cartClickHandler}>
                        {countItems > 0 ? <CartMenuNumber count={countItems}/> : false}
                        <CartMenuIcon />
                    </div>
                </div>
                {formToggle && <form data-id="search-form" className='header-controls-search-form form-inline' onSubmit={submitHandler}>
                    <input className="form-control" placeholder="Поиск" value={formValue} onChange={inputHandler} />
                </form>}
            </div>
        </>
    )
}