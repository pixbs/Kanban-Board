const { widget } = figma
const { AutoLayout, Text } = widget
import Card from './card'
import { CardProps, ColumnProps } from "../interfaces/props"

const Column = (column: ColumnProps) => {

    const counter = column.cards?.length

    return (
        <AutoLayout
        key={column.name}
        direction='vertical'
        spacing={2}
        >
            <AutoLayout width='fill-parent'>
                <Text fill="#FFF" width='fill-parent'>{column.name}</Text>
                <Text 
                    fill='#FFF'
                    onClick={() => {
                        if(!column.onAdd) return
                        column.onAdd(column, {id: '',name: `Card ${counter + 1}`})
                    }}
                >
                    +
                </Text>
            </AutoLayout>
            {column.cards.map((card) => (
                <Card id={card.id} name={card.name} onChange={column.onChange}/>
            ))}
        </AutoLayout>
    )
}

export default Column;