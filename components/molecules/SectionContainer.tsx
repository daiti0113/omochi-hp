import {ReactNode} from "react"

type SectionContainerProps = {
    children: ReactNode
}

export const SectionContainer = ({children}: SectionContainerProps) => {
    return (
        <section className="px-10 md:px-20 lg:px-44 mt-24 sm:mt-32 md:mt-32">
            {children}
        </section>
    )
}
