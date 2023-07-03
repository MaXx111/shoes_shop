import { ReactNode } from "react";

interface CatalogProps {
    children?: ReactNode
}


export const Catalog: React.FC<CatalogProps> = ({children}) => {

    return(
        <>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                {children}
                <div className="preloader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
          </section>
        </>
    )
}