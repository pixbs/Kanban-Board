export interface BaseUser {
    readonly id: string | null
    readonly name: string
    readonly photoUrl: string | null
  }

export interface CardProps {
    readonly id: string
    name: string
    description?: string
    date?: string
    assignee?: BaseUser
    node?: {name: string, id: string, type: string}
    columnIndex?: number
}