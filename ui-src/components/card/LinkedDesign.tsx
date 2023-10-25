import React, { useContext } from 'react';
import { LargeNextIcon, LinkIcon, NextIcon, UnlinkIcon } from '../icons/Icons';
import '../../styles/LinkedDesign.css'
import TypeIcon from '../icons/TypeIcon';
import { CardContext } from './Card';

function LinkedDesign() {
    const {card, update} = useContext(CardContext)

    const node = card.node

    const handleLink = () => {
        parent.postMessage({ pluginMessage: { type: 'link', card: card } }, '*')
    }

    const handleUnlink = () => {
        update({node: undefined})
    }

    const handleOpen = () => {
        parent.postMessage({ pluginMessage: { type: 'open', card: card } }, '*')
    }

    return (
        <div className='icon_wrapper'>
            <LinkIcon />
            <div className='content_wrapper'>
                <h3>Design</h3>
                <div className='link_group fill'>
                    <div className='link_wrapper fill' onClick={handleLink}>
                        <TypeIcon type={node?.type} />
                        <span 
                            className='text-overflow fill'
                            placeholder='Click here to link object'
                        >
                            {node?.name}
                        </span>
                    </div>
                    <div className='link_wrapper icon-button' onClick={handleUnlink}>
                        <UnlinkIcon />
                    </div>
                    <div className='link_wrapper icon-button' onClick={handleOpen}>
                        <LargeNextIcon />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LinkedDesign