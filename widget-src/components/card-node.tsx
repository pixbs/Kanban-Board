const { widget } = figma
const { useSyncedState, useSyncedMap, AutoLayout, Text, useEffect } = widget
import {Card, Message} from "../interfaces/index"

const root = figma.root



export function CardNode({id} : {id: string}) {

    const baseCard : Card = {
        id: id,
        name: "Name of the card",
        description: "Description for the card, should be much bigger than the name",
        nodeId: undefined,
        date: "2022-01-31",
        assignee: undefined
    }

    const filePluginDataKeys = root.getPluginDataKeys()
    if(!filePluginDataKeys.includes(id)) {
        root.setPluginData(id, JSON.stringify(baseCard))
    }

    const cardMap = useSyncedMap("cards")
    const card = cardMap.get(id) as Card || JSON.parse(root.getPluginData(id)) as Card

    useEffect(() => {
        figma.ui.onmessage = (message) => {
            let newCard : Card = message.content
            console.log(JSON.stringify(newCard)+" received to" + id + " from ui")
            root.setPluginData(newCard.id, JSON.stringify(newCard))
            cardMap.set(newCard.id, JSON.parse(root.getPluginData(newCard.id)))
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