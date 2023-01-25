type SectionContainerProps = {
    children: React.ReactNode
}

export const SectionContainer = ({children}: SectionContainerProps) => {
    return (
        <section className="px-48">
            {children}
        </section>
    )
}
