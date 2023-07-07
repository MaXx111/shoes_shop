import React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CatalogSlice } from "../../widgets/catalog/model/slice";
import { fetchSearchItems } from "../../widgets/catalog/api/fetchSearchItems";


export const FormSearch: React.FC = () => {

    const {searchValue} = useAppSelector(state => state.CatalogReducer)

    const dispatch = useAppDispatch()

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        dispatch(CatalogSlice.actions.addSearchValue(e.target.value))
    }

    const submitHandler = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(CatalogSlice.actions.selectCategory(0))
        dispatch(fetchSearchItems(searchValue))
    }

    return(
        <>
            <form className="catalog-search-form form-inline" onSubmit={submitHandler}>
                <input className="form-control" placeholder="Поиск" value={searchValue} onChange={inputHandler} />
            </form>
        </>
    )
}