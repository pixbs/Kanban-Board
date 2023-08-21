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

interface Card {
  readonly id: string,
  name: string,
  description: string | undefined,
  nodeId: string | undefined,
  date: Date | undefined,
  assignee: BaseUser | undefined
}

interface message {
  type: "card" | "users",
  content: any
}

const testCard: Card = {
  id: "1",
  name: "Test Card",
  description: "This is a test card",
  nodeId: undefined,
  date: new Date(),
  assignee: undefined
}

function Widget() {
  const cardMap = useSyncedMap<Card>('cards')

  useEffect(() => {
    figma.ui.onmessage = (msg) => {
      if (msg.type === 'showToast') {
        figma.notify('Hello widget')
      }
      if (msg.type === 'close') {
        figma.closePlugin()
      }
    }
  })

  return (
    <Text
      fontSize={24}
      onClick={
        // Use async callbacks or return a promise to keep the Iframe window
        // opened. Resolving the promise, closing the Iframe window, or calling
        // "figma.closePlugin()" will terminate the code.
        () =>
          new Promise((resolve) => {
            figma.showUI(__html__)
          })
      }
    >
      Open IFrame
    </Text>
  )
}

function CardNode(card: Card = testCard) {

  const [name, setName] = useSyncedState(card.id+'-name', card.name)
  useEffect(() => {
    figma.ui.onmessage = (msg) => {
      if (msg.type === 'name') {
        setName(msg.content)
      }
    }
  })

  return (
    <AutoLayout 
      name={card.id+" card"} 
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
        {name}
      </Text>
      <SVG src={defaultIconSrc} tooltip={card.description}/>
      <Text>
        {card.date?.toLocaleDateString()}
      </Text>
    </AutoLayout>
  )
}

widget.register(CardNode)
