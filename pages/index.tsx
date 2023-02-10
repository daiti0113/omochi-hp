import Layout from "../components/layout"
import Head from "next/head"
import {SITE_NAME} from "../lib/constants"
import {getAllPosts} from "../lib/api"
import Post from "../interfaces/post"
import {Hero} from "../components/organisms/Hero"
import {Message} from "../components/organisms/Message"
import {Stats} from "../components/organisms/Stats"
import {MorePosts} from "../components/organisms/MorePosts"
import {Square} from "../components/atoms/Square"

type Props = {
  allPosts: Post[]
}
export default function Index({allPosts}: Props) {
    const morePosts = allPosts
    return (
        <Layout>
            <Head>
                <title>ホームページ制作・作成 沖縄 | {SITE_NAME}</title>
            </Head>
            <Square className={`
                absolute
                top-[-46vw] sm:top-[-46vw] md:top-[-30vw] lg:top-[-25vw]
                right-[-25px] md:right-6 lg:right-0 xl:right-[-10rem]
                rotate-[30deg] md:rotate-[42deg]
                rounded-[40px] min-[480px]:rounded-[100px] md:rounded-[120px]
                -z-10
            `} />
            <Hero />
            <Message />
            <Stats />
            {morePosts.length > 0 && <MorePosts posts={morePosts} />}
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
