import { FormSearch } from "../../widgets/catalog/lib/formSearch"
import { Catalog } from "../../widgets/catalog/catalog"
import { PatternPage } from "../patternPage"


export const CatalogPage = () => {

    return(
        <>
           <PatternPage bannerImg='./banner.jpg' headerImg='./header-logo.png'>
                <Catalog>
                    <FormSearch />
                </Catalog>
            </PatternPage> 
        </>
    )
}