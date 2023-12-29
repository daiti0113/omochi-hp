import Head from "next/head"
import Layout from "../../components/layout"
import {SectionContainer} from "../../components/molecules/SectionContainer"
import {CONTACT_URL, SITE_NAME} from "../../lib/constants"
import {Headline} from "../../components/atoms/Headline"
import {Feature} from "../../components/molecules/Feature"
import {FiPlus, FiTrendingUp} from "react-icons/fi"

// eslint-disable-next-line max-lines-per-function
export default function Index() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{SITE_NAME} | 【先着5名様限定】¥3,000 キャンペーン！</title>
                </Head>
                <PcHero />
                <MobileHero />
                <ScrollDownArrow />
                <Message />
                <PlanDetail />
            </Layout>
        </>
    )
}

const PcHero = () => {
    return (
        <div className="hidden w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24 lg:block">
            <div className="flex w-full mx-auto text-left">
                <div className="relative inline-flex items-center mx-auto align-middle">
                    <div className="pb-12 text-center">
                        <h1 className="flex flex-col font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                            <span className="text-3xl mb-10">通常『 初期費用 ¥ 30,000 ＋ 月額 約 ¥ 10,000 』のところ</span>
                            <span className="text-8xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">月額</span>
                            <span className="text-[256px] text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">¥3,000</span>
                            <span className="text-6xl mt-6">キャンペーン実施中</span>
                        </h1>
                        <div className="mt-12">
                            <a href={CONTACT_URL} className="block mx-auto bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:w-full md:max-w-xs shadow-xl"><span className="text-xs">まずは </span>お問い合わせ</a>
                        </div>
                        <div className="mx-auto">
                            <p className="mt-4 text-xs text-gray-500">
                                制作事例の募集に伴うキャンペーンのため、先着5名様までとなっております。枠が埋まり次第、終了となります。
                            </p>
                            <p className="mt-2 text-xs text-gray-500">
                                同一人物による複数回のお申し込みはお断りしています。また、他の割引との併用はできません。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MobileHero = () => {
    return (
        <div className="w-full px-5 py-12 mx-auto lg:hidden">
            <div className="flex w-full mx-auto text-left">
                <div className="relative inline-flex items-center mx-auto align-middle">
                    <div className="pb-12 text-center">
                        <h1 className="flex flex-col font-bold leading-none tracking-tighter text-neutral-600">
                            <span className="text-sm sm:hidden">制作事例の募集に伴い、</span>
                            <span className="text-sm sm:hidden mb-6">通常『 初期費用 ¥ 30,000 ＋ 月額 約 ¥ 10,000 』が</span>
                            <span className="hidden text-xl mb-10 sm:inline">通常『 初期費用 ¥ 30,000 ＋ 月額 約 ¥ 10,000 』のところ</span>
                            <span className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">月額</span>
                            <span className="text-[86px] sm:text-9xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">¥3,000</span>
                            <span className="text-3xl sm:text-4xl mt-6 sm:mt-8">キャンペーン実施中</span>
                        </h1>
                        <div className="max-w-xs sm:max-w-none mt-12 sm:mt-20 mx-auto">
                            <a href={CONTACT_URL} className="block mx-auto bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 shadow-xl"><span className="text-xs">まずは </span>お問い合わせ</a>
                        </div>
                        <div className="mx-auto">
                            <p className="mt-4 text-xs text-gray-500">
                                <span className="inline-block">制作事例の募集に伴うキャンペーンのため、</span>
                                <span className="inline-block">先着5名様までとなっております。</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ScrollDownArrow = () => {
    return (
        <div className="flex flex-col items-center self-center gap-4">
            <span className="text-black font-semibold">scroll</span>
            <div className="relative">
                <div className="scrolldown1 after:absolute after:top-0 after:bottom-0 after:w-[1px] after:bg-primary-500 after:animate-scrollEffect" />
            </div>
        </div>
    )
}

const Message = () => {
    return (
        <SectionContainer>
            <div className="mb-10 md:mb-16">
                <Headline>
                    <span className="inline-block leading-normal">驚きの価格で、上位表示されるホームページを</span>
                </Headline>
                <p className="max-w-screen-md text-gray-500 text-sm md:text-base mt-8 text-center mx-auto">
                    <span className="inline-block leading-relaxed">通常、ホームページを運用するには、</span>
                    <span className="inline-block leading-relaxed">サーバーやドメインの月額費用に加え、</span>
                    <span className="inline-block leading-relaxed">運用代行費などの手数料がかかります。</span>
                </p>
                <p className="max-w-screen-md text-gray-500 text-sm md:text-base mt-4 text-center mx-auto">
                    <span className="inline-block leading-relaxed">しかし、このキャンペーンでは、作成したホームページを</span>
                    <span className="inline-block leading-relaxed">制作事例としてご紹介させていただくことを条件に、</span>
                    <span className="inline-block leading-relaxed">原価に近い水準で価格を設定しました。</span>
                </p>
                <p className="max-w-screen-md text-gray-500 text-sm md:text-base mt-4 text-center mx-auto">
                    <span className="inline-block leading-relaxed">しかも、驚きの<span className="font-bold">制作費無料</span>に加えて、</span>
                    <span className="inline-block leading-relaxed">ホームページ制作後に検索順位で上位に上げるための</span>
                    <span className="inline-block leading-relaxed"><span className="font-bold">SEO対策 オプション</span>まで含んでいます！</span>
                    <span className="inline-block leading-relaxed">ぜひ、この機会にご依頼ください！</span>
                </p>
            </div>
        </SectionContainer>
    )
}

// eslint-disable-next-line max-lines-per-function
const PlanDetail = () => {
    return (
        <SectionContainer>
            <Headline>
                <span className="inline-block leading-normal">プラン詳細</span>
            </Headline>
            <div className="flex flex-col space-y-4 mt-10">
                <div className="flex flex-col border border-primary-500 rounded-lg relative gap-4 p-4 pt-6">
                    <div className="flex justify-center absolute -top-3 inset-x-0">
                        <span className="h-6 flex justify-center items-center bg-primary-500 text-white text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1">先着5名様</span>
                    </div>
                    <h3 className="text-gray-800 text-2xl font-semibold text-center">キャンペーンプラン</h3>
                    <div className="flex justify-center items-end gap-1">
                        <span className="text-4xl text-gray-800 font-bold">¥3,000</span>
                        <span className="text-gray-500">/ 月</span>
                    </div>
                    <div className="flex flex-col justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                        <span className="line-through">+ ¥30,000 の制作費</span>
                        <span className="text-primary-500 font-semibold">初期費用はかかりません</span>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg space-y-3 px-6 py-6">
                    <div className="max-w-fit sm:mx-auto">
                        <Feature>常時SSL対応</Feature>
                        <Feature>レスポンシブデザイン</Feature>
                        <Feature>ブログ</Feature>
                        <Feature>お問い合わせフォーム</Feature>
                        <Feature>Googleビジネスプロフィール</Feature>
                        <Feature>SEOレポート作成</Feature>
                        <Feature>サーバー容量 : 5GB</Feature>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center my-8 sm:my-6">
                <FiPlus size={50} />
            </div>

            <div className="flex flex-col items-center">
                <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-primary-500 mb-2 sm:mb-4">
                    <FiTrendingUp size={50} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-center mb-2">SEO対策 オプション</h3>
                <p className="text-gray-500 text-center mb-2">SEOレポートの作成に加え、データをもとにGoogleでの検索順位が上がるよう戦略を策定します。</p>
                <p className="font-bold line-through">¥3,000 /月</p>
                <span className="text-primary-500 font-semibold mt-6">オプションも無料でつきます！</span>
            </div>

            <div className="max-w-xs sm:max-w-none mt-12 sm:mt-28 mx-auto">
                <a href={CONTACT_URL} className="block mx-auto bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 shadow-xl"><span className="text-xs">まずは </span>お問い合わせ</a>
            </div>
            <div className="mx-auto text-center mb-20">
                <p className="mt-4 text-xs text-gray-500">
                    <span className="inline-block">制作事例の募集に伴うキャンペーンのため、</span>
                    <span className="inline-block">先着5名様までとなっております。</span>
                </p>
            </div>
        </SectionContainer>
    )
}
