import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Contact Us</title>
        </Head>
        <Container>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Contact Us.
          </h1>
          <p>これはテストページです。</p>
        </Container>
      </Layout>
    </>
  )
}
