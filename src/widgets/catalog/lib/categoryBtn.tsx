interface CategoryBtnProps {
    linkHandler: (id: number) => void,
    data: {
        id: number,
        title: string
    },
    active: number
}

export const CategoryBtn = ({linkHandler, data, active}: CategoryBtnProps) => {

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        linkHandler(data.id)
    }

    return(
        <>
            <li className="nav-item">
                <a className={ active == data.id ?  'nav-link active' : 'nav-link' } href="" onClick={clickHandler}>{data.title}</a>
            </li>
        </>
    )
}