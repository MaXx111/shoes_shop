interface ProductMoreInfoProps {
    product: {
        sku: string,
        manufacturer: string,
        color: string,
        material: string,
        season: string,
        reason: string
    }
}

export const ProductMoreInfo: React.FC<ProductMoreInfoProps> = ({product}) => {

    return(
        <>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>Артикул</td>
                        <td>{product.sku}</td>
                    </tr>
                    <tr>
                        <td>Производитель</td>
                        <td>{product.manufacturer}</td>
                    </tr>
                    <tr>
                        <td>Цвет</td>
                        <td>{product.color}</td>
                    </tr>
                    <tr>
                        <td>Материалы</td>
                        <td>{product.material}</td>
                    </tr>
                    <tr>
                        <td>Сезон</td>
                        <td>{product.season}</td>
                    </tr>
                    <tr>
                        <td>Повод</td>
                        <td>{product.reason}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}