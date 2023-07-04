import { ReactNode } from "react"
import { Footer } from "../widgets/Footer"
import { Banner } from "../shared/banner"
import { Header } from "../widgets/Header"


interface PatternPageProps {
    children: ReactNode
}

export const PatternPage: React.FC<PatternPageProps> = ({children}) => {

    return(
        <>
        <Header />
        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner />
                    {children}
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}