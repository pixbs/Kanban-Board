import Board from "./components/board/board"

const { widget } = figma
const { useSyncedState, useEffect } = widget

import { theme } from "./interfaces/types"
import { blankTheme, darkTheme } from "./components/other/themes"


const root = figma.root

function Widget() {

    useSyncedState<theme>('theme', darkTheme)
    useSyncedState<number>('unit', 8)
    
    return (
        <Board />
    )

}

widget.register(Widget)
