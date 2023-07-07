import React, { ReactNode, useCallback, useEffect } from "react";
import { CatalogLoader } from "../../../entities/loaders/catalogLoader";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchCatalogCategoryes } from "../api/fetchCategoryes.ts";
import { CategorysList } from "../../../entities/categorysList/categorysList";
import { fetchCatalogItems } from "../api/fetchCatalogItems.ts";
import { CatalogSlice } from "../model/slice.ts";
import { CatalogListItem } from "./catalogItemsList.tsx";
import { MoreItems } from "./moreItems.tsx";
import { fetchMoreItems } from "../api/fetchMoreItems.ts";
import { fetchSearchItems } from "../api/fetchSearchItems.ts";

interface CatalogProps {
    children?: ReactNode
}


export const Catalog: React.FC<CatalogProps> = ({children}) => {

    const dispatch = useAppDispatch();

    const {categorys, loading, error, selectedCategory, loadingMoreItems, allowMoreItems, products, searchValue} = useAppSelector(state => state.CatalogReducer)

    useEffect(() => {
        if(searchValue !== '') {
            dispatch(fetchCatalogCategoryes())
            dispatch(CatalogSlice.actions.selectCategory(0))
            dispatch(fetchSearchItems(searchValue))
            return
        }

        dispatch(fetchCatalogCategoryes())
        dispatch(CatalogSlice.actions.selectCategory(1))
        dispatch(fetchCatalogItems(1))
    },[])

    const linkHandler = (id: number) => {

        if(id == selectedCategory) return

        dispatch(fetchCatalogItems(id))
        dispatch(CatalogSlice.actions.selectCategory(id))
        dispatch(CatalogSlice.actions.addSearchValue(''))
    }

    const onMoreBtn = ()=> {
        let urlParams = {categoryId: selectedCategory, length: products.length, searchValue: searchValue}
        dispatch(fetchMoreItems(urlParams))
    }

    return(
        <>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                {children}

                {!loading && error && <p>{error}</p>}
                {!error && <CategorysList linkHandler={linkHandler} data={categorys} active={selectedCategory}/>}
                {!loading && !error && <CatalogListItem />}
                {loading || loadingMoreItems && <CatalogLoader />}
                {!loadingMoreItems && allowMoreItems && <MoreItems moreBtnHandler={onMoreBtn} />}
          </section>
        </>
    )
}