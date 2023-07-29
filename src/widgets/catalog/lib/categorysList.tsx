import { categoryID } from "../../../shared/model/brandtypes"
import { CategoryBtn } from "./categoryBtn"

interface CategorysListProps {
    linkHandler: (id: number) => void,
    data: {
        id: categoryID,
        title: string
    }[],
    active: categoryID
}

export const CategorysList = ({linkHandler, data, active}: CategorysListProps) => {

    return(
        <>
            <ul className="catalog-categories nav justify-content-center">
                <CategoryBtn linkHandler={linkHandler} data={{id: 1 as categoryID, title:'Все'}} active={active}/>
                {data.map(item => <CategoryBtn key={item.id} linkHandler={linkHandler} data={item} active={active}/>)}
            </ul>
        </>
    )
}