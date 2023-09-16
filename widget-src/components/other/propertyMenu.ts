import { propertyMenuDropdownProps } from "../../interfaces/props"

export const propertyMenuDropdown = (propertyMenuDropdown : propertyMenuDropdownProps) => {
    const Options : WidgetPropertyMenuDropdownOption[] = propertyMenuDropdown.options.map((option) => {
        return {
            option: option,
            label: option,
        }
    })
    return <WidgetPropertyMenuItem>{
        itemType: 'dropdown',
        tooltip: propertyMenuDropdown.name,
        propertyName: propertyMenuDropdown.name,
        options: Options,
        selectedOption: propertyMenuDropdown.selectedOption,
    }
}