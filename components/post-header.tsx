import Avatar from "./avatar"
import DateFormatter from "./date-formatter"
import CoverImage from "./cover-image"
import PostTitle from "./post-title"
import type Author from "../interfaces/author"
import Link from "next/link"

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  link: string
}

const PostHeader = ({title, coverImage, date, author, link}: Props) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="mb-8 md:mb-16 sm:mx-0">
                <Link href={link} target="_blank">
                    <CoverImage title={title} src={coverImage} />
                </Link>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6">
                    <Avatar name={author.name} picture={author.picture} />
                </div>
                <div className="mb-6 text-lg">
                    <DateFormatter dateString={date} />
                </div>
            </div>
        </>
    )
}

export default PostHeader
