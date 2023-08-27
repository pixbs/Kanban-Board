const { widget } = figma
const { useSyncedState, useSyncedMap, AutoLayout, Text, useEffect, SVG, Input, Frame } = widget
import { plusIconSrc } from "../constants/icons"
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
            <Text
                name={name}

                // Typography
                fill={theme.colors.primary}
                fontSize={theme.unit*2.5}
                fontWeight={600}
            
            >
                {name}
            </Text>
            <AutoLayout
                name="counter-wrapper"

                // Layout
                padding={{horizontal: theme.unit*1, vertical: theme.unit*0.5}}
                spacing={theme.unit*0.5}

                // Style
                cornerRadius={theme.radius*theme.unit}
                stroke={theme.colors.secondary}
                strokeWidth={theme.unit*0.1875}
            >
                <Text
                    name="counter"

                    // Typography
                    fill={theme.colors.primary}
                    fontSize={theme.unit*1.5}
                    fontWeight={700}
                
                >
                    {childrenCount}
                </Text>
            </AutoLayout>
            <Frame name='spacing' width='fill-parent' height='fill-parent'></Frame>
            <AutoLayout
            
            // Variants
            onClick={() => callback({type: "add-card", content: "Name of the card"})}
            >
                <SVG src={plusIconSrc(theme.colors.primary, 1.5)} width={theme.unit*3} height={theme.unit*3}/>
            </AutoLayout>
        </AutoLayout>
        )
}