import { useNavigate } from "react-router-dom"
import { CartMenuNumber } from "../../shared/UI/carnMenuNumber"
import { CartMenuIcon } from "../../shared/UI/cartMenuIcon"
import { SearchIcon } from "../../shared/UI/searchIcon"
import { useState } from "react"


export const HeaderControlsPics: React.FC = () => {

    const navigate = useNavigate()

    const cartClickHandler = () => {
        navigate('/shoes_shop/cart')
    }

    const [formToggle, setFormToggle] = useState(false);

    const searchIconHandler = () => {

        if(formToggle && formValue !== '') {
            submitHandler()
            setFormValue('')
        }

        setFormToggle(!formToggle)
    }

    const [formValue, setFormValue] = useState('')

    const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setFormValue(e.target.value)
    }

    const submitHandler = () => {
        console.log(`submit`)
    }

    return(
        <>
            <div>
                <div className="header-controls-pics">
                    <SearchIcon clickHandler={searchIconHandler}/>
                    <div className="header-controls-pic header-controls-cart" onClick={cartClickHandler}>
                        <CartMenuNumber count={3}/>
                        <CartMenuIcon />
                    </div>
                </div>
                {formToggle && <form data-id="search-form" className='header-controls-search-form form-inline' onSubmit={submitHandler}>
                    <input className="form-control" placeholder="Поиск" value={formValue} onChange={formHandler} />
                </form>}
            </div>
        </>
    )
}