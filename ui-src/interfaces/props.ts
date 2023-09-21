export interface BaseUser {
  readonly id: string | null
  readonly name: string
  readonly photoUrl: string | null
  }

export interface NodeProps {
  name: string
  id: string
  type: string
}

export interface CardProps {
  readonly id: string
  name: string
  description?: string
  date?: string
  assignee?: BaseUser
  node?: NodeProps
  columnIndex?: number
}

export interface ActionsProps {
  columnIndex?: number
  columns: string[]
  date?: string
  assignee?: BaseUser
  onMove: (index: number) => void
  onUpdate: (card: CardProps) => void
  onRemove: () => void
}