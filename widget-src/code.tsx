// This widget will open an Iframe window with buttons to show a toast message and close the window.

const { widget } = figma
const { useEffect, useSyncedMap, useSyncedState, Text, AutoLayout, SVG } = widget

const defaultIconSrc = `
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
<g clip-path="url(#a)">
  <path fill="#0C8CE9" d="M24 0H4a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z"/>
  <path fill="#fff" d="m8.4 7.7 6.7 2a4.5 4.5 0 0 1 3.2 5.7l-.2.5.4.5 1.9 1.8-2.1 2.2-1.9-1.9-.4-.4-.6.2-1.4.2c-2.2 0-4-1.5-4.4-3.6L7.7 8.3l5 5-.2.6a1.5 1.5 0 1 0 .9-1.4l-5-4.9Zm9.9 14 3.5-3.5-2.6-2.5a5.5 5.5 0 0 0-3.8-7L6 6l2.6 9.1a5.5 5.5 0 0 0 7.1 4.1l2.6 2.6Z"/>
</g>
<defs>
  <clipPath id="a">
    <path fill="#fff" d="M0 0h28v28H0z"/>
  </clipPath>
</defs>
</svg>
`
const root = figma.root

interface Card {
  id: string,
  name: string,
  description: string | undefined,
  nodeId: string | undefined,
  date: string | undefined,
  assignee: BaseUser | undefined
}

interface message {
  type: "card" | "users",
  content: any
}

const testCard: Card = {
  id: "0",
  name: "Test Card",
  description: "This is a test card",
  nodeId: undefined,
  date: "2015-03-25",
  assignee: undefined
}
const testCard2: Card = {
  id: "1",
  name: "Test Card",
  description: "This is a test card",
  nodeId: undefined,
  date: "2015-03-25",
  assignee: undefined
}

function Column() {
  const filePluginDataKeys = root.getPluginDataKeys()
  const columnMap = useSyncedMap("cards")
  if(!filePluginDataKeys.includes("cards")) {
    root.setPluginData("cards", JSON.stringify([testCard,testCard2]))
  }

  useEffect(() => {
    figma.ui.onmessage = (msg) => {
      if (msg.type === "card") {
        columnMap.set(msg.content.id, msg.content)
      }
    }
  })

  console.log(columnMap.keys())
  const cards = JSON.parse(root.getPluginData("cards")) as Card[]

  return <AutoLayout>
    {cards.map((card) => CardNode(card.id))}
  </AutoLayout>
}

function CardNode(id : string) {
  const filePluginDataKeys = root.getPluginDataKeys()
  if(!filePluginDataKeys.includes(id)) {
    root.setPluginData(id, JSON.stringify(testCard))
  }

  const columnMap = useSyncedMap("cards")
  const card = columnMap.get(id) as Card || JSON.parse(root.getPluginData(id))
  if (!card) return
  card.id = id

  return (
    <AutoLayout 
      name={card.id+" card"}
      key={card.id+" card"}
      direction='vertical' 
      onClick={
        () => new Promise(
          (resolve) => {
            const cardMessage : message = {
              type: "card",
              content: card
            }
            const usersMessage : message = {
              type: "users",
              content: [
                {id: 1, name: "User 1"},
                {id: 2, name: "User 2"},
                {id: 3, name: "User 3"},
                {id: 4, name: "User 4"},
              ]
            }
            figma.showUI(__html__)
            figma.ui.postMessage(cardMessage)
            figma.ui.postMessage(usersMessage)
          }
        )
      }
    >
      <Text>
        {card.name}
      </Text>
      <SVG src={defaultIconSrc} tooltip={card.description}/>
      <Text>
        {card.date}
      </Text>
    </AutoLayout>
  )
}

widget.register(Column)
