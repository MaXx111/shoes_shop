import { NavLink } from 'react-router-dom'

interface OrderProductLinkProps {
    link: number
    clickHandler: () => void
}

export const OrderProductLink: React.FC<OrderProductLinkProps> = ({link, clickHandler}) => {

    return(
        <>
            <NavLink to={'/shoes_shop/product/'+link} className="btn btn-outline-primary" onClick={clickHandler}>Заказать</NavLink>
        </>
    )
}