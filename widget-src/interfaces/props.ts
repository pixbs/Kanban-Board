export interface CardProps {
    id: string
    name: string
    onChange?: (action: 'left' | 'right' | 'remove', card: CardProps) => void
}

export interface ColumnProps {
    name: string
    cards: CardProps[]
    onChange?: (action: 'left' | 'right' | 'remove', card: CardProps) => void
    onAdd?: (column : ColumnProps, card: CardProps) => void
}