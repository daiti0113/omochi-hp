import PostType from "../../interfaces/post"
import PostPreview from "../post-preview"


type PostListProps = {
  posts: PostType[]
}

export const PostList = ({posts}: PostListProps) => {
    return (
        <div className="grid place-items-center grid-cols-2 min-[1380px]:grid-cols-3 gap-y-10">
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
    )
}
