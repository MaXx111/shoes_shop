import { Footer } from "../../Footer"
import { Header } from "../../Header"
import { Catalog } from "../../widgets/catalog"
import { TopSales } from "../../widgets/topSales"
import { MainConteiner } from "./mainConteiner"


export const MainPage: React.FC = () => {

    return(
        <>
        <Header />
        <MainConteiner />
        <Footer />
        </>
    )
}