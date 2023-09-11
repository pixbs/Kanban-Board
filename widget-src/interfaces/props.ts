export interface CardProps {
    id: string
    name: string
    description?: string
    date?: string
    asignee?: BaseUser
    columnIndex?: number
}

export interface ColumnProps {
    index?: number
    name: string
    cards: CardProps[]
    showEmptyCard?: number
    onAdd?: (column : ColumnProps, card: CardProps) => void
}