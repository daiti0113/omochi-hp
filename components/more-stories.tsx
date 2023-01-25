import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="w-full">
      <h2 className="pl-48 mb-8 text-center md:text-start text-2xl sm:text-3xl font-bold tracking-tighter leading-tight">
        制作事例
      </h2>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex mx-48 gap-x-10">
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
