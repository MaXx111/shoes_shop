import { ReactNode } from "react";
import { CatalogLoader } from "../entities/loaders/catalogLoader";

interface CatalogProps {
    children?: ReactNode
}


export const Catalog: React.FC<CatalogProps> = ({children}) => {

    return(
        <>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                {children}
                <CatalogLoader />
          </section>
        </>
    )
}