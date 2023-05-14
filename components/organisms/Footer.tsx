import Image from "next/image"
import Link from "next/link"
import {CONTACT_URL} from "../../lib/constants"
import {useWindowSize} from "../../lib/useWindowSize"

export const Footer = () => {
    const [width] = useWindowSize()

    return (
        <footer className="bg-black mt-8 md:mt-32 px-8 md:px-20 lg:px-44 py-12">
            <div className="sm:flex sm:gap-10">
                <Link href="/" aria-label="logo">
                    <Image
                        loader={({src}) => src}
                        src="/assets/logo_dark.png"
                        alt="プロフィール写真"
                        width={width >= 1280 ? 230 : width >= 1024 ? 200 : 150}
                        height={45}
                    />
                </Link>
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
