import Head from "next/head"
import Layout from "../../components/layout"
import {SectionContainer} from "../../components/molecules/SectionContainer"
import {CONTACT_URL, SITE_NAME} from "../../lib/constants"
import {Headline} from "../../components/atoms/Headline"

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
                            <span className="text-sm sm:hidden mb-6">通常『 初期費用 ¥ 20,000 ＋ 月額 ¥ 10,000 』が</span>
                            <span className="hidden text-xl mb-10 sm:inline">通常『 初期費用 ¥ 20,000 ＋ 月額 ¥ 10,000 』のところ</span>
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
                    <span className="inline-block leading-normal">ほぼ原価でのキャンペーンです</span>
                </Headline>
                <p className="max-w-screen-md text-gray-500 text-sm md:text-base mt-8 text-center mx-auto">
                    <span className="inline-block leading-relaxed">ホームページをもつには、</span>
                    <span className="inline-block leading-relaxed">サーバーやドメインなどの月額費用が必要です。</span>
                    <span className="inline-block leading-relaxed">本キャンペーンの価格は、</span>
                    <span className="inline-block leading-relaxed">その費用(原価)とほぼ同額に設定しています。</span>
                    <span className="inline-block leading-relaxed mt-4">なんと、それだけではありません。</span>
                    <span className="inline-block leading-relaxed">ホームページの制作費は<span className="font-bold">無料</span>、</span>
                    <span className="inline-block leading-relaxed">さらに、制作したホームページを</span>
                    <span className="inline-block leading-relaxed">検索順位で上位に上げるための</span>
                    <span className="inline-block leading-relaxed"><span className="font-bold">SEO対策 オプション</span>まで付いています！</span>
                    <span className="inline-block leading-relaxed mt-4">素直に申し上げます。</span>
                    <span className="inline-block leading-relaxed">ここまでする理由は、</span>
                    <span className="inline-block leading-relaxed">Omochi の制作実績を増やしたいからです！</span>
                    <span className="inline-block leading-relaxed">ぜひこの機会にご依頼ください！</span>
                </p>
            </div>
        </SectionContainer>
    )
}
