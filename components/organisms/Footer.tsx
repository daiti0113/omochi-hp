import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-black mt-32 px-48 py-12">
      <div className="flex">
        <div className="flex-none w-60">
          <Link href="/" className="text-white hover:text-gray-300 text-3xl lg:text-[2.5rem] lg:text-left h-fit w-fit">
            Omochi
          </Link>
        </div>
        <div className="flex-1 flex flex-col">
          <Link href="/" className="text-white hover:text-gray-500 transition duration-100 w-fit">HOME</Link>
          <Link href="/portfolio" className="text-white hover:text-gray-500 transition duration-100 w-fit">PORTFOLIO</Link>
          <Link href="/pricing" className="text-white hover:text-gray-500 transition duration-100 w-fit">PRICING</Link>
          <Link href="/contact-us" className="text-white hover:text-gray-500 transition duration-100 w-fit">CONTACT US</Link>
        </div>
      </div>
    </footer>
  )
}
