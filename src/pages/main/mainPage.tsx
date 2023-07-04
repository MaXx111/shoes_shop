import { Catalog } from "../../widgets/catalog"
import { TopSales } from "../../widgets/topSales/topSales"
import { PatternPage } from "../patternPage"


export const MainPage: React.FC = () => {

    return(
        <>
        <PatternPage>
            <TopSales />
            <Catalog />
        </PatternPage>
        </>
    )
}