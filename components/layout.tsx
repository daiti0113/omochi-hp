import Meta from "./meta"
import {Footer} from "./organisms/Footer"
import {Header} from "./organisms/Header"

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({preview, children}: Props) => {
    return (
        <>
            <Meta />
            <div className="min-h-screen">
                <div>
                    <Header />
                    <main>{children}</main>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
