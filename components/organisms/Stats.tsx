import {Headline} from "../atoms/Headline"
import {SectionContainer} from "../molecules/SectionContainer"

// eslint-disable-next-line max-lines-per-function
export const Stats = () => {
    return (
        <SectionContainer className="opacity-0 show-on-scroll">
            <div className="bg-white pt-6 sm:pt-8 lg:pt-12">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750" loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                        <div>
                            <Headline className="md:text-left mb-4 md:mb-6 mt-6">
                                <span className="inline-block leading-normal">もっと気軽に</span>
                                <span className="inline-block leading-normal">ホームページが作れるように</span>
                            </Headline>
                            <p className="text-gray-500 text-center md:text-start text-sm md:text-base mb-6 md:mb-8">
                                <span className="inline-block leading-relaxed">Omochi は、安心してご利用いただけるよう</span>
                                <span className="inline-block leading-relaxed">契約期間を定めておりません。</span>
                                <span className="inline-block leading-relaxed">制作したホームページのソースコード</span>
                                <span className="inline-block leading-relaxed">（プログラム）はお客様に納品するため、</span>
                                <span className="inline-block leading-relaxed">解約後もご自身で運用されたり、</span>
                                <span className="inline-block leading-relaxed">他社様に運用を引き継ぐということも可能です。</span>
                                <span className="inline-block leading-relaxed">更新も自由に行えるほか、SEOレポートの作成も行っています。</span>
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 px-10 sm:px-0 gap-3">
                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="text-gray-600 text-4xl lg:text-6xl font-semibold mb-2">¥0</span>
                                    <p className="text-gray-600 text-sm font-semibold mb-2">解約費用</p>
                                </div>
                                {/* <!-- feature - end --> */}

                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="text-gray-600 text-4xl lg:text-6xl font-semibold mb-2">¥0</span>
                                    <p className="text-gray-600 text-sm font-semibold mb-2">SEOレポート作成*</p>
                                </div>
                                {/* <!-- feature - end --> */}

                                {/* <!-- feature - start --> */}
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="text-gray-600 text-4xl lg:text-6xl font-semibold mb-2">∞</span>
                                    <p className="text-gray-600 text-sm font-semibold mb-2">サイト更新*</p>
                                </div>
                                {/* <!-- feature - end --> */}

                            </div>
                        </div>
                    </div>
                    <div className="mt-10 mb-6 md:mb-8">
                        <p className="text-gray-400 text-xs text-center md:text-start">
                            *SEOレポート作成... Google Analytics や Google Search Console の情報をレポートし、Google での検索向上をお手伝いするサービスです。
                        </p>
                        <p className="text-gray-400 text-xs text-center md:text-start mt-4">
                            *サイト更新... 文言修正や画像の差し替え、ブログ記事の追加などをいつでも無料で行えます。新規画面の追加は一部有料となってしまう場合があるのでお問い合わせください。
                        </p>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}
