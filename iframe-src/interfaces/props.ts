interface BaseUser {
    readonly id: string | null
    readonly name: string
    readonly photoUrl: string | null
  }

export interface CardProps {
    readonly id: string
    name: string
    description?: string
    date?: string
    asignee?: BaseUser
    columnIndex?: number
}