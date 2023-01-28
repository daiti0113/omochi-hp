import Layout from '../components/layout'
import Head from 'next/head'
import { SITE_NAME } from '../lib/constants'
import { getAllPosts } from '../lib/api'
import MoreStories from '../components/more-stories'
import Post from '../interfaces/post'
import { SectionContainer } from '../components/molecules/SectionContainer'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts
  return (
      <Layout>
        <Head>
          <title>{SITE_NAME} | Home</title>
        </Head>
        {/* TODO: Heroコンポーネントに移動する */}
        <SectionContainer>
          <div className="xl:w-5/12 flex flex-col justify-center items-center md:items-start sm:text-center md:text-left lg:py-12 xl:py-24">
            <h1 className="text-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 md:w-96">
              <span className="inline-block leading-tight">ホームページを</span>
              <span className="inline-block leading-tight">作成するよ</span>
            </h1>
            <form className="flex xs:self-start">
              <button className="inline-block bg-black hover:bg-black-600 active:bg-black-700 focus-visible:ring ring-black-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Sign up</button>
            </form>
          </div>
        </SectionContainer>
        {/* <!-- text - start --> */}
        <SectionContainer>
          <div className="mb-10 md:mb-16">
            <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
              <span className="inline-block leading-normal">誰でも気軽に</span>
              <span className="inline-block leading-normal">ホームページがもてる時代に</span>
            </h2>
            <p className="max-w-screen-md text-gray-500 text-sm mt-8 md:text-base text-center mx-auto break-keep">
            「いろいろな人に知ってもらうため」「信頼を得るため」「情報を発信するため」、ホームページを作る理由は様々です。だれもが何にだって挑戦できる時代だからこそ、一人ひとりの思いを届けるための場所を形にします。
            </p>
          </div>
        </SectionContainer>
        {/* <!-- text - end --> */}
        <SectionContainer>
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                    <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center" />
                  </div>
                </div>
                <div>
                  <h1 className="text-black text-2xl md:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                    <span className="inline-block leading-normal">こんなに作ったんだよ。</span>
                    <span className="inline-block leading-normal">すごいでしょ。</span>
                  </h1>
                  <p className="text-gray-500 text-center md:text-start text-base mb-6 md:mb-8 break-keep">
                    美容室とかカフェとかたくさん回って、丁寧にヒアリングしてたくさん作ったんだよ。頼まれたらすぐ作っちゃうから依頼してね。でーじ上等な一眼レフも買ったから、素材がないときも気軽に相談していいからね。
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 px-10 sm:px-0 gap-4">
                    {/* <!-- feature - start --> */}
                    <div className="flex flex-col items-center md:items-start">
                      <span className="text-gray-600 text-6xl lg:text-6xl font-semibold mb-2">17</span>
                      <p className="text-gray-600 font-semibold mb-2">サイト数</p>
                    </div>
                    {/* <!-- feature - end --> */}

                    {/* <!-- feature - start --> */}
                    <div className="flex flex-col items-center md:items-start">
                      <span className="text-gray-600 text-6xl lg:text-6xl font-semibold mb-2">23</span>
                      <p className="text-gray-600 font-semibold mb-2">ページ数</p>
                    </div>
                    {/* <!-- feature - end --> */}

                    {/* <!-- feature - start --> */}
                    <div className="flex flex-col items-center md:items-start">
                      <span className="text-gray-600 text-6xl lg:text-6xl font-semibold mb-2">360</span>
                      <p className="text-gray-600 text-base font-semibold mb-2">アクセス数</p>
                    </div>
                    {/* <!-- feature - end --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

// TODO: SectionContainerのContainerを作成
