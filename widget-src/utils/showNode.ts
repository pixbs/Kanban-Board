import { NodeProps } from "../interfaces/props";


function ShowNode(Node : NodeProps) {
    const page = figma.getNodeById(Node.pageId) as PageNode;
    figma.currentPage = page;

    const targetNode = figma.getNodeById(Node.id) as SceneNode;

    figma.viewport.scrollAndZoomIntoView([targetNode]);
}

export default ShowNode;