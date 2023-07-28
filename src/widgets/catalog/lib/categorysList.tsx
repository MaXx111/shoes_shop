import { CategoryBtn } from "./categoryBtn"

interface CategorysListProps {
    linkHandler: (id: number) => void,
    data: {
        id: number,
        title: string
    }[],
    active: number
}

export const CategorysList: React.FC<CategorysListProps> = ({linkHandler, data, active}) => {

    return(
        <>
            <ul className="catalog-categories nav justify-content-center">
                <CategoryBtn linkHandler={linkHandler} data={{id: 1, title:'Все'}} active={active}/>
                {data.map(item => <CategoryBtn key={item.id} linkHandler={linkHandler} data={item} active={active}/>)}
            </ul>
        </>
    )
}