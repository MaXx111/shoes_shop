import { Catalog } from "../../widgets/catalog/catalog"
import { TopSales } from "../../features/topSales/topSales"
import { PatternPage } from "../patternPage"


export const MainPage = () => {

    return(
        <>
        <PatternPage bannerImg='./banner.jpg' headerImg='./header-logo.png'>
            <TopSales />
            <Catalog />
        </PatternPage>
        </>
    )
}