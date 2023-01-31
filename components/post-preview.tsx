import CoverImage from "./cover-image"
import Link from "next/link"
import type Author from "../interfaces/author"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  className?: string
}

const PostPreview = ({
    title,
    coverImage,
    excerpt,
    slug,
    className
}: Props) => {
    return (
        <div className={`w-72 max-h-[30rem] md:max-h-[40rem] p-5 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out ${className}`}>
            <div className="mb-5">
                <CoverImage slug={slug} title={title} src={coverImage} />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl mb-3 truncate">
                <Link
                    as={`/posts/${slug}`}
                    href="/posts/[slug]"
                    className="hover:underline"
                >
                    {title}
                </Link>
            </h3>
            <p className="text-lg text-gray-500 leading-snug mb-4 line-clamp-3 md:line-clamp-5">{excerpt}</p>
        </div>
    )
}

export default PostPreview
