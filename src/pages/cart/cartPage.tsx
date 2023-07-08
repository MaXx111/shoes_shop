import { Cart } from "../../widgets/cart/lib/cart"
import { PatternPage } from "../patternPage"


export const CartPage: React.FC = () => {

    return(
        <>
            <PatternPage>
                <Cart />
            </PatternPage>        
        </>
    )
}