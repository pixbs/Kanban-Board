export interface Card {
    id: string,
    name: string,
    description?: string,
    nodeId?: string,
    date?: string,
    assignee?: BaseUser
  }

export interface Message {
    type: "card" | "users",
    content: any
  }

export interface Colors {
  primary: string
  secondary: string
  background: string
  red: string
  orange: string
  green: string
  blue: string
  purple: string
}
export interface Theme {
    name?: string
    unit: number
    radius: number
    colors: Colors
  }
