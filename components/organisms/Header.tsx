import Link from "next/link"

export const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
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
                <Link href="/contact-us" className="hover:text-gray-500 transition duration-100">CONTACT US</Link>
            </nav>
            {/* <!-- nav - end --> */}

            {/* <!-- button - start --> */}
            <button type="button" className="inline-flex items-center md:hidden hover:bg-gray-300 focus-visible:ring ring-indigo-300 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                Menu
            </button>
            {/* <!-- button - end --> */}
        </header>
    )
}
