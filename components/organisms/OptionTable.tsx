import {FiFilePlus, FiShoppingCart, FiTrendingUp} from "react-icons/fi"

// eslint-disable-next-line max-lines-per-function
export const OptionTable = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="grid sm:grid-cols-2 gap-12 xl:gap-16">
                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4 text-4xl">
                            **.com
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-center mb-2">独自ドメイン</h3>
                        <p className="text-gray-500 text-center mb-2">信頼性向上やブランディング、SEO対策に効果があります。</p>
                        <p className="font-bold">¥1,000〜/月</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                            <FiShoppingCart size={50} />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-center mb-2">ネットショップ</h3>
                        <p className="text-gray-500 text-center mb-2">自分だけのネットショップが簡単に作れます。</p>
                        <p className="font-bold">¥1,000〜/月</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                            <FiTrendingUp size={50} />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-center mb-2">SEOサポート</h3>
                        <p className="text-gray-500 text-center mb-2">Googleでの検索順位が上がるようサポートいたします。</p>
                        <p className="font-bold">¥1,000〜/月</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
                            <FiFilePlus size={50} />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-center mb-2">ページ追加</h3>
                        <p className="text-gray-500 text-center mb-2">キャンペーンやイベントの際に柔軟ににページを追加できます。</p>
                        <p className="font-bold">¥1,000〜/月</p>
                    </div>
                </div>
            </div>
        </div>
    )
}