import React from 'react';
import { LinkIcon, NextIcon } from './Icons';
import { NodeProps } from '../interfaces/props';
import '../styles/LinkedDesign.css'

function LinkedDesign(node : Partial<NodeProps>) {
    return (
        <div className='icon_wrapper'>
            <LinkIcon />
            <div className='content_wrapper'>
                <h3>Design</h3>
                <div className='link_group fill'>
                    <div className='link_wrapper fill'>
                        <span className='fill'>{node.name}</span>
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