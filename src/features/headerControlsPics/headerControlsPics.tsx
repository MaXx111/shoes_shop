import { useNavigate } from "react-router-dom"
import { CartMenuNumber } from "../../shared/UI/carnMenuNumber"
import { CartMenuIcon } from "../../shared/UI/cartMenuIcon"
import { SearchIcon } from "../../shared/UI/searchIcon"


export const HeaderControlsPics: React.FC = () => {

    const navigate = useNavigate()

    const cartClickHandler = () => {
        navigate('/shoes_shop/cart')
    }

    const searchIconHandler = () => {

    }

    return(
        <>
            <div>
                <div className="header-controls-pics">
                    <SearchIcon clickHandler={searchIconHandler}/>
                    {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                    <div className="header-controls-pic header-controls-cart" onClick={cartClickHandler}>
                        <CartMenuNumber count={3}/>
                        <CartMenuIcon />
                    </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                    <input className="form-control" placeholder="Поиск" />
                </form>
            </div>
        </>
    )
}