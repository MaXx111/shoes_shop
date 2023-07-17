import { Catalog } from "../../widgets/catalog/lib/catalog"
import { TopSales } from "../../widgets/topSales/lib/topSales"
import { PatternPage } from "../patternPage"


export const MainPage: React.FC = () => {

    return(
        <>
        <PatternPage bannerImg='./banner.jpg' headerImg='./header-logo.png'>
            <TopSales />
            <Catalog />
        </PatternPage>
        </>
    )
}