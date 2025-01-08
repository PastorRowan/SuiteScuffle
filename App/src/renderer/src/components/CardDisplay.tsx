
interface CardDisplayProps {
    id?: string | undefined;
    className?: string;
    rank?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "joker",
    suite?: "clubs" | "spades" | "hearts" | "diamonds" | "joker",
    frontFacing?: boolean,
};

export default function CardDisplay({
    id,
    className = "",
    rank,
    suite,
    frontFacing = true,
}: CardDisplayProps) {

    // Decide which image source based on rank and suite
    let cardImageSrc = `/src/assets/cards/back.svg`; // Default to back image
    if (!frontFacing) {

    } else if (rank === "joker" && suite === "joker") {
        cardImageSrc = `/src/assets/cards/joker.svg`;
    } else if ((typeof rank === "number") && (1 <= rank && rank <= 13)) {
        cardImageSrc = `/src/assets/cards/${rank}_of_${suite}.svg`;
    } else {
        throw new Error(`suite and rank invalid, defaulted to back of card: suite: ${suite} typeof: ${typeof suite} rank: ${rank} typeof: ${typeof rank}`);
    };

    return (
        <div
            id={id ? id : undefined}
            className={className}
        >
            <img
                className="h-full"
                src={cardImageSrc} // Dynamic image based on rank and suite
                alt={`Card ${rank} of ${suite}`}
            />
        </div>
    );
}
