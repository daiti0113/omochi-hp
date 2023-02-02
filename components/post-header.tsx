import DateFormatter from "./date-formatter"
import CoverImage from "./cover-image"
import PostTitle from "./post-title"
import type Author from "../interfaces/author"
import Link from "next/link"
import {FiExternalLink} from "react-icons/fi"

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  link: string
}

const PostHeader = ({title, coverImage, date, link}: Props) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="mb-8 md:mb-16 sm:mx-0">
                <Link href={link} target="_blank">
                    <CoverImage title={title} src={coverImage} />
                </Link>
            </div>
            <div className="flex mt-4 mb-10">
                <Link href={link} target="_blank" className="flex place-items-center justify-center mx-auto bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:w-full md:max-w-xs">
                    サイトを見てみる
                    <FiExternalLink className="ml-2" />
                </Link>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 text-lg">
                    <DateFormatter dateString={date} />
                </div>
            </div>
        </>
    )
}

export default PostHeader
