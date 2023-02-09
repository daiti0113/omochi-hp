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
                </SectionContainer>
                <SectionContainer>
                    <Headline>スキル</Headline>
                    <Skills />
                </SectionContainer>
            </Layout>
        </>
    )
}
