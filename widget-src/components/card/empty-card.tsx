import { ColumnProps } from "../../interfaces/props"
const { widget } = figma
const { Input, AutoLayout, useSyncedState, Text } = widget
import { theme } from "../../interfaces/types"
import { CancelIcon } from "../icons/icons"
import { blankTheme } from "../other/themes"

const EmptyCard = (column : ColumnProps) => {
    const [cardName, setCardName] = useSyncedState<string>(`${column.name}-empty-card`, '')
    const [showEmptyCard, setShowEmptyCard] = useSyncedState<number | undefined>('showEmptyCard', undefined)
    const [theme] = useSyncedState<theme>('theme', blankTheme)
    const [unit] = useSyncedState<number>('unit', 0)
    const show = showEmptyCard === column.index

    // JSX Styles

    const parentStyle : AutoLayoutProps = {
        // Properties
        name: 'Empty Card',
        hidden: !show,

        // Layout
        wrap: true,
        width: unit*37.5,
        padding: unit*2,
        spacing: {vertical: unit, horizontal: unit*2},

        // Style
        cornerRadius: unit*0.5,
        stroke: {type: "solid", color: theme.secondary},
        strokeWidth: unit/8,
        fill: theme.background,
    }

    const inputStyle : InputProps = {
        // Properties
        name: 'Card Name',
        value: cardName,
        placeholder: 'Enter a title for this card...',

        // Typography
        fill: theme.primary,
        fontSize: unit*2,
        fontWeight: 500,
        width: unit*33.5,

        // Events
        onTextEditEnd: (e) => {
            setCardName(e.characters)
        },
    }

    const buttonStyle : AutoLayoutProps = {
        // Properties
        name: 'Button',

        // Layout
        padding: {vertical: unit*0.5, horizontal: unit*1.5},

        // Style
        cornerRadius: unit*0.5,
        fill: theme.colorBlue,

        // Events
        onClick: () => {
            if(!column.onAdd) return
            if(!cardName) {
                figma.notify('Please enter a card name')
                return
            }
            column.onAdd({name: column.name, cards: []}, {id: '',name: cardName})
            setCardName('')
            setShowEmptyCard(999)
        },
    }

    const buttonTextStyle : TextProps = {
        // Properties
        name: 'Button Text',

        // Typography
        fill: theme.primary,
        fontSize: unit*1.5,
        fontWeight: 500,
    }

    const iconStyle : SVGProps = {
        // Properties
        name: 'Cancel Icon',
        src: ``,

        // Layout
        width: unit*3,
        height: unit*3,

        // Style
        fill: theme.primary,
        strokeWidth: unit/8,

        // Events
        onClick: () => {
            setCardName('')
            setShowEmptyCard(999)
        },
    }

    return (
        <AutoLayout {...parentStyle}>
            <Input {...inputStyle}/>
            <AutoLayout {...buttonStyle}>
                <Text {...buttonTextStyle}>Add Card</Text>
            </AutoLayout>
            <CancelIcon {...iconStyle}/>
        </AutoLayout>
    )
}

export default EmptyCard;