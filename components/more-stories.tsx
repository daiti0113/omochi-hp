import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="w-full">
      <h2 className="mb-8 text-center md:text-start text-2xl sm:text-3xl font-bold tracking-tighter leading-tight">
        制作事例
      </h2>
      <div className="flex gap-x-10 overflow-x-scroll pb-10 hide-scroll-bar">
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
    </section>
  )
}

export default MoreStories
