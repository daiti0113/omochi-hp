import {Headline} from "../atoms/Headline"
import {SectionContainer} from "../molecules/SectionContainer"

export const Message = () => {
    return (
        <SectionContainer>
            <div className="mb-10 md:mb-16">
                <Headline>
                    <span className="inline-block leading-normal">わかりやすく、負担にならない、</span>
                    <span className="inline-block leading-normal">効果のあるホームページを制作します</span>
                </Headline>
                <p className="max-w-screen-md text-gray-500 text-sm md:text-base mt-8 text-center mx-auto">
                    <span className="inline-block leading-relaxed">ホームページ制作はわからないことが多く、</span>
                    <span className="inline-block leading-relaxed">何かと不安になってしまいます。</span>
                    <span className="inline-block leading-relaxed">必要以上のコスト、効果に見合わないコストを</span>
                    <span className="inline-block leading-relaxed">支払っていることも少なくありません。</span>
                    <span className="inline-block leading-relaxed">Omochi では、</span>
                    <span className="inline-block leading-relaxed">ホームページを作るために必要なコストを</span>
                    <span className="inline-block leading-relaxed">なるべくわかりやすくご説明し、</span>
                    <span className="inline-block leading-relaxed">お客様の目的を達成するために</span>
                    <span className="inline-block leading-relaxed">必要な費用のみをお支払いいただきます。</span>
                </p>
            </div>
        </SectionContainer>
    )
}
