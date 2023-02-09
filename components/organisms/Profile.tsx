import Image from "next/image"
import {Headline} from "../atoms/Headline"

// eslint-disable-next-line max-lines-per-function
export const Profile = () => {
    return (
        <div className="2xl:container 2xl:mx-auto md:px-6">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="">
                        <Headline className="leading-9 text-gray-800 lg:text-left">砂川 大地</Headline>
                        <p className="font-normal text-sm mt-2 leading-6 text-gray-600 text-center lg:text-left">代表 / フロントエンドエンジニア</p>
                    </div>
                    <p className="font-normal text-sm md:text-base leading-6 text-gray-600 pt-10">
                        <span className="inline-block leading-relaxed">沖縄高専卒業後、就職のため上京し、株式会社KDDIウェブコミュニケーションズに入社。レンタルサーバー事業のフロントエンド開発を担当する。</span>
                        <span className="inline-block leading-relaxed">現在はコロナ感染拡大によるリモートワークの推奨により、沖縄にUターンしフルリモート勤務中。</span>
                        <span className="inline-block leading-relaxed">飲食業や美容業を営む方と話をするなかで、「ITを活用すればもっと無駄な時間を減らし、顧客の増加も見込めるはずだ」と感じたことをきっかけに、沖縄の中小企業や個人事業主のビジネスをサポートするために Omochi を開業。</span>
                        <span className="inline-block leading-relaxed">趣味はカメラや映画鑑賞、音楽鑑賞、ドラム、ギター、DIYなど。</span>
                    </p>
                </div>
                <div className="w-full lg:w-2/5 ">
                    <Image
                        loader={({src}) => src}
                        src="/assets/profile.jpg"
                        alt="プロフィール写真"
                        className="w-full rounded-2xl h-60 lg:h-80 object-cover object-center shadow-md bg-white hover:shadow-xl"
                        width={1300}
                        height={630}
                    />
                </div>
            </div>
        </div>
    )
}
