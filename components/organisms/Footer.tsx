import Link from "next/link"
import {CONTACT_URL} from "../../lib/constants"

export const Footer = () => {
    return (
        <footer className="bg-black mt-8 md:mt-32 px-8 md:px-20 lg:px-44 py-12">
            <div className="sm:flex">
                <div className="flex-none mr-10 sm:w-60">
                    <Link href="/" className="text-white hover:text-gray-300 text-2xl sm:text-3xl lg:text-[2.5rem] lg:text-left h-fit w-fit">
                        Omochi
                    </Link>
                </div>
                <div className="flex-1 flex flex-col gap-y-2 mt-8 sm:mt-0">
                    <Link href="/" className="text-white hover:text-gray-500 text-sm transition duration-100 w-fit">ホーム</Link>
                    <Link href="/about" className="text-white hover:text-gray-500 text-sm transition duration-100 w-fit">ご挨拶</Link>
                    <Link href="/portfolio" className="text-white hover:text-gray-500 text-sm transition duration-100 w-fit">制作事例</Link>
                    <Link href="/pricing" className="text-white hover:text-gray-500 text-sm transition duration-100 w-fit">料金プラン</Link>
                    <Link href={CONTACT_URL} target="_blank" className="text-white hover:text-gray-500 text-sm transition duration-100 w-fit">お問い合わせ</Link>
                </div>
            </div>
        </footer>
    )
}
