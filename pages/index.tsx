import Layout from "../components/layout"
import Head from "next/head"
import {SITE_NAME} from "../lib/constants"
import {getAllPosts} from "../lib/api"
import MoreStories from "../components/more-stories"
import Post from "../interfaces/post"
import {Hero} from "../components/organisms/Hero"
import {Message} from "../components/organisms/Message"
import {Stats} from "../components/organisms/Stats"

type Props = {
  allPosts: Post[]
}

export default function Index({allPosts}: Props) {
    const morePosts = allPosts
    return (
        <Layout>
            <Head>
                <title>{SITE_NAME} | Home</title>
            </Head>
            <Hero />
            <Message />
            <Stats />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Layout>
    )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt"
    ])

    return {
        props: {allPosts}
    }
}
