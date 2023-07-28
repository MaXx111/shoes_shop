import { useAppSelector } from "../../../app/hooks";
import ProductItem from "../../../entities/productItem/productItem";

export const CatalogListItem = () => {

    const {products} = useAppSelector(state => state.CatalogReducer)

    return(
        <>
            <div className="row">
                {products.map(item => <ProductItem key={item.id} product={item} classNameItem="card catalog-item-card"/>)}
            </div>
        </>
    )
}