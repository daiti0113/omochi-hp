import {Feature} from "../molecules/Feature"

// eslint-disable-next-line max-lines-per-function
export const PricingTable = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 my-6 md:my-8">
            {/* <!-- plan - start --> */}
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col border rounded-lg gap-4 p-4 pt-6">
                    <h3 className="text-gray-800 text-2xl font-semibold text-center">START</h3>
                    <div className="flex justify-center items-end gap-1">
                        <span className="text-4xl text-gray-800 font-bold">¥6,000</span>
                        <span className="text-gray-500">/ 月</span>
                    </div>
                    <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                        + ¥30,000 の制作費
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg space-y-3 px-6 py-6">
                    <div className="max-w-fit sm:mx-auto">
                        <Feature>常時SSL対応</Feature>
                        <Feature>レスポンシブデザイン</Feature>
                        <Feature>ブログ</Feature>
                        <Feature>お問い合わせフォーム</Feature>
                        <Feature>Googleビジネスプロフィール</Feature>
                        <Feature>SEOサポート</Feature>
                        <Feature>サーバー容量 : 5GB</Feature>
                    </div>
                </div>
            </div>
            {/* <!-- plan - end --> */}

            {/* <!-- plan - start --> */}
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col border border-indigo-500 rounded-lg relative gap-4 p-4 pt-6">
                    <div className="flex justify-center absolute -top-3 inset-x-0">
                        <span className="h-6 flex justify-center items-center bg-indigo-500 text-white text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1">一番人気</span>
                    </div>
                    <h3 className="text-gray-800 text-2xl font-semibold text-center">BUSINESS</h3>
                    <div className="flex justify-center items-end gap-1">
                        <span className="text-4xl text-gray-800 font-bold">¥8,000</span>
                        <span className="text-gray-500">/ 月</span>
                    </div>
                    <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                        + ¥50,000 の制作費
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg space-y-3 px-6 py-6">
                    <div className="max-w-fit sm:mx-auto">
                        <Feature>常時SSL対応</Feature>
                        <Feature>レスポンシブデザイン</Feature>
                        <Feature>ブログ</Feature>
                        <Feature>お問い合わせフォーム</Feature>
                        <Feature>Googleビジネスプロフィール</Feature>
                        <Feature>SEOサポート</Feature>
                        <Feature className="font-bold">サーバー容量 : 400GB</Feature>
                        <Feature className="font-bold">オリジナルデザインの実装</Feature>
                    </div>
                </div>
            </div>
            {/* <!-- plan - end --> */}

            {/* <!-- plan - start --> */}
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col border rounded-lg gap-4 p-4 pt-6">
                    <h3 className="text-gray-800 text-2xl font-semibold text-center">PREMIUM</h3>
                    <div className="flex justify-center items-end gap-1">
                        <span className="text-4xl text-gray-800 font-bold">¥10,000</span>
                        <span className="text-gray-500">/ 月</span>
                    </div>
                    <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                        + ¥60,000 の制作費
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg space-y-3 px-6 py-6">
                    <div className="max-w-fit sm:mx-auto">
                        <Feature>常時SSL対応</Feature>
                        <Feature>レスポンシブデザイン</Feature>
                        <Feature>ブログ</Feature>
                        <Feature>お問い合わせフォーム</Feature>
                        <Feature>Googleビジネスプロフィール</Feature>
                        <Feature>SEOサポート</Feature>
                        <Feature>オリジナルデザインの実装</Feature>
                        <Feature className="font-bold">サーバー容量 : 無制限</Feature>
                        <Feature className="font-bold">オリジナル機能の実装</Feature>
                    </div>
                </div>
            </div>
            {/* <!-- plan - end --> */}
        </div>
    )
}