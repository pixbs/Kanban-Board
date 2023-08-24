const { widget } = figma
const { useSyncedState, useSyncedMap, AutoLayout, Text, useEffect, SVG, Input, Frame } = widget
import { descriptionIconSrc, dateIconSrc } from "../constants/icons"
import { Card, Message, Theme } from "../interfaces/index"
import { currentTheme } from "../global/index"

export function ColumnHeader ({name, childrenCount: childrenCount, callback} : {name: string, childrenCount: number, callback: Function}) {
    const [theme] = useSyncedState<Theme>("theme", currentTheme)

    return (
        <AutoLayout
        name={"column-header-"+name}
        key={"column-header-"+name}

        // Layout
        width={theme.unit*37.5}
        padding={{top: theme.unit*3, bottom: theme.unit*2, left: theme.unit*2, right: theme.unit*2}}
        spacing={theme.unit*1.5}

        // Style
        cornerRadius={theme.unit*theme.radius}
        fill={theme.colors.background}
        verticalAlignItems="center"
        >
            <Frame 
            width={theme.unit*37.5}
            height={theme.unit*1.5}
            fill={theme.colors.orange}
            cornerRadius={{topLeft: theme.unit*theme.radius, topRight: theme.unit*theme.radius}}
            positioning="absolute"

            >
            </Frame>
            <Input
            value={name}

            fontSize={theme.unit*2.5}
            fontWeight={600}
            // Variants
            onTextEditEnd={(e) => {
                callback({type: "name", content: name})
            }}
            />
            <Text>{childrenCount}</Text>
            <Frame name='spacing' width='fill-parent' height='fill-parent'></Frame>
            <AutoLayout
            
            // Variants
            onClick={() => callback({type: "add-card", content: "Name of the card"})}
            >
                <SVG src={descriptionIconSrc(theme.colors.primary)} width={theme.unit*2} height={theme.unit*2}/>
            </AutoLayout>
        </AutoLayout>
        )
}