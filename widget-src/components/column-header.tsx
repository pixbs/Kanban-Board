const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget
import { ColumnProps } from "../interfaces/props"

const ColumnHeader = (column: ColumnProps) => {
    
        const [showEmptyCard, setShowEmptyCard] = useSyncedState<number | undefined>('showEmptyCard', undefined)
        const counter = column.cards?.length
    
        return (
            <AutoLayout
            key={column.name}
            direction='vertical'
            spacing={2}
            width={300}
            >
                <AutoLayout width='fill-parent'>
                    <Text fill="#FFF" width='fill-parent'>
                        {`${column.name} (${column.cards?.length})`}
                    </Text>
                    <Text 
                        fill='#FFF'
                        onClick={() => {
                            setShowEmptyCard(column.index)
                        }}
                    >
                        +
                    </Text>
                </AutoLayout>
            </AutoLayout>
        )
}

export default ColumnHeader;