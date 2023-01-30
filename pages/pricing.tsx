import Layout from "../components/layout"
import Head from "next/head"
import {Pricing} from "../components/organisms/Pricing"

export default function Index() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Pricing</title>
                </Head>
                <Pricing />
            </Layout>
        </>
    )
}
