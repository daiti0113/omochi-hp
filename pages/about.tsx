import Layout from "../components/layout"
import Head from "next/head"
import {SectionContainer} from "../components/molecules/SectionContainer"
import {SITE_NAME} from "../lib/constants"
import {Profile} from "../components/organisms/Profile"

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
            </Layout>
        </>
    )
}
