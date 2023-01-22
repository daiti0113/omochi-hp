import Footer from './footer'
import Meta from './meta'
import { Header } from './organisms/Header'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <div className="container max-w-screen-2xl px-4 md:px-10 lg:px-20 xl:px-40 mx-auto">
          <Header />
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
