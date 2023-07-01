import { Footer } from "../../Footer"
import { Header } from "../../Header"
import { Banner } from "../../banner"
import { CartOrderForm } from "./cartOrderForm"
import { TBodyForItems } from './tBodyForItems'


export const CartPage: React.FC = () => {

    return(
        <>
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner />
                        <section className="cart">
                            <h2 className="text-center">Корзина</h2>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Название</th>
                                        <th scope="col">Размер</th>
                                        <th scope="col">Кол-во</th>
                                        <th scope="col">Стоимость</th>
                                        <th scope="col">Итого</th>
                                        <th scope="col">Действия</th>
                                    </tr>
                                </thead>
                                <TBodyForItems />
                            </table>
                        </section>
                        <CartOrderForm />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}