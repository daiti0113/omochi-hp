import {Headline} from "../atoms/Headline"
import {SectionContainer} from "../molecules/SectionContainer"

// eslint-disable-next-line max-lines-per-function
export const Stats = () => {
    return (
        <SectionContainer>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                        <div>
                            <Headline className="md:text-left mb-4 md:mb-6 mt-6">
                                <span className="inline-block leading-normal">こんなに作ったんだよ。</span>
                                <span className="inline-block leading-normal">すごいでしょ。</span>
                            </Headline>
                            <p className="text-gray-500 text-center md:text-start text-sm md:text-base mb-6 md:mb-8">
                                美容室とかカフェとかたくさん回って、丁寧にヒアリングしてたくさん作ったんだよ。頼まれたらすぐ作っちゃうから依頼してね。でーじ上等な一眼レフも買ったから、素材がないときも気軽に相談していいからね。
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 px-10 sm:px-0 gap-4">
                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="text-gray-600 text-6xl lg:text-6xl font-semibold mb-2">17</span>
                                    <p className="text-gray-600 font-semibold mb-2">サイト数</p>
                                </div>
                                {/* <!-- feature - end --> */}

                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="text-gray-600 text-6xl lg:text-6xl font-semibold mb-2">23</span>
                                    <p className="text-gray-600 font-semibold mb-2">ページ数</p>
                                </div>
                                {/* <!-- feature - end --> */}

                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="text-gray-600 text-6xl lg:text-6xl font-semibold mb-2">360</span>
                                    <p className="text-gray-600 text-base font-semibold mb-2">アクセス数</p>
                                </div>
                                {/* <!-- feature - end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}
