import {SectionContainer} from "../molecules/SectionContainer"

export const Hero = () => {
    return (
        <SectionContainer>
            <div className="xl:w-5/12 flex flex-col justify-center items-center md:items-start sm:text-center md:text-left lg:py-12 xl:py-24">
                <h1 className="text-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 md:w-96">
                    <span className="inline-block leading-tight">ホームページを</span>
                    <span className="inline-block leading-tight">作成するよ</span>
                </h1>
                <form className="flex xs:self-start">
                    <button className="inline-block bg-black hover:bg-black-600 active:bg-black-700 focus-visible:ring ring-black-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Sign up</button>
                </form>
            </div>
        </SectionContainer>
    )
}
