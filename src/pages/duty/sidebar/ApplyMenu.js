import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../task/taskCSS/SlideToggle.css";
import { NavLink } from "react-router-dom";

function Vacation() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ fontSize: "17px", fontWeight: "bold" }}
      >
        근무/휴가 신청
      </button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
            <div className="mt-2">
                <NavLink to="specialDutyApply">특별 근무 신청</NavLink>
              </div>
              <div className="mt-2">
                <NavLink to="vacationApply">휴가 신청</NavLink>
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default Vacation;
