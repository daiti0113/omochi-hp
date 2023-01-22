import Link from 'next/link'
import Container from './container'
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
        <Container>
          <Header />
          <main>{children}</main>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Layout
