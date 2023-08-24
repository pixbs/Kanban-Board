import { Theme } from "../interfaces/index"

const whiteTheme: Theme = {
    name: 'white',
    unit: 8,
    radius: 0.5,
    colors: {
        primary: '#333333',
        secondary: '#E6E6E6',
        background: '#FFFFFF',
        red: '#F9A491',
        orange: '#FCCC88',
        green: '#8DE2BE',
        blue: '#8CD0FD',
        purple: '#BDB0FF',
    }
}

export var currentTheme: Theme = whiteTheme