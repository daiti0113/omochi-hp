import Link from "next/link"
import {ReactNode, useState} from "react"
import {Headline} from "../atoms/Headline"
import {SectionContainer} from "../molecules/SectionContainer"

// eslint-disable-next-line max-lines-per-function
export const FAQ = () => {
    return (
        <SectionContainer>
            <Headline>よくあるご質問</Headline>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-col max-w-screen-sm border-t mx-auto">
                        <Row
                            question="料金プランについて教えて下さい。"
                            answer={
                                <p>
                                    料金プランは、<span className="font-semibold">初期費用</span>と<span className="font-semibold">月額料金</span>で構成されています。初期費用にはホームページ制作費、月額費用にはサーバーやメンテナンスにかかる運用代行費が含まれています。<br />
                                    各プランの詳細については、<Link href="/pricing" className="underline hover:text-gray-700">料金プラン</Link>のページをご覧ください。
                                </p>
                            }
                        />
                        <Row
                            question="運用代行費（月額料金）の発生はいつからですか？"
                            answer="運用代行費のお支払いは、ホームページが完成した翌月からとなります。ホームページが完成するまでは月額料金は発生しません。"
                        />
                        <Row
                            question="途中で解約する場合、解約費用や違約金などはありますか？"
                            answer="違約金や解約金は一切ありません、お好きなタイミングで解約することができます。ご連絡いただいた翌月の解約となるので、その点だけご留意ください。"
                        />
                        <Row
                            question="サイトの更新は何回までできますか？"
                            answer="原則では月に10回までとしていますが、あくまで過剰な更新をお断りするために定めている上限であるため、常識の範囲内で柔軟に対応させていただいております。お気軽にご相談ください。"
                        />
                        <Row
                            question="ホームページの制作にはどのくらいの時間がかかりますか？"
                            answer="デザインや機能によりますが、3週間~1ヶ月程度をみていただければと思います。"
                        />
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

const Row = ({question, answer}: {question: ReactNode, answer: ReactNode}) => {
    const [expanded, setExpanded] = useState(false)
    const onClick = () => setExpanded(!expanded)

    return (
        <div className="border-b">
            <div
                onClick={onClick}
                className="flex justify-between text-black hover:text-primary-500 active:text-primary-700 cursor-pointer gap-2 py-4"
            >
                <span className="md:text-lg font-semibold transition duration-100">{question}</span>

                <span className={`text-primary-500 ${expanded ? " rotate-180" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </div>

            <div className={`${ expanded ? "" : " hidden"} text-gray-500 mb-4`}>{answer}</div>
        </div>
    )
}
