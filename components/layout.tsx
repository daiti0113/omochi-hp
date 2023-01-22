import Link from 'next/link'
import Container from './container'
import Footer from './footer'
import Meta from './meta'

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
          <div className="flex">
            <span className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
              Omochi
            </span>
            <div className="flex text-lg gap-x-5">
              <Link href="/">HOME</Link>
              <Link href="/portfolio">PORTFOLIO</Link>
              <Link href="/pricing">PRICING</Link>
              <Link href="/contact-us">CONTACT US</Link>
            </div>
          </div>
          <main>{children}</main>
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default Layout
