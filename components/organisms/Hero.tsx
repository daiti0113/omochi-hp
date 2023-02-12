import Link from "next/link"
import {SectionContainer} from "../molecules/SectionContainer"

export const Hero = () => {
    return (
        <SectionContainer className="opacity-0 show-on-scroll">
            <div className="md:w-7/12 flex flex-col justify-center items-center md:items-start sm:text-center md:text-left lg:py-12 xl:py-24">
                <h1 className="text-center md:text-start text-black text-2xl sm:text-3xl md:text-3xl xl:text-5xl font-bold mb-8 md:mb-12">
                    <span className="inline-block leading-normal">沖縄のホームページなら</span>
                    <span className="inline-block leading-normal">Omochi にお任せください</span>
                </h1>
                <form className="flex xs:self-start">
                    <Link href="/portfolio" className="inline-block bg-black hover:bg-black-600 active:bg-black-700 focus-visible:ring ring-black-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">制作事例を見る</Link>
                </form>
            </div>
        </SectionContainer>
    )
}
