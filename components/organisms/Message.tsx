import {Headline} from "../atoms/Headline"
import {SectionContainer} from "../molecules/SectionContainer"

export const Message = () => {
    return (
        <SectionContainer>
            <div className="mb-10 md:mb-16">
                <Headline>
                    <span className="inline-block leading-normal">誰でも気軽に</span>
                    <span className="inline-block leading-normal">ホームページがもてる時代に</span>
                </Headline>
                <p className="max-w-screen-md text-gray-500 text-sm md:text-base mt-8 text-center mx-auto">
                    「いろいろな人に知ってもらうため」「信頼を得るため」「情報を発信するため」、ホームページを作る理由は様々です。だれもが何にだって挑戦できる時代だからこそ、一人ひとりの思いを届けるための場所を形にします。
                </p>
            </div>
        </SectionContainer>
    )
}
