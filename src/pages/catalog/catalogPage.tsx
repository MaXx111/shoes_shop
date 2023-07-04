import { FormSearch } from "../../features/formSearch/formSearch"
import { Catalog } from "../../widgets/catalog"
import { PatternPage } from "../patternPage"


export const CatalogPage: React.FC = () => {

    return(
        <>
           <PatternPage>
                <Catalog>
                    <FormSearch />
                </Catalog>
            </PatternPage> 
        </>
    )
}