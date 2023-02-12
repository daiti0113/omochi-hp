import classNames from "classnames"
import {ReactNode} from "react"

type SectionContainerProps = {
    children: ReactNode
    className?: string
}

export const SectionContainer = ({children, className}: SectionContainerProps) => {
    return (
        <section className={classNames("px-8 md:px-20 lg:px-44 mt-24 sm:mt-32 md:mt-32", className)}>
            {children}
        </section>
    )
}
