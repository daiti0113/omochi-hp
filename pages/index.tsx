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
      </Layout>
    </>
  )
}
