import Layout from "../components/layout"
import Head from "next/head"
import {SectionContainer} from "../components/molecules/SectionContainer"
import {Headline} from "../components/atoms/Headline"
import {SITE_NAME} from "../lib/constants"
import {Profile} from "../components/organisms/Profile"
import {Skills} from "../components/organisms/Skills"

export default function Index() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{SITE_NAME} | 制作事例</title>
                </Head>
                <SectionContainer>
                    <Profile />
                    <p className="max-w-screen-md text-gray-600 text-sm md:text-base mt-20 text-center mx-auto">
                        <span className="inline-block leading-relaxed">「最終的にはホームページ制作に限らず、</span>
                        <span className="inline-block leading-relaxed">ITのトータルサポートを目指しています。</span>
                        <span className="inline-block leading-relaxed">なにかお困りのことがありましたら、お気軽にご相談下さい。」</span>
                    </p>
                </SectionContainer>
                <SectionContainer>
                    <Headline>スキル</Headline>
                    <Skills />
                </SectionContainer>
            </Layout>
        </>
    )
}
