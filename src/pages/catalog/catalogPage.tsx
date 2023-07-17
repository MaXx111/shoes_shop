import { FormSearch } from "../../features/formSearch/formSearch"
import { Catalog } from "../../widgets/catalog/lib/catalog"
import { PatternPage } from "../patternPage"


export const CatalogPage: React.FC = () => {

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