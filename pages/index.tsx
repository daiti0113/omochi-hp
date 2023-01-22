import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{SITE_NAME}</title>
        </Head>
        <Container>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Blog Template
          </h1>
        </Container>
      </Layout>
    </>
  )
}
