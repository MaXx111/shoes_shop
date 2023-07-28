import { PatternPage } from "../patternPage"
import { ProductInfo } from "../../features/productInfo/productInfo"


export const ProductPage = () => {


    return(
        <>
            <PatternPage bannerImg='../banner.jpg' headerImg='../header-logo.png'>
                <ProductInfo />
            </PatternPage>
        </>
    )
}