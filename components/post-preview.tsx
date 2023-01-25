import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="w-96 p-5 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <p className="text-lg text-gray-500 leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostPreview
