import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../task/taskCSS/SlideToggle.css";
import { NavLink } from "react-router-dom";

function StatusMenu() {
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
        근무/휴가 현황
      </button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
              <div className="mt-2">
                <NavLink to="/duty/AttendanceCalendar">
                  근무/휴가 캘린더
                </NavLink>
              </div>
              <div className="mt-2">
                <NavLink to="/duty/DVApplyStatus">근무/휴가 통합검색</NavLink>
              </div>
              <div className="mt-2">
                우리 부서 스케줄 확인
                <NavLink to="/duty/DepartmentScheduleCheck">
                  근무/휴가 캘린더
                </NavLink>
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default StatusMenu;
