import {useRouter} from "next/router"
import ErrorPage from "next/error"
import PostBody from "../../components/post-body"
import PostHeader from "../../components/post-header"
import Layout from "../../components/layout"
import {getPostBySlug, getAllPosts} from "../../lib/api"
import PostTitle from "../../components/post-title"
import Head from "next/head"
import markdownToHtml from "../../lib/markdownToHtml"
import type PostType from "../../interfaces/post"
import {SectionContainer} from "../../components/molecules/SectionContainer"
import {SITE_NAME} from "../../lib/constants"

type Props = {
  post: PostType
  morePosts: PostType[]
}

// eslint-disable-next-line max-lines-per-function
export default function Post({post}: Props) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout>
            {router.isFallback ? (
                <PostTitle>Loading…</PostTitle>
            ) : (
                <>
                    <article className="mb-32">
                        <Head>
                            <title>
                                {SITE_NAME} | {post.title}の制作事例
                            </title>
                            <meta property="og:image" content={post.ogImage.url} />
                        </Head>
                        <SectionContainer>
                            <PostHeader
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                                link={post.link}
                            />
                        </SectionContainer>
                        <SectionContainer>
                            <PostBody content={post.content} />
                        </SectionContainer>
                    </article>
                </>
            )}
        </Layout>
    )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({params}: Params) {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content",
        "ogImage",
        "coverImage",
        "link"
    ])
    const content = await markdownToHtml(post.content || "")

    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug
                }
            }
        }),
        fallback: false
    }
}
