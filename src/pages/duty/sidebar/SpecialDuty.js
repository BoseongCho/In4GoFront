import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../task/taskCSS/SlideToggle.css";

function SpecialDuty() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick} style={{ fontSize: '17px', fontWeight: 'bold' }}>특별 근무</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
              <div className="mt-2">특별 근무 현황 (주말근무, 출장, 파견) </div>
              <div className="mt-2">특별 근무 신청</div>
              <div className="mt-2">특별 근무 신청 내역 (정정신청 포함)</div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default SpecialDuty;
