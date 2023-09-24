import React, { useContext } from 'react';
import { LinkIcon, NextIcon } from '../icons/Icons';
import '../../styles/LinkedDesign.css'
import TypeIcon from '../icons/TypeIcon';
import { CardContext } from './Card';

function LinkedDesign() {
    const {card, columns, move} = useContext(CardContext)

    const node = card.node

    return (
        <div className='icon_wrapper'>
            <LinkIcon />
            <div className='content_wrapper'>
                <h3>Design</h3>
                <div className='link_group fill'>
                    <div className='link_wrapper fill'>
                        <TypeIcon type={node?.type} />
                        <span 
                            className='text-overflow fill'
                            placeholder='Click here to link selected object'
                        >
                            {node?.name}
                        </span>
                    </div>
                    <div className='link_wrapper'>
                        <NextIcon />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LinkedDesign