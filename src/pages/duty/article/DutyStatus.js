import React from "react";

import DutyCSS from "../dutyCSS/Duty.module.css";
import RegularDutyArticle from "./RegularDutyArticle";
import DutyCalendarArticle from "./DutyCalendarArticle";

function DutyStatus() {
  /* 렌더링 영역 */
  return (
    <>
      <div className={DutyCSS.article}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 2 }}>
            <div className={DutyCSS.articleContainer}>
              <div>
                <DutyCalendarArticle />
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            {/* 오른쪽 영역 : 정규근무 개요 */}
            <RegularDutyArticle />
          </div>
        </div>
      </div>
    </>
  );
}

export default DutyStatus;
