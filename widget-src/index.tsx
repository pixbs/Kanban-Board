import Board from "./components/board"
import Column from "./components/column"
import Card from "./components/card"

const { widget } = figma
const { AutoLayout } = widget
//import Board from "./components/board"


const root = figma.root

function Widget() {
    
    return (
        <Board />
    )

}

widget.register(Board)
