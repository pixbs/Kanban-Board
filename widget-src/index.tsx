const { widget } = figma
const { useEffect, useSyncedMap, useSyncedState, Text, AutoLayout, SVG } = widget
import { Column } from "./components/index"

const root = figma.root

function App() {
    return <Column name="Progress" id="3e2c3845-9d11-4ec3-9c01-0c7caa6b3dc4"/>
}

widget.register(App)
