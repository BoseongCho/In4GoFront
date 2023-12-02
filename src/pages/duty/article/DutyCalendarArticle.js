import React, { useState, useEffect } from "react";
import { callDutySettingAPI } from "../../../apis/DutyAPICalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DutyCSS from "../dutyCSS/Duty.module.css";

function DutyCalendarArticle() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 오늘 날짜의 월 정보 가져오기

  // 이번 달의 첫째 날짜 구하기
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

  // 이번 달 첫 번째 날의 요일(0: 일요일, 1: 월요일, ...)
  const firstDayOfWeek = firstDayOfMonth.getDay();

  // 이번 달의 마지막 날짜 구하기
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // 날짜-할일로 이뤄진 배열 초기화
  const [dateTaskArrays, setDateTaskArrays] = useState([]);

  useEffect(() => {
    // 데이터를 백엔드에서 가져오거나 생성하는 함수 호출
    const generatedData = generateDateTasksArray();
    setDateTaskArrays(generatedData);
  }, []);

  // 데이터 생성 함수
  function generateDateTasksArray() {
    const data = [];
    // 첫 번째 날짜 전에 빈 칸 추가하여 일요일부터 시작하도록 조정
    for (let i = 0; i < firstDayOfWeek; i++) {
      data.push({ date: "", task: "" });
    }
    // 날짜를 돌면서 데이터 생성
    for (let day = 1; day <= lastDayOfMonth; day++) {
      const formattedDate = String(day);
      data.push({ date: formattedDate, task: "" });
    }
    return data;
  }

  // // 날짜-할일로 이뤄진 배열 만들고 초기화
  // const dateTaskArrays = [
  //   function generateDateTasksArray() {
  //     // 날짜를 돌면서
  //     for (let day = 1; day <= lastDayOfMonth; day++) {
  //       // apdStart : 주어진 문자열의 길이가 targetLength보다 짧을 경우, 앞에 padString 값을 추가하여 최종 길이가 targetLength가 되도록 만듦 -> '1' 이면 '01'로 만들어줌.
  //       const formattedDate = String(day);

  //       dateTaskArrays.push({ date: formattedDate, task: "" });
  //     }
  //   },
  // ];

  // // 백에서 '날짜-할일'로 묶인 배열 가져오기
  // async function fetchDataFromBackend() {
  //   try {
  //     const response = await fetch("백엔드_API_URL");
  //     if (!response.ok) {
  //       throw new Error("데이터를 가져오는 데 문제가 발생했습니다.");
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error("데이터 가져오기 오류:", error);
  //     return [];
  //   }
  // }

  // // 데이터 가져와서 dateTasks 변수에 담기
  // async function getDataFromBackend() {
  //   // 할일 배열
  //   const dateTasks = await fetchDataFromBackend();
  //   return dateTasks;
  // }

  // // getDataFromBackend 함수를 호출하여 데이터를 가져옴
  // getDataFromBackend().then((dateTasks) => {
  //   // 가져온 데이터 가공
  //   dateTasks.forEach((item) => {
  //     // 첫 번째 날부터 마지막 날까지의 날짜와 할일을 배열에 추가
  //     for (let day = 1; day <= lastDayOfMonth; day++) {
  //       if (day === item.Date) {
  //         dateTaskArrays.push(
  //           // 할일을 푸시
  //           { date: item.Date, task: item.task }
  //         );
  //       }
  //     }
  //   });
  // });

  return (
    <>
      <div>
        <h1>근무 캘린더</h1>
        <div className={DutyCSS.calendarContainer}>
          <div className={DutyCSS.calendarDayYoil}>일</div>
          <div className={DutyCSS.calendarDayYoil}>월</div>
          <div className={DutyCSS.calendarDayYoil}>화</div>
          <div className={DutyCSS.calendarDayYoil}>수</div>
          <div className={DutyCSS.calendarDayYoil}>목</div>
          <div className={DutyCSS.calendarDayYoil}>금</div>
          <div className={DutyCSS.calendarDayYoil}>토</div>
          {dateTaskArrays.map((item, index) => (
            <div key={index} className={DutyCSS.calendarDayBox}>
              <div className={DutyCSS.calendarDaySubject}>{item.date}</div>
              <div className={DutyCSS.calendarDayContent}>{item.task}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DutyCalendarArticle;
