import PostPreview from "./post-preview"
import type Post from "../interfaces/post"
import {Headline} from "./atoms/Headline"

type Props = {
  posts: Post[]
}

const MoreStories = ({posts}: Props) => {
    return (
        <section className="w-full mt-16 sm:mt-20 md:mt-24">
            <Headline className="px-10 md:px-20 lg:px-44 md:text-start">制作事例</Headline>
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div className="flex gap-x-10 mx-10 md:mx-20 lg:mx-48 py-12">
                    {posts.map((post) => (
                        <PostPreview
                            key={post.slug}
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            author={post.author}
                            slug={post.slug}
                            excerpt={post.excerpt}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MoreStories
