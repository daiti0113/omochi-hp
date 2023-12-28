import Head from "next/head"
import Layout from "../../components/layout"
import {SectionContainer} from "../../components/molecules/SectionContainer"
import {CONTACT_URL, SITE_NAME} from "../../lib/constants"
import { Headline } from "../../components/atoms/Headline"

// eslint-disable-next-line max-lines-per-function
export default function Index() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{SITE_NAME} | 【先着5名様限定】¥3,000 キャンペーン！</title>
                </Head>
                <div className="w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
                    <div className="flex w-full mx-auto text-left">
                        <div className="relative inline-flex items-center mx-auto align-middle">
                            <div className="pb-12 text-center">
                                <h1 className="flex flex-col font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                                    <span className="text-3xl mb-10">通常『 初期費用 ¥ 20,000 ＋ 月額 ¥ 10,000 』のところ</span>
                                    <span className="text-8xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">月額</span>
                                    <span className="text-[256px] text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">¥3,000</span>
                                    <span className="text-6xl mt-6">キャンペーン実施中</span>
                                </h1>
                                <div className="mt-12">
                                    <a href={CONTACT_URL} className="block mx-auto bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:w-full md:max-w-xs shadow-xl"><span className="text-xs">まずは </span>お問い合わせ</a>
                                </div>
                                <div className="mx-auto">
                                    <p className="mt-4 text-xs text-gray-500">
                                        制作事例の募集に伴うキャンペーンのため、先着5名様までとなっております。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionContainer>
                    <div className="mb-10 md:mb-16">
                        <Headline>
                            <span className="inline-block leading-normal">原価スレスレでのキャンペーンです</span>
                        </Headline>
                        <p className="max-w-screen-md text-gray-500 text-sm md:text-base mt-8 text-center mx-auto">
                            <span className="inline-block leading-relaxed">ホームページ制作はわからないことが多く、</span>
                            <span className="inline-block leading-relaxed">何かと不安になってしまいます。</span>
                            <span className="inline-block leading-relaxed">必要以上のコスト、効果に見合わないコストを</span>
                            <span className="inline-block leading-relaxed">支払っていることも少なくありません。</span>
                            <span className="inline-block leading-relaxed">Omochi では、</span>
                            <span className="inline-block leading-relaxed">ホームページを作るために必要なコストを</span>
                            <span className="inline-block leading-relaxed">なるべくわかりやすくご説明し、</span>
                            <span className="inline-block leading-relaxed">お客様の目的を達成するために</span>
                            <span className="inline-block leading-relaxed">必要な費用のみをお支払いいただきます。</span>
                        </p>
                    </div>
                </SectionContainer>

            </Layout>
        </>
    )
}
