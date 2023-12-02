import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../task/taskCSS/SlideToggle.css";

function AdditionalMenu() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick} style={{ fontSize: '17px', fontWeight: 'bold' }}>추가 메뉴</button>
      <TransitionGroup>
        {show && (
          <CSSTransition classNames="slide" timeout={200}>
            <div>
            <div className="mt-2">월간 근태 현황</div>
              <div className="mt-2">우리부서 스케줄 확인</div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default AdditionalMenu;
