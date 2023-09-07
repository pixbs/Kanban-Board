import { ColumnProps } from "../interfaces/props"
const { widget } = figma
const { Input, AutoLayout, useSyncedState, Text } = widget

const EmptyCard = (column : ColumnProps) => {
    const [cardName, setCardName] = useSyncedState<string>(`${column.name}-empty-card`, '')
    const [showEmptyCard, setShowEmptyCard] = useSyncedState<number | undefined>('showEmptyCard', column.showEmptyCard)
    const show = showEmptyCard === column.index
    return (
        <AutoLayout
        hidden={!show}
        padding={8}
        fill="#FFF"
        cornerRadius={2}
        spacing={4}
        direction="vertical"
        >
            <Input
                value={cardName}
                placeholder="Enter a title for this card..."
                onTextEditEnd={(e) => {
                    setCardName(e.characters)
                }}
            />
            <AutoLayout>                
                <Text
                    onClick={() => {
                        if(!column.onAdd) return
                        if(!cardName) {
                            console.log('No card name')
                            return
                        }
                        column.onAdd({name: column.name, cards: []}, {id: '',name: cardName})
                        setCardName('')
                        setShowEmptyCard(999)
                    }}
                >
                    [Add Card]
                </Text>
                <Text
                    onClick={() => {
                        setCardName('')
                        setShowEmptyCard(999)
                    }}
                >
                    X
                </Text>
            </AutoLayout>
        </AutoLayout>
    )
}

export default EmptyCard;