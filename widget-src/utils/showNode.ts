import { NodeProps } from "../interfaces/props";


function ShowNode(Node : NodeProps | undefined) {
    if (!Node) {
        figma.notify("Please link a node to this card first.");
        return;
    }
    const page = figma.getNodeById(Node.pageId) as PageNode;
    figma.currentPage = page;

    const targetNode = figma.getNodeById(Node.id) as SceneNode;

    figma.viewport.scrollAndZoomIntoView([targetNode]);
}

export default ShowNode;