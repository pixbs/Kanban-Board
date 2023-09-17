import Board from './components/board/board'

const { widget } = figma
const { useSyncedState, usePropertyMenu, useEffect } = widget

import { theme } from './interfaces/types'
import { blankTheme, darkTheme, lightTheme } from './components/other/themes'
import { propertyMenuDropdown} from './components/other/propertyMenu'

const root = figma.root

function Widget() {

    const themes = {
        'Light': lightTheme,
        'Dark': darkTheme,
        'Blank Theme': blankTheme
    }

    const sizes = {
        'Small': 8,
        'Medium': 16,
        'Large': 24
    }

    const [themeOption,setThemeOption] = useSyncedState<string>('theme-option', Object.keys(themes)[0])
    const [sizeOption,setSizeOption] = useSyncedState<string>('size-option', Object.keys(sizes)[0])
    
    const [,setTheme] = useSyncedState<theme>('theme', themes['Light'])
    const [,setUnit] = useSyncedState<number>('unit', sizes['Small'])

    const PropertyMenu = [
        propertyMenuDropdown({
            name: 'Theme',
            options: Object.keys(themes),
            selectedOption: themeOption,
        }),
        propertyMenuDropdown({
            name: 'Size',
            options: Object.keys(sizes),
            selectedOption: sizeOption,
        }),
    ]

    usePropertyMenu(PropertyMenu, ({ propertyName, propertyValue }) => {
        switch (propertyName) {
            case 'Theme':
                changeTheme(propertyValue)
                break
            case 'Size':
                changeSize(propertyValue)
                break
        }
    })

    function changeTheme(propertyValue? : string) {
        if(!propertyValue) return

        console.log(propertyValue)
        setThemeOption(propertyValue)
        setTheme(themes[propertyValue as keyof typeof themes])
    }

    function changeSize(propertyValue? : string) {
        if(!propertyValue) return

        console.log(propertyValue)
        setSizeOption(propertyValue)
        setUnit(sizes[propertyValue as keyof typeof sizes])
    }
    
    return (
        <Board />
    )

}

widget.register(Widget)
