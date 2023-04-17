import {FiFilePlus, FiShoppingCart, FiTrendingUp} from "react-icons/fi"
import {MdOutlineDraw} from "react-icons/md"

// eslint-disable-next-line max-lines-per-function
export const OptionTable = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="grid sm:grid-cols-2 gap-12 xl:gap-16">
                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-primary-500 mb-2 sm:mb-4 text-4xl">
                            **.com
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-center mb-2">独自ドメイン</h3>
                        <p className="text-gray-500 text-center mb-2">信頼性向上やブランディング、SEO対策に効果があります。</p>
                        <p className="font-bold">¥1,000〜 /月</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-primary-500 mb-2 sm:mb-4">
                            <FiShoppingCart size={50} />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-center mb-2">ネットショップ</h3>
                        <p className="text-gray-500 text-center mb-2">自分だけのネットショップが簡単に作れます。</p>
                        <p className="font-bold">¥2,000 /月</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-primary-500 mb-2 sm:mb-4">
                            <FiTrendingUp size={50} />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-center mb-2">SEO対策</h3>
                        <p className="text-gray-500 text-center mb-2">SEOレポートの作成に加え、データをもとにGoogleでの検索順位が上がるよう戦略を策定します。</p>
                        <p className="font-bold">¥3,000 /月</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-primary-500 mb-2 sm:mb-4">
                            <FiFilePlus size={50} />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-center mb-2">ページ追加</h3>
                        <p className="text-gray-500 text-center mb-2">キャンペーンやイベントの際に柔軟にページを追加できます。</p>
                        <p className="font-bold">¥10,000 /ページ</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-primary-500 mb-2 sm:mb-4">
                            <MdOutlineDraw size={50} />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-center mb-2">ロゴ制作</h3>
                        <p className="text-gray-500 text-center mb-2">ヒアリングを重ね、イメージにあったロゴを制作します。</p>
                        <p className="font-bold">¥10,000 /件</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
