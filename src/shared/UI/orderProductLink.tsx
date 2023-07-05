import { NavLink } from 'react-router-dom'

interface OrderProductLinkProps {
    link: number
}

export const OrderProductLink: React.FC<OrderProductLinkProps> = ({link}) => {

    return(
        <>
            <NavLink to={'/shoes_shop/product/'+link} className="btn btn-outline-primary">Заказать</NavLink>
        </>
    )
}