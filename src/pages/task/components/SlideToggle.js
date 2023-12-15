import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { NavLink } from "react-router-dom"
import '../taskCSS/SlideToggle.css';


function SlideToggle(){
    const [hover, setHover] = useState(false);

    const mouseOverHandler = () => {
        setHover(true);
    };

    const mouseOutHandler = () => {
        setHover(false);
    }

    return (
        <div onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
            <div>수신함</div>
            <TransitionGroup>
                {hover && (
                    <CSSTransition classNames="slide" timeout={200}>
                        <div>
                            <div className='mt-2' ><NavLink to="approver">- 결재함</NavLink></div>
                            <div className='mt-2' ><NavLink to="referred">- 결재 참조</NavLink></div>
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default SlideToggle;