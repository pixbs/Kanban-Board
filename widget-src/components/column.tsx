const { widget } = figma
const { useSyncedState, AutoLayout, Text } = widget
import { CardNode } from "./index"
import { GenerateUUID } from "../utils/generate-UUID"

const root = figma.root

export function Column({name} : {name: string}) {
    const filePluginDataKeys = root.getPluginDataKeys()
    if(!filePluginDataKeys.includes(name+"-column")) {
        root.setPluginData(name+"-column", JSON.stringify([]))
    }
    const [column, setColumn] = useSyncedState<string[]>(name+"-column", JSON.parse(root.getPluginData(name+"-column")))

    var counter = column.length

    const clickHandler = () => {
        const newColumn = [...column]
        newColumn.push(GenerateUUID())
        counter++
        setColumn(newColumn)
        root.setPluginData(name+"-column", JSON.stringify(newColumn))
    }
    
    return (
        <AutoLayout
        direction="vertical"
        spacing={8}
        >
            <Text>{name}</Text>
            {column.map((id) => <CardNode id={id}/>)}
            <Text
            onClick={clickHandler}
            >Add card</Text>
        </AutoLayout>
        )
  }