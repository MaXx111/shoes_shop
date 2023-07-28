import { PatternPage } from "../patternPage"


export const NotFoundPage = () => {

    return(
        <>
            <PatternPage bannerImg='./banner.jpg' headerImg='./header-logo.png'>
                <section className="top-sales">
                    <h2 className="text-center">Страница не найдена</h2>
                    <p>
                        Извините, такая страница не найдена!
                    </p>
                </section>
            </PatternPage>       
        </>
    )
}