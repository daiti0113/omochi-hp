import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="w-full mt-16 sm:mt-20 md:mt-24">
      <h2 className="px-10 md:px-20 lg:px-48 mb-8 text-center md:text-start text-2xl sm:text-3xl font-bold tracking-tighter leading-tight">
        制作事例
      </h2>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex gap-x-10 mx-10 md:mx-20 lg:mx-48 ">
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
