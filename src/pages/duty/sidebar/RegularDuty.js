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
      <button onClick={handleClick} style={{ fontSize: '17px', fontWeight: 'bold' }}>정규 근무</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
              <div className="mt-2">
                <NavLink to="setting">정규 근무 확인 및 설정</NavLink>
              </div>
              <div className="mt-2">
                <NavLink to="dutyApplyStatus">정규 근무 신청 내역</NavLink>
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default RegularDuty;
