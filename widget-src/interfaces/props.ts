export interface CardProps {
    id: string
    name: string
    description?: string
    date?: string
    assignee?: BaseUser
    node?: {name: string, id: string, type: string}
    columnIndex?: number
}

export interface ColumnProps {
    index?: number
    name: string
    cards: CardProps[]
    onAdd?: (column : ColumnProps, card: CardProps) => void
}

export interface typeIconProps extends Partial<SVGProps> {
    type: string
}

export interface propertyMenuDropdownProps {
    name: string
    options: string[]
    selectedOption: string
}