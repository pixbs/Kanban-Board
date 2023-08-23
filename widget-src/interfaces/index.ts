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