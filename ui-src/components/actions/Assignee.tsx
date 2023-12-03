import React, { useContext, useState } from "react";
import { CaretDownIcon, UserIcon } from "../icons/Icons";
import { CardContext } from "../card/Card";
import "../../styles/actions/Assignee.css"
import keyPressHandler from "../../utils/KeyPressHandler";

function Assignee() {

    const {card, users} = useContext(CardContext)

    const [display, setDisplay] = useState(false)
    
    const image = card.assignee?.photoUrl ? 
        <img className="userpic" src={card.assignee.photoUrl} alt='Assignee'/> :
        <UserIcon />

    return (
        <div 
            className='wrapper assignee'
            tabIndex={0}
            onFocus={() => setDisplay(true)}
            onBlur={() => setDisplay(false)}
            onKeyDown={keyPressHandler}
        >
            {image}
            <span placeholder="Add assignee">
                {card.assignee?.name}
            </span>
            <CaretDownIcon />
            <Dropdown display={display}/>
        </div>
    )
}

function Dropdown({display} : {display: boolean}) {

    const {card, users,update} = useContext(CardContext)

    return (
        <div 
            className='dropdown-list'
            style={{display: display ? 'flex' : 'none', width: "10rem"}}
        >   

            {users.map((user, index) => {
                const image = user.photoUrl ?
                <img className="userpic" src={user.photoUrl} alt='Assignee'/> :
                <UserIcon />

                const isSame = user.id === card.assignee?.id
                let classNames = isSame ? 'selected' : ''

                return (  
                        <span
                            className={classNames}
                            key={index}
                            onClick={() => {
                                if (isSame) {
                                    update({assignee: undefined})
                                } else {
                                    update({assignee: user})
                                }
                            }}
                        >
                            {image}
                            {user.name}
                        </span>
                )
            })}
        </div>
    )
}

export default Assignee