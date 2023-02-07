import Layout from "../components/layout"
import Head from "next/head"
import {Headline} from "../components/atoms/Headline"
import {PricingTable} from "../components/organisms/PricingTable"
import {SectionContainer} from "../components/molecules/SectionContainer"
import {OptionTable} from "../components/organisms/OptionTable"
import {CONTACT_URL, SITE_NAME} from "../lib/constants"

// eslint-disable-next-line max-lines-per-function
export default function Index() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{SITE_NAME} | 料金プラン</title>
                </Head>
                <SectionContainer>
                    <div className="bg-white py-6 sm:py-8 lg:py-12">
                        <div className="max-w-screen-xl mx-auto">
                            <Headline>料金プラン</Headline>
                            <p className="max-w-screen-md text-gray-500 text-sm md:text-base mt-4 text-center mx-auto">
                                <span className="inline-block leading-relaxed">お客様の現状をヒアリングし、</span>
                                <span className="inline-block leading-relaxed">要望にあったプランを提案します。</span>
                                <span className="inline-block leading-relaxed">ぜひまずはお気軽に</span>
                                <span className="inline-block leading-relaxed">お問い合わせください！</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex mt-4 mb-10">
                        <a href={CONTACT_URL} className="block mx-auto bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:w-full md:max-w-xs">お問い合わせ</a>
                    </div>
                    <PricingTable />
                </SectionContainer>
                <SectionContainer>
                    <div className="bg-white py-6 sm:py-8 lg:py-12">
                        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                            <Headline>オプション</Headline>
                            <p className="max-w-screen-md text-gray-500 text-sm md:text-base mt-8 text-center mx-auto">
                                上記のプランに加え、必要な要素をオプションとして追加することができます。
                            </p>
                        </div>
                    </div>
                    <OptionTable />
                    <div className="flex mt-4 mb-10">
                        <a href={CONTACT_URL} className="block mx-auto bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:w-full md:max-w-xs">お問い合わせ</a>
                    </div>
                </SectionContainer>
            </Layout>
        </>
    )
}
