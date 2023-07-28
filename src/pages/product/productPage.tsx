import { PatternPage } from "../patternPage"
import { ProductInfo } from "../../features/productInfo/productInfo"


export const ProductPage: React.FC = () => {


    return(
        <>
            <PatternPage bannerImg='../banner.jpg' headerImg='../header-logo.png'>
                <ProductInfo />
            </PatternPage>
        </>
    )
}