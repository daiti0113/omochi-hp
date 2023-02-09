import Image from "next/image"
import Link from "next/link"

// eslint-disable-next-line max-lines-per-function
export const Skills = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 rounded-lg gap-4 lg:gap-6">
                    <Link href="https://www.figma.com/ja/" className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-3 md:p-8">
                        <Logo src="/assets/skills/figma_logo.svg" alt="Figmaロゴ" />
                    </Link>
      
                    <Link href="https://www.figma.com/ja/" className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-3 md:p-8">
                        <Logo src="/assets/skills/typescript_logo.png" alt="TypeScriptロゴ" />
                    </Link>

                    <Link href="https://www.figma.com/ja/" className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-3 md:p-8">
                        <Logo src="/assets/skills/react_logo.png" alt="Reactロゴ" />
                    </Link>

                    <Link href="https://www.figma.com/ja/" className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-3 md:p-8">
                        <Logo src="/assets/skills/nextjs_logo.svg" alt="Next.jsロゴ" />
                    </Link>

                    <Link href="https://www.figma.com/ja/" className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-3 md:p-8">
                        <Logo src="/assets/skills/wordpress_logo.png" alt="WordPressロゴ" />
                    </Link>

                    <Link href="https://www.figma.com/ja/" className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-3 md:p-8">
                        <Logo src="/assets/skills/wix_logo.svg" alt="Wixロゴ" />
                    </Link>

                    <Link href="https://www.figma.com/ja/" className="h-16 sm:h-32 flex justify-center items-center bg-gray-100 text-gray-400 rounded-lg p-3 md:p-8">
                        <Logo src="/assets/skills/jimdo_logo.png" alt="ジンドゥーロゴ" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Logo = ({src, alt}: {src: string, alt: string}) => {
    return (
        <Image
            loader={({src}) => src}
            src={src}
            alt={alt}
            className="h-full object-contain"
            width={1300}
            height={630}
        />
    )
}