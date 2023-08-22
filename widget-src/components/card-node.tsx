const { widget } = figma
const { useSyncedState, AutoLayout, Text } = widget
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
    if(!filePluginDataKeys.includes(id+"-card")) {
        root.setPluginData(id+"-card", JSON.stringify(baseCard))
    }
    const [card, setCard] = useSyncedState<Card>(id+"-card", JSON.parse(root.getPluginData(id+"-card")))
    console.log(id+"-card")
    console.log(root.getPluginData(id+"-card"))

    return (
        <AutoLayout
        key={id}
        direction="vertical"
        >
            <Text>{id}</Text>
            <Text>{card.name}</Text>
            <Text>{card.description}</Text>
            <Text>{card.date}</Text>
        </AutoLayout>
        )
}