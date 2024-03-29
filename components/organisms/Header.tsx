import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router"
import {useState} from "react"
import {CONTACT_URL} from "../../lib/constants"
import {useWindowSize} from "../../lib/useWindowSize"

// eslint-disable-next-line max-lines-per-function, complexity
export const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    const router = useRouter()
    const isHome = router.pathname === "/"
    const [width] = useWindowSize()

    return (
        <header className="flex justify-between items-center py-4 md:py-8 px-8 md:px-20 lg:px-44">
            {/* <!-- logo - start --> */}
            <a href="/" aria-label="logo">
                <Image
                    loader={({src}) => src}
                    src="/assets/logo.png"
                    alt="プロフィール写真"
                    width={width >= 1280 ? 230 : width >= 1024 ? 200 : 150}
                    height={45}
                />
            </a>
            {/* <!-- logo - end --> */}

            {/* <!-- nav - start --> */}
            <nav className="hidden md:flex gap-8">
                <Link href="/" className={`${isHome ? "text-white" : "text-black"} text-sm hover:text-gray-500 transition duration-100`}>ホーム</Link>
                <Link href="/about" className={`${isHome ? "text-white" : "text-black"} text-sm hover:text-gray-500 transition duration-100`}>ご挨拶</Link>
                <Link href="/portfolio" className={`${isHome ? "text-white" : "text-black"} text-sm hover:text-gray-500 transition duration-100`}>制作事例</Link>
                <Link href="/pricing" className={`${isHome ? "text-white" : "text-black"} text-sm hover:text-gray-500 transition duration-100`}>料金プラン</Link>
                <Link href={CONTACT_URL} target="_blank" className={`${isHome ? "text-white" : "text-black"} text-sm hover:text-gray-500 transition duration-100`}>お問い合わせ</Link>
            </nav>
            {/* <!-- nav - end --> */}

            {/* <!-- button - start --> */}
            <button type="button" onClick={() => setMenuVisible(!menuVisible)} className={`${isHome ? "text-white" : "text-black"} inline-flex items-center md:hidden focus-visible:ring ring-indigo-300 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill={isHome ? "white" : "black"}>
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Menu
            </button>
            {/* <!-- button - end --> */}

            {/* <!-- dropdown menu - start --> */}
            {menuVisible && (
                <div id="dropdownNavbar" className="absolute top-20 right-10 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                        <li>
                            <Link href="/" className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:${isHome ? "text-white" : "text-black"}`}>ホーム</Link>
                        </li>
                        <li>
                            <Link href="/about" className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:${isHome ? "text-white" : "text-black"}`}>ご挨拶</Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:${isHome ? "text-white" : "text-black"}`}>制作事例</Link>
                        </li>
                        <li>
                            <Link href="/pricing" className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:${isHome ? "text-white" : "text-black"}`}>料金プラン</Link>
                        </li>
                        <li>
                            <Link href={CONTACT_URL} target="_blank" className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:${isHome ? "text-white" : "text-black"}`}>お問い合わせ</Link>
                        </li>
                    </ul>
                </div>
            )}
            {/* <!-- dropdown menu - end --> */}
        </header>
    )
}
