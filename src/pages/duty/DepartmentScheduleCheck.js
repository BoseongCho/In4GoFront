import React, { useEffect, useState } from "react";
import DutyCSS from "./dutyCSS/Duty.module.css";
import ScheduleCSS from "./dutyCSS/Schedule.module.css";

const DepartmentScheduleCheck = () => {
  const [dataForWeeks, setDataForWeeks] = useState([]);
  const [dateValue, setDateValue] = useState([]);

  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const today = month + "월 " + day + "일";

  // 2주치 (컬럼)
  const dayColumns = [
    "7일 전",
    "6일 전",
    "5일 전",
    "4일 전",
    "3일 전",
    "2일 전",
    "어제",
    today,
    "내일",
    "2일 뒤",
    "3일 뒤",
    "4일 뒤",
    "5일 뒤",
    "6일 뒤",
    "7일 뒤",
  ];

  // 날짜 계산용 useEffect 함수
  useEffect(() => {
    // 오늘 날짜를 가져옵니다.
    const today = new Date();

    // 1주일(7일)을 밀리초로 계산합니다.
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

    // 오늘로부터 7일 이전부터 7일 이후까지의 날짜를 배열에 추가합니다.
    const dateValue = [];
    for (let i = -7; i <= 7; i++) {
      const date = new Date(today.getTime() + i * oneDayInMilliseconds);
      dateValue.push(date);
    }

    // 계산된 날짜 배열을 상태로 설정합니다.
    setDateValue(dateValue);
  }, []);

  // 스케쥴 처리용 useEffect 함수
  useEffect(() => {
    const dataFromBackend = [
      {
        teamMember: "Team Member 1",
        schedules: [
          {
            schedule: "Task 1",
            start: "2023-12-01",
            end: "2023-12-05",
          },
        ],
      },
      {
        teamMember: "Team Member 2",
        schedules: [
          {
            schedule: "Task 3",
            start: "2023-12-11",
            end: "2023-12-15",
          },
        ],
      },
      {
        teamMember: "Team Member 3",
        schedules: [
          {
            schedule: "Task 4",
            start: "2023-12-16",
            end: "2023-12-20",
          },
        ],
      },
    ];
    const getData = () => {
      const weeksData = [];

      const filteredData = dataFromBackend
        .filter((item) => item.schedules.length > 0)
        .map((item) => {
          const schedulesInWeek = dateValue.map((date) => {
            const schedule = item.schedules.find((schedule) => {
              const scheduleStartDate = new Date(schedule.start);
              return (
                scheduleStartDate.getDate() === date.getDate() &&
                scheduleStartDate.getMonth() === date.getMonth() &&
                scheduleStartDate.getFullYear() === date.getFullYear()
              );
            });

            return schedule ? "schedule" : "";
          });

          return {
            teamMember: item.teamMember,
            schedules: schedulesInWeek,
          };
        });

      weeksData.push(filteredData);

      return weeksData;
    };
    setDataForWeeks(getData());
    console.log(dataForWeeks);
  }, [dateValue, setDataForWeeks]);

  return (
    <>
      <div className={DutyCSS.article}>
        <div className={DutyCSS.articleTitle} style={{ marginBottom: 30 }}>
          <h1> 우리 부서 스케줄 확인</h1>
        </div>
        <div
          className={ScheduleCSS.chartContainer}
          style={{ float: "left", width: "100%" }}
        >
          <div
            className={ScheduleCSS.chartRow}
            style={{ display: "flex", float: "left", width: "100%" }}
          >
            <div style={{ flex: 1 }}></div>

            <div style={{ flex: 9 }}>
              {dayColumns.map((dayColumns, dayColumnsIndex) => (
                <div
                  className={ScheduleCSS.chartColumn}
                  key={dayColumnsIndex}
                  style={{ float: "left" }}
                >
                  {dayColumns}
                </div>
              ))}
            </div>
          </div>
          <>
            {dataForWeeks.map((weekData, weekIndex) => (
              <div key={weekIndex} style={{ width: "100%", float: "left" }}>
                {weekData.map((memberData, memberIndex) => (
                  <div
                    className={ScheduleCSS.chartRow}
                    style={{ display: "flex", float: "left", width: "100%" }}
                  >
                    <div key={memberIndex} style={{ flex: 1 }}>
                      {memberData.teamMember}
                    </div>
                    <div key={memberIndex} style={{ flex: 9 }}>
                      {memberData.schedules.map((schedule, scheduleIndex) => (
                        <div
                          key={scheduleIndex}
                          className={`${ScheduleCSS.chartBar} ${
                            schedule ? ScheduleCSS.hasTask : ScheduleCSS.empty
                          }`}
                        >
                          {schedule}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default DepartmentScheduleCheck;
