import { Footer } from "../Footer"
import { Header } from "../Header"
import { Banner } from "../banner"


export const NotFoundPage: React.FC = () => {

    return(
        <>
            <Header />
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner />
                        <section className="top-sales">
                            <h2 className="text-center">Страница не найдена</h2>
                            <p>
                                Извините, такая страница не найдена!
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}