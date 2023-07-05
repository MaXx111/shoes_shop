import { PatternPage } from "../patternPage"
import { ProductInfo } from "../../widgets/productInfo/lib/productInfo"


export const ProductPage: React.FC = () => {


    return(
        <>
            <PatternPage>
                <ProductInfo />
            </PatternPage>
        </>
    )
}