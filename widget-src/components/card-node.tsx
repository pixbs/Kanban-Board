const { widget } = figma
const { useSyncedState, AutoLayout, Text, useEffect } = widget
import {Card, Message} from "../interfaces/index"

const root = figma.root

const baseCard : Card = {
    name: "Name of the card",
    description: "Description for the card, should be much bigger than the name",
    nodeId: undefined,
    date: "31-01-2021",
    assignee: undefined
}

export function CardNode({id} : {id: string}) {

    const filePluginDataKeys = root.getPluginDataKeys()
    if(!filePluginDataKeys.includes(id)) {
        root.setPluginData(id, JSON.stringify(baseCard))
    }
    const [card, setCard] = useSyncedState<Card>(id, JSON.parse(root.getPluginData(id)))

    useEffect(() => {
        figma.ui.onmessage = (message) => {
            root.setPluginData(id, JSON.stringify(message.content))
            setCard(JSON.parse(root.getPluginData(id)))
            console.log(JSON.stringify(message)+" received")
        }
    })

    const clickHandler = () => new Promise(
        (resolve) => {
            const cardMessage : Message = {
                type: "card",
                content: card,
            }
            figma.showUI(__html__, {width: 400, height: 560})
            figma.ui.postMessage(cardMessage)
    })

    return (
        <AutoLayout
        key={id}
        direction="vertical"
        onClick={clickHandler}
        >
            <Text>{id}</Text>
            <Text>{card.name}</Text>
            <Text>{card.description}</Text>
            <Text>{card.date}</Text>
        </AutoLayout>
        )
}