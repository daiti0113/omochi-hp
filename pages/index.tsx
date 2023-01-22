import Layout from '../components/layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'

export default function Index() {
  return (
      <Layout>
        <Head>
          <title>{SITE_NAME} | Home</title>
        </Head>
        {/* TODO: Heroコンポーネントに移動する */}
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          <div className="xl:w-5/12 flex flex-col justify-center items-center lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24">
            <h1 className="text-black-800 text-6x sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">ホームページを<br />作成するよ</h1>
            <form className="w-full md:max-w-md flex gap-2">
              <button className="inline-block bg-black hover:bg-black-600 active:bg-black-700 focus-visible:ring ring-black-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Sign up</button>
            </form>
          </div>
        </section>
      </Layout>
  )
}
