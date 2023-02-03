type SquareProps = {
    className?: string
}

export const Square = ({className}: SquareProps) => {
    return (
        <div className={`h-[60vw] w-[60vw] lg:h-[56vw] lg:w-[56vw] bg-black ${className}`} />
    )
}
