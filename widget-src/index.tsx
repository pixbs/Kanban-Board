const { widget } = figma
const { useEffect, useSyncedMap, useSyncedState, Text, AutoLayout, SVG } = widget
import {} from "./interfaces/index"
import { Column } from "./components/index"

const root = figma.root

function App() {
    return <Column name="To Do"/>
}

widget.register(App)
