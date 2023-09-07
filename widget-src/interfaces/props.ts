export interface CardProps {
    id: string
    name: string
    onChange?: (action: 'left' | 'right' | 'remove' | 'complete', card: CardProps) => void
}

export interface ColumnProps {
    index?: number
    name: string
    cards: CardProps[]
    showEmptyCard?: number
    onChange?: (action: 'left' | 'right' | 'remove' | 'complete', card: CardProps) => void
    onAdd?: (column : ColumnProps, card: CardProps) => void
}