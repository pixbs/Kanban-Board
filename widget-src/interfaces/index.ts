export interface Card {
    name: string,
    description: string | undefined,
    nodeId: string | undefined,
    date: string | undefined,
    assignee: BaseUser | undefined
  }

export interface Message {
    type: "card" | "users",
    content: any
  }