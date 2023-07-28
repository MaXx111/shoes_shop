import { ReactNode } from "react"
import { Footer } from "../widgets/footer/Footer"
import { Banner } from "../shared/banner"
import { Header } from "../widgets/header/Header"


interface PatternPageProps {
    children: ReactNode,
    bannerImg: string,
    headerImg: string
}

export const PatternPage = ({children, bannerImg, headerImg}: PatternPageProps) => {

    return(
        <>
        <Header imgLink={headerImg}/>
        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner imgLink={bannerImg}/>
                    {children}
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}