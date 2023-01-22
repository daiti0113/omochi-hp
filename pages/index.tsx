import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{SITE_NAME} | Home</title>
        </Head>
        <Container>
          <span className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
            Omochi
          </span>
        </Container>
      </Layout>
    </>
  )
}
