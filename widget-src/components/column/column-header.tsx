const { widget } = figma
const { AutoLayout, Text, useSyncedState } = widget
import { ColumnProps } from "../../interfaces/props"
import { theme } from "../../interfaces/types"
import { AddIcon } from "../icons/icons"
import { blankTheme } from "../other/themes"

const ColumnHeader = (column: ColumnProps) => {

        const [theme] = useSyncedState<theme>('theme', blankTheme)
        const [unit] = useSyncedState<number>('unit', 0)
        const [showEmptyCard, setShowEmptyCard] = useSyncedState<number | undefined>('showEmptyCard', undefined)
        const counter = column.cards?.length

        const headerColor = [theme.colorOrange, theme.colorBlue, theme.colorGreen]

        // JSX Styles

        const parentStyle : AutoLayoutProps = {
            // Properties
            name: 'Column Header',

            // Layout
            width: unit*37.5,
            padding: {top: unit*3, bottom: unit*2, left: unit*2, right: unit*2},
            spacing: unit*1,

            // Style
            cornerRadius: unit*0.5,
            stroke: {type: "solid", color: theme.secondary},
            strokeWidth: unit/8,
            fill: theme.background,
        }

        const titleStyle : TextProps = {
            // Properties
            name: 'Column Title',

            // Typyography
            fill: theme.primary,
            fontSize: unit*2.5,
            fontWeight: 700,
        }

        const counterWrapperStyle : AutoLayoutProps = {
            // Properties
            name: 'Counter Wrapper',

            // Layout
            padding: {vertical: unit*0.5, horizontal: unit*1},

            // Style
            cornerRadius: unit*0.5,
            stroke: {type: "solid", color: theme.secondary},
            strokeWidth: unit/5,
        }

        const counterStyle : TextProps = {
            // Properties
            name: 'Counter',

            // Typyography
            fill: theme.primary,
            fontSize: unit*1.5,
            fontWeight: 700,
        }

        const addIconStyle : SVGProps = {
            // Properties
            name: 'Add Icon',
            src: ``,

            // Layout
            width: unit*3,
            height: unit*3,

            // Style
            fill: theme.primary,
            strokeWidth: unit/8,

            // Events
            onClick: () => {
                setShowEmptyCard(column.index)
            }
        }

        const spacingStyle : AutoLayoutProps = {
            // Properties
            name: 'Spacing',

            // Layout
            width: 'fill-parent',
            height: 'fill-parent',
        }

        const colorTagStyle : AutoLayoutProps = {
            // Properties
            name: 'Color Tag',

            // Layout
            width: unit*37.5,
            height: unit*1.5,
            positioning: 'absolute',

            // Style
            fill: headerColor[column.index || 0],
        }


        // Return
    
        return (
            <AutoLayout {...parentStyle}>
                <Text {...titleStyle}>{column.name}</Text>
                <AutoLayout {...counterWrapperStyle}>
                    <Text {...counterStyle}>{counter}</Text>
                </AutoLayout>
                <AutoLayout {...spacingStyle}/>
                <AddIcon {...addIconStyle}/>
                <AutoLayout {...colorTagStyle}/>
            </AutoLayout>
        )
}

export default ColumnHeader;