import Layout from "../components/layout"
import Head from "next/head"
import {SectionContainer} from "../components/molecules/SectionContainer"
import {PostList} from "../components/organisms/PostList"
import {getAllPosts} from "../lib/api"
import PostType from "../interfaces/post"

type Props = {
    posts: PostType[]
}

export default function Index({posts}: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Portfolio</title>
                </Head>
                <SectionContainer>
                    <PostList posts={posts} />
                </SectionContainer>
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const posts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt"
    ])

    return {
        props: {posts}
    }
}
