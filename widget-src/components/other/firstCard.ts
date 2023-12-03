const { widget } = figma
const { useWidgetNodeId } = widget
import { CardProps, NodeProps } from "../../interfaces/props"

const properties = {month: '2-digit', day: '2-digit', year: 'numeric' as const};

const Description : string = `
Thanks for adding this widget!
- You can change card name by clicking on the title.\n
- Change status by dropdown or arrow button\n
- You can assign user from list of people who interacted with the widget\n
- Change description\n
- And link any object from your file, just select 1 object and click on the button bellow\n
- Arrow button near it will show you the linked object, clicking on blue tag at card itself, will do the same\n
Enjoy, and feel free to share any thought!
`

const widgetNode : NodeProps = {
    name: 'Kanban Board',
    id: figma.currentPage.id,
    type: 'WIDGET',
    pageId: figma.currentPage.id,
}

const assignee : BaseUser = {
    id: "730867347144150438",
    photoUrl: "https://s3-alpha.figma.com/profile/60187d8d-19b8-43a0-aa36-f44776af535c",
    name: "Dimm",
}

const firstCard : CardProps = {
    id: '',
    name: 'Welcome to Kanban! \nClick here to open the card',
    description: Description,
    date : 'Oct 26, 2023',
    node: widgetNode,
    assignee: assignee,
}


export default firstCard;