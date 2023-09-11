export interface CardProps {
    id: string
    name: string
    description?: string
    date?: string
    asignee?: BaseUser
    node?: {name: string, id: string, type: string}
    columnIndex?: number
}

export interface ColumnProps {
    index?: number
    name: string
    cards: CardProps[]
    onAdd?: (column : ColumnProps, card: CardProps) => void
}