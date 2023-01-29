import {ReactNode} from "react"

type SectionContainerProps = {
    children: ReactNode
}

export const SectionContainer = ({children}: SectionContainerProps) => {
    return (
        <section className="px-10 md:px-20 lg:px-48 mt-16 sm:mt-20 md:mt-24">
            {children}
        </section>
    )
}
