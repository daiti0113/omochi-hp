import {useState} from "react"
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
                            question="How does the product work?"
                            answer="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing."
                        />
                        <Row
                            question="How does the product work?"
                            answer="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing."
                        />
                        <Row
                            question="How does the product work?"
                            answer="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing."
                        />
                        <Row
                            question="How does the product work?"
                            answer="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing."
                        />
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

const Row = ({question, answer}: {question: string, answer: string}) => {
    const [expanded, setExpanded] = useState(false)
    const onClick = () => setExpanded(!expanded)

    return (
        <div className="border-b">
            <div
                onClick={onClick}
                className="flex justify-between text-black hover:text-indigo-500 active:text-indigo-600 cursor-pointer gap-2 py-4"
            >
                <span className="md:text-lg font-semibold transition duration-100">{question}</span>

                <span className={`text-indigo-500 ${expanded ? " rotate-180" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </div>

            <p className={`${ expanded ? "" : " hidden"} text-gray-500 mb-4`}>{answer}</p>
        </div>
    )
}
