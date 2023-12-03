import React, { useState, useEffect } from "react";
import DutyCSS from "../dutyCSS/Duty.module.css";
import DutyApplyCSS from "../dutyCSS/DutyApply.module.css";

function VacationStatusArticle() {
  const [vacationTypes] = useState([
    { name: "연차", max: 10 },
    { name: "공가", max: 5 },
    { name: "병결", max: 7 },
    { name: "개인사유", max: 8 },
  ]);

  const [vacationData, setVacationData] = useState([
    { used: 5 },
    { used: 5 },
    { used: 6 },
    { used: 1 },
  ]);

  useEffect(() => {
    // 백에서 휴가 데이터를 가져와 로직을 구현할 곳
    // useEffect 내에서 데이터를 가져와서 setVacationData를 통해 업데이트함
    // ex> fetch('/api/vacation').then(response => response.json()).then(data => setVacationData(data));
  }, []);

  return (
    <>
      <h1 className={DutyCSS.articleTitle}>나의 휴가 현황</h1>
      <div className={DutyApplyCSS.formGroup2} style={{ display: "flex" }}>
        <div className={DutyApplyCSS.formBox} style={{ flex: 1 }}>
          사용
        </div>
        <div className={DutyApplyCSS.formBox} style={{ flex: 8 }}>
          휴가종류
        </div>
        <div className={DutyApplyCSS.formBox} style={{ flex: 1 }}>
          한도
        </div>
      </div>
      <div className={DutyApplyCSS.formGroup2}>
        {vacationTypes.map((type, index) => (
          <>
            <div className={DutyApplyCSS.formGroup2}>{type.name}</div>
            <div
              className={DutyApplyCSS.formGroup2}
              key={index}
              style={{ display: "flex" }}
            >
              <div className={DutyApplyCSS.formBox} style={{ flex: 1 }}>
                {vacationData[index]?.used}
              </div>
              {/* 게이지 바 그래프를 생성하는 컴포넌트를 렌더링 */}
              <div className={DutyApplyCSS.formBox} style={{ flex: 8 }}>
                <GaugeGraph
                  max={type.max}
                  current={vacationData[index]?.used || 0}
                />
              </div>
              <div className={DutyApplyCSS.formBox} style={{ flex: 1 }}>
                {type.max}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

// 게이지 그래프를 렌더링하는 함수
function GaugeGraph({ max, current }) {
  const percentage = (current / max) * 100;

  let gaugeBarClassName = DutyApplyCSS.gaugeBar;

  // 휴가 사용량에 따라 게이지 바의 클래스를 동적으로 결정
  if (percentage >= 50 && percentage < 80) {
    gaugeBarClassName = DutyApplyCSS.gaugeBarGood;
  } else if (percentage >= 80 && percentage < 100) {
    gaugeBarClassName = DutyApplyCSS.gaugeBarWarning;
  } else if (percentage >= 100) {
    gaugeBarClassName = DutyApplyCSS.gaugeBarDanger;
  }

  return (
    <div className={DutyApplyCSS.gaugeGraph}>
      <div
        className={gaugeBarClassName}
        style={{ width: `${percentage}%`, zIndex: 1 }}
      >
        {current}
      </div>
    </div>
  );
}

export default VacationStatusArticle;
