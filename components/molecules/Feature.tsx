import {ReactNode} from "react"

type FeatureProps = {
    children?: ReactNode
    className?: string
}

export const Feature = ({children, className}: FeatureProps) => {
    return (
        <div className="flex gap-2 leading-loose">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-gray-600 ${className}`}>{children}</span>
        </div>
    )
}
