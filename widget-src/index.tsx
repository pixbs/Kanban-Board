const { widget } = figma
const { useSyncedState ,AutoLayout, Text, useWidgetNodeId, useStickableHost, useStickable} = widget


const root = figma.root



function Widget() {
    
    const [parent] = useSyncedState('parent', true)
    return (
        parent ? <Column name="ToDo"/> : <Card />
    )

}

const Column = ({name} : {name:string}) => {

    useStickableHost();
    const widgetID = useWidgetNodeId();

    return (
        <AutoLayout
        height={500}
        width={300}
        padding={8}
        fill="#E6E6E6"
        >
            <Text width='fill-parent'>{name}</Text>
            <Text
            onClick={() => {
                const widget = figma.getNodeById(widgetID) as WidgetNode
                const child = widget.cloneWidget({["parent"] : false})
                child.x += 100
            }}
            >
                +
            </Text>
        </AutoLayout>
    )
}

const Card = () => {

    useStickable();
    return (
        <AutoLayout
        height={100}
        width={200}
        padding={8}
        fill="#FFF"
        >
            <Text width='fill-parent'>Card</Text>
        </AutoLayout>
    )
}

widget.register(Widget)
