import Layout from "../components/layout"
import Head from "next/head"
import {Headline} from "../components/atoms/Headline"
import {PricingTable} from "../components/organisms/PricingTable"
import {SectionContainer} from "../components/molecules/SectionContainer"
import {OptionTable} from "../components/organisms/OptionTable"

// eslint-disable-next-line max-lines-per-function
export default function Index() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Pricing</title>
                </Head>
                <SectionContainer>
                    <div className="bg-white py-6 sm:py-8 lg:py-12">
                        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                            <Headline>料金プラン</Headline>
                            <p className="max-w-screen-md text-gray-500 text-sm md:text-base mt-8 text-center mx-auto">
                                <span>初期費用として制作費を頂きホームページが完成してから、</span>
                                <span>運用代行費としての月額料金になるシンプルなプランです。</span>
                            </p>
                        </div>
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
                </SectionContainer>
            </Layout>
        </>
    )
}
