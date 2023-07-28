import { Cart } from "../../features/cart/cart"
import { PatternPage } from "../patternPage"


export const CartPage: React.FC = () => {

    return(
        <>
            <PatternPage bannerImg='./banner.jpg' headerImg='./header-logo.png'>
                <Cart />
            </PatternPage>        
        </>
    )
}