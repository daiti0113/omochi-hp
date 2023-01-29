import {ReactNode} from "react"

type HeadlineProps = {
    children?: ReactNode
    className?: string
}

export const Headline = ({children, className}: HeadlineProps) => {
    return (
        <h2 className={`text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center ${className}`}>
            {children}
        </h2>
    )
}
