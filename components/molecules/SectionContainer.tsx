type SectionContainerProps = {
    children: React.ReactNode
}

export const SectionContainer = ({children}: SectionContainerProps) => {
    return (
        <section className="px-10 md:px-20 lg:px-48 mb-16 sm:mb-20 md:mb-24">
            {children}
        </section>
    )
}
