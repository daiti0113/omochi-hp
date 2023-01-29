import Link from "next/link"
import {useState} from "react"
import {CONTACT_URL} from "../../lib/constants"

// eslint-disable-next-line max-lines-per-function
export const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <header className="flex justify-between items-center py-4 md:py-8 px-10 md:px-20 lg:px-48">
            {/* <!-- logo - start --> */}
            <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>
                Omochi
            </a>
            {/* <!-- logo - end --> */}

            {/* <!-- nav - start --> */}
            <nav className="hidden md:flex gap-12">
                <Link href="/" className="hover:text-gray-500 transition duration-100">HOME</Link>
                <Link href="/portfolio" className="hover:text-gray-500 transition duration-100">PORTFOLIO</Link>
                <Link href="/pricing" className="hover:text-gray-500 transition duration-100">PRICING</Link>
                <Link href={CONTACT_URL} target="_blank" className="hover:text-gray-500 transition duration-100">CONTACT US</Link>
            </nav>
            {/* <!-- nav - end --> */}

            {/* <!-- button - start --> */}
            <button type="button" onClick={() => setMenuVisible(!menuVisible)} className="inline-flex items-center md:hidden hover:bg-gray-300 focus-visible:ring ring-indigo-300 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
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
                            <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">HOME</Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PRICING</Link>
                        </li>
                        <li>
                            <Link href={CONTACT_URL} target="_blank" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            )}
            {/* <!-- dropdown menu - end --> */}
        </header>
    )
}
