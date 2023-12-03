import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../task/taskCSS/SlideToggle.css";
import { NavLink } from "react-router-dom";

function RegularDuty() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick} style={{ fontSize: '17px', fontWeight: 'bold' }}>관리자 메뉴</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
              <div className="mt-2">
                <NavLink to="DutyManage">정규 근무시간 조정</NavLink>
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default RegularDuty;
