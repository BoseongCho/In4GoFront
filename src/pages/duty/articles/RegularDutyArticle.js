import React, { useEffect, useState } from "react";
import { callDutySettingAPI } from "../../../apis/DutyAPICalls";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import DutyCSS from "../dutyCSS/Duty.module.css";
import { useNavigate } from "react-router-dom";

function RegularDutyArticle() {
  const dispatch = useDispatch();
  const workSetlist = useSelector((state) => state.dutyReducer); // 선언한 store목록 중에서 dutyReducer를 가져올거다.
  console.log("workSetlist", workSetlist);

  useEffect(() => {
    dispatch(callDutySettingAPI());
  }, []);

  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const [tab1, setTab1] = useState("#b9ddff35");
  const [tab2, setTab2] = useState("#b9ddff35");
  const [tab3, setTab3] = useState("#b9ddff35");
  const [tab4, setTab4] = useState("#b9ddff35");
  const [tab5, setTab5] = useState("#b9ddff35");
  const [tab6, setTab6] = useState("#b9ddff35");
  const [tab7, setTab7] = useState("#b9ddff35");

  let day1 = "";
  let day2 = "";
  let day3 = "";
  let day4 = "";
  let day5 = "";
  let day6 = "";
  let day7 = "";
  let Time24 = "";

  if (workSetlist.length > 0) {
    // 일 근무시간 계산

    const timeCode = workSetlist[0].basicworkTime;
    const timeCode2 = timeCode.split("-");
    console.log("timeCode2", timeCode2);

    const time1 = timeCode2[0];
    const time2 = timeCode2[1];

    console.log("time1 :" + time1);
    console.log("time2 :" + time2);

    const result1 = time1.split(":");
    console.log("result1 : " + result1);

    let h, m;
    [h, m] = result1;
    console.log("h :" + h + " m : " + m);

    const result2 = time2.split(":");
    console.log("result2 : " + result2);

    let h1, m1;
    [h1, m1] = result2;
    console.log("h1 :" + h1 + " m1 : " + m1);

    const stTime = parseInt(h * 60) + parseInt(m);
    const eTime = parseInt(h1 * 60) + parseInt(m1);

    console.log("stTime : " + stTime);
    console.log("endTime : " + eTime);

    const hour = parseInt((eTime - stTime) / 60);
    const minute = (eTime - stTime) % 60;

    console.log("hour : " + hour);
    console.log("minute : " + minute);

    Time24 = `${hour}시간${minute}분`;

    // 근무 요일 색상

    const dayCode = workSetlist[0].workdayRule.toString();
    const dayCode2 = dayCode.split("");

    console.log("dayCode2", dayCode2);
    console.log("dayCode2[0]", dayCode2[0]);
    console.log("dayCode2[6]", dayCode2[6]);
    console.log(dayCode2[6] === "1");

    day1 = dayCode2[0] === "1" ? "#b9ddff" : "#b9ddff35";
    day2 = dayCode2[1] === "1" ? "#b9ddff" : "#b9ddff35";
    day3 = dayCode2[2] === "1" ? "#b9ddff" : "#b9ddff35";
    day4 = dayCode2[3] === "1" ? "#b9ddff" : "#b9ddff35";
    day5 = dayCode2[4] === "1" ? "#b9ddff" : "#b9ddff35";
    day6 = dayCode2[5] === "1" ? "#b9ddff" : "#b9ddff35";
    day7 = dayCode2[6] === "1" ? "#b9ddff" : "#b9ddff35";
  }

  function printWorkTime() {
    const time1 = document.getElementById("basicWorkTime1").value;
    const time2 = document.getElementById("basicWorkTime2").value;

    console.log("time1 :" + time1);

    let result1 = "";
    result1 = time1.split(":");
    console.log("result1 : " + result1);

    let h, m;
    [h, m] = result1;
    console.log("h :" + h + " m : " + m);

    let result2 = "";
    result2 = time2.split(":");
    console.log("result2 : " + result2);

    let h1, m1;
    [h1, m1] = result2;
    console.log("h1 :" + h1 + " m1 : " + m1);

    const stTime = parseInt(h * 60) + parseInt(m);
    const eTime = parseInt(h1 * 60) + parseInt(m1);

    console.log("stTime : " + stTime);
    console.log("endTime : " + eTime);

    const hour = parseInt((eTime - stTime) / 60);
    const minute = (eTime - stTime) % 60;

    console.log("hour : " + hour);
    console.log("minute : " + minute);

    document.getElementById("result").innerText = `${hour}시간${minute}분`;
  }

  /* 렌더링 영역 */
  return (
    <>
      <div className={DutyCSS.articleTitle}>
        <div style={{ marginLeft: 50 }}>
          <h1>
            <NavLink to="setting">근무시간 개요</NavLink>
          </h1>
        </div>
      </div>

      <div className={DutyCSS.box1}>
        <div className={DutyCSS.articleBox}>
          <div className={`${DutyCSS["articleSubject"]}`}>근무 유형</div>
          <div className={`${DutyCSS["content2"]}`}></div>
        </div>

        <div className={`${DutyCSS["articleBox"]}`}>
          <div className={`${DutyCSS["articleSubject"]}`}>일 근무시간</div>
          <div
            className={`${DutyCSS["basicWorkTime"]}`}
            onChange={printWorkTime}
          ></div>
          <div className={`${DutyCSS["content6"]}`} style={{ marginLeft: 65 }}>
            시간
          </div>
        </div>

        <div className={`${DutyCSS["articleBox"]}`}>
          <div className={`${DutyCSS["articleSubject"]}`}>
            휴게시간(점심 시간)
          </div>
          <div className={`${DutyCSS["basicLunch"]}`}></div>
        </div>

        <div className={`${DutyCSS["articleBox"]}`} style={{ display: "flex" }}>
          <div className={`${DutyCSS["articleSubject"]}`} style={{ flex: 1 }}>
            출퇴근 시간
          </div>
          <div className={`${DutyCSS["selectDay2"]}`} style={{ flex: 1 }}>
            출근 시간 (~시 까지)
          </div>
          <div className={`${DutyCSS["selectDay2"]}`} style={{ flex: 1 }}>
            퇴근 시간 (~시 이후 가능)
          </div>
        </div>
        <div className={`${DutyCSS["articleBox"]}`}>
          <div className={`${DutyCSS["articleSubject"]}`}>주 정규근로 시간</div>
          <div className={`${DutyCSS["availwork2"]}`}>
            <div className={`${DutyCSS["line2"]}`}>시간</div>
          </div>
        </div>

        <div className={`${DutyCSS["articleBox"]}`}>
          <div className={`${DutyCSS["articleSubject"]}`}>
            최대 연장 근무 시간
          </div>
          <div className={`${DutyCSS["availwork1"]}`}>
            <div className={`${DutyCSS["line2"]}`}>시간</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegularDutyArticle;
