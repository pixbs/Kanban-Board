const { widget } = figma
const { useSyncedState, useSyncedMap, AutoLayout, Text, useEffect, SVG } = widget
import { descriptionIconSrc, dateIconSrc } from "../constants/icons"
import { Card, Message, Theme } from "../interfaces/index"
import { currentTheme } from "../global/index"


const root = figma.root



export function CardNode({id} : {id: string}) {

    const [theme] = useSyncedState<Theme>("theme", currentTheme)

    const baseCard : Card = {
        id: id,
        name: "Name of the card",
        description: "Description for the card, should be much bigger than the name",
        date: "2022-01-31",
    }

    const filePluginDataKeys = root.getPluginDataKeys()
    if(!filePluginDataKeys.includes(id)) {
        root.setPluginData(id, JSON.stringify(baseCard))
    }

    const cardMap = useSyncedMap("cards")
    const card = cardMap.get(id) as Card || JSON.parse(root.getPluginData(id)) as Card

    useEffect(() => {
        figma.ui.onmessage = (message) => {
            let newCard : Card = message.content
            console.log(JSON.stringify(newCard)+" received to" + id + " from ui")
            root.setPluginData(newCard.id, JSON.stringify(newCard))
            cardMap.set(newCard.id, JSON.parse(root.getPluginData(newCard.id)))
        }
    })

    const clickHandler = () => new Promise(
        (resolve) => {
            const cardMessage : Message = {
                type: "card",
                content: card,
            }
            figma.showUI(__html__, {width: 400, height: 560})
            figma.ui.postMessage(cardMessage)
    })

    return (
        <AutoLayout
        name={"card-"+id}
        key={id}

        // Layout
        width={theme.unit*37.5}
        padding={theme.unit*2}
        direction="vertical"
        spacing={theme.unit*1.5}

        // Style
        cornerRadius={theme.radius*theme.unit}
        stroke={theme.colors.secondary}
        fill={theme.colors.background}

        // Variants
        onClick={clickHandler}
        >
            <Text
                name="name"

                // Layout
                width='fill-parent'

                // Typography
                fill={theme.colors.primary}
                fontSize={theme.unit*2}
                fontWeight={500}
            >
                {card.name}
            </Text>
            <AutoLayout
                name="information"

                // Layout
                width='fill-parent'
                verticalAlignItems="center"
                spacing={theme.unit*3}
            >
                <AutoLayout
                    name="badges"

                    // Layout
                    wrap={true}
                    verticalAlignItems="center"
                    spacing={{horizontal: theme.unit*1, vertical: theme.unit*0.5}}
                >
                    <SVG
                        name="description-icon"
                        src={descriptionIconSrc(theme.colors.primary)}

                        // Layout
                        width={theme.unit*2}
                        height={theme.unit*2}

                        // Variants
                        tooltip={card.description}
                    />
                    <AutoLayout
                        name="date"

                        // Layout
                        padding={{horizontal: theme.unit*1, vertical: theme.unit*0.5}}
                        spacing={theme.unit*0.5}

                        // Style
                        cornerRadius={theme.radius*theme.unit}
                        stroke={theme.colors.secondary}
                    >
                        <SVG
                            name="date-icon"
                            src={dateIconSrc(theme.colors.primary)}

                            // Layout
                            width={theme.unit*2}
                            height={theme.unit*2}
                        />
                        <Text
                            name="date"

                            // Typography
                            fill={theme.colors.primary}
                            fontSize={theme.unit*1.5}
                            fontWeight={500}
                        >
                            {card.date}
                        </Text>
                    
                    </AutoLayout>
                </AutoLayout>
            </AutoLayout>
        </AutoLayout>
        )
}