const { widget } = figma
const { useSyncedState, AutoLayout, Text } = widget
import { CardNode, ColumnHeader } from "./index"
import { GenerateUUID } from "../utils/generate-UUID"

const root = figma.root

export function Column({name, id} : {name: string, id: string}) {
    const filePluginDataKeys = root.getPluginDataKeys()
    if(!filePluginDataKeys.includes(id+"-column")) {
        root.setPluginData(id+"-column", JSON.stringify([]))
    }
    const [column, setColumn] = useSyncedState<string[]>(name+"-column", JSON.parse(root.getPluginData(id+"-column")))
    const [colName, setColName] = useSyncedState<string>(name+"-name", name)

    const callback = (message : {type: string, content: string}) => {
        switch(message.type) {
            case "name":
                setColName(message.content)
                break
            case "add-card":
                const newColumn = [...column]
                newColumn.push(GenerateUUID())
                setColumn(newColumn)
                root.setPluginData(id+"-column", JSON.stringify(newColumn))
                break
            default:
                break
        }
    }
    
    return (
        <AutoLayout
        direction="vertical"
        spacing={8}
        >
            <ColumnHeader name={colName} childrenCount={column.length} callback={callback}/>
            {column.map((id) => <CardNode id={id}/>)}
        </AutoLayout>
        )
  }