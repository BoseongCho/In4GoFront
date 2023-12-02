import ScheduleListCSS from "../dutyCSS/ScheduleList.module.css";
import ScheduleCSS from "../dutyCSS/Schedule.module.css";
import DutyCSS from "../dutyCSS/Duty.module.css";
import React, { useEffect, useState } from "react";
import { callScheduleManageAPI } from "../../../apis/DutyAPICalls";
import { callScheduleManageDetailAPI } from "../../../apis/DutyDetailAPICalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callScheduleManageUpdateAPI } from "../../../apis/DutyAPICalls";

function DutyApplyStatus() {
  const dispatch = useDispatch();
  const sclist = useSelector((state) => state.dutyReducer);
  const data2 = useSelector((state) => state.dutyDetailReducer);
  console.log("sclist : ", sclist);
  console.log("data2 : ", data2);
  const [selectedBtn, setSelectedBtn] = useState(null); // 승인상태 버튼 선택
  const [checkedBox, setCheckedBox] = useState(new Map()); // 체크박스 선택
  const [accordionOpen, setAccordionOpen] = useState([]); // 근무상세보기 아코디언
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  if (sclist !== undefined) {
    console.log("sclist", sclist);
  }
  useEffect(() => {
    dispatch(callScheduleManageAPI());
  }, []);

  const handleCheckBoxClick = (e, id) => {
    const isChecked = e.target.checked;
    setCheckedBox((prevState) => {
      const newCheckedBox = new Map(prevState);
      newCheckedBox.set(id, isChecked);
      return newCheckedBox;
    });
  };

  function handleBtnClick(buttonIndex) {
    setSelectedBtn(buttonIndex);
  }

  function getBtnStyle(buttonIndex) {
    if (selectedBtn === buttonIndex) {
      return { backgroundColor: "#c3edbf82" }; // 선택한 버튼 색상
    }
    return { backgroundColor: "white" }; // 선택안된 버튼 색상
  }

  const toggleAccordion = (index) => {
    const newAccordionOpen = [...accordionOpen];
    newAccordionOpen[index] = !newAccordionOpen[index];
    setAccordionOpen(newAccordionOpen);

    dispatch(callScheduleManageDetailAPI());

    console.log("data2", data2);

    // 요일별 스케줄 조회
  };

  const onClickSetUpdateHandler = () => {
    console.log("[DutySetUpdate] onClickSetUpdateHandler");

    dispatch(
      callScheduleManageUpdateAPI({
        // 스케줄 신청-> 승인으로 정보 업데이트
        form: form,
      })
    );

    navigate(`/duty/setting`, { replace: true });
    window.location.reload();
  };

  return (
    <>
      <div className={DutyCSS.article}>
        <div className={ScheduleCSS.sctitle1}>
          <h3>근무 신청 내용</h3>
        </div>

        <div className={ScheduleCSS.scbox}>
          <div className={ScheduleCSS.scboxx}>
            <div className={ScheduleCSS.scset}>
              <div className={ScheduleCSS.signupnam}>신청일자</div>
              <div className={ScheduleCSS.signupd}>
                <input
                  id="signupDay1"
                  className={ScheduleCSS.signupDay1}
                  type="date"
                />
                <input
                  id="signupDay1"
                  className={ScheduleCSS.signupDay1}
                  type="date"
                />
              </div>
            </div>

            <div className={ScheduleCSS.statenam}>
              <div className={ScheduleCSS.state1}>승인상태</div>
              <button
                style={getBtnStyle(0)}
                className={ScheduleCSS.state2}
                onClick={() => handleBtnClick(0)}
              >
                전체
              </button>
              <button
                style={getBtnStyle(1)}
                className={ScheduleCSS.state2}
                onClick={() => handleBtnClick(1)}
              >
                신청
              </button>
              <button
                style={getBtnStyle(2)}
                className={ScheduleCSS.state2}
                onClick={() => handleBtnClick(2)}
              >
                승인
              </button>
            </div>

            <div className={ScheduleCSS.scpeop}>
              <div className={ScheduleCSS.signpeo}>신청자</div>
              <input
                id="peopleName"
                className={ScheduleCSS.scpeople}
                type="text"
              />
              <button type="button">
                {/* <img src="images/searchButton.png" /> */}🔍
              </button>
            </div>
          </div>
        </div>

        <div className={ScheduleCSS.scbox1}>
          <div className={ScheduleCSS.scbox2}>
            <div className={ScheduleCSS.sclist}>
              <h5>근무 스케줄 신청리스트</h5>
            </div>
            <button
              className={ScheduleCSS.scapprove}
              onClick={onClickSetUpdateHandler}
            >
              승인
            </button>
          </div>
        </div>

        <div className={ScheduleCSS.sctitle2}>
          <div className={`${ScheduleListCSS["pplist"]}`}>
            <form>
              <table className={`${ScheduleCSS["appltablee"]}`}>
                <thead className={`${ScheduleCSS["appltheady"]}`}>
                  <tr className={`${ScheduleListCSS["appltr"]}`}>
                    <th className={`${ScheduleCSS["applthe"]}`}>✓</th>
                    <th className={`${ScheduleCSS["applthe"]}`}>신청일자</th>
                    <th className={`${ScheduleCSS["applthe"]}`}>신청자</th>
                    <th className={`${ScheduleCSS["applthe"]}`}>승인상태</th>
                    <th className={`${ScheduleCSS["applthe"]}`}>근무유형</th>
                    <th className={`${ScheduleCSS["applthe"]}`}>근무시간</th>
                    <th className={`${ScheduleCSS["applthe"]}`}>적용기간</th>
                  </tr>
                </thead>

                <tbody>
                  {Array.isArray(sclist) &&
                    sclist.map((sc, index) => (
                      <React.Fragment key={index}>
                        <tr className={`${ScheduleListCSS["appltr"]}`}>
                          <td className={`${ScheduleCSS["appltde"]}`}>
                            <input
                              type="checkbox"
                              id={`checkbox-${index}`}
                              value={sc.id}
                              checked={checkedBox[index]}
                              onChange={(e) => handleCheckBoxClick(e, index)}
                            />
                          </td>

                          <td className={`${ScheduleCSS["appltde"]}`}>
                            {sc.scheduleNumber &&
                              new Date(
                                sc.scheduleNumber.scheduleApplicationDate
                              ).toLocaleDateString("ko-KR")}
                          </td>

                          <td className={`${ScheduleCSS["appltde"]}`}>
                            {sc.scheduleNumber &&
                              sc.scheduleNumber.memCode.memName}
                          </td>
                          <td className={`${ScheduleCSS["appltde"]}`}>
                            {sc.approvedCode && sc.approvedCode.approvedName}
                          </td>
                          <td className={`${ScheduleCSS["appltde"]}`}>
                            {sc.scheduleNumber &&
                              sc.scheduleNumber.DutySettingNumber.worktypeCode
                                .worktypeName}
                          </td>
                          <td className={`${ScheduleCSS["appltde"]}`}>
                            <button
                              onClick={() => toggleAccordion(index)}
                              type="button"
                            >
                              근무시간상세보기
                            </button>
                          </td>
                          <td className={`${ScheduleCSS["appltde"]}`}>
                            {sc.scheduleNumber &&
                              sc.scheduleNumber.scheduleStartDate}
                          </td>
                        </tr>

                        {accordionOpen[index] && (
                          <tr>
                            <td colSpan="7">
                              <div
                                className={`${ScheduleListCSS["accordion-content"]}`}
                              >
                                <table
                                  className={`${ScheduleCSS["appltableex"]}`}
                                >
                                  <thead
                                    className={`${ScheduleListCSS["applthead"]}`}
                                  >
                                    <tr className={`${ScheduleCSS["appltre"]}`}>
                                      <th
                                        className={`${ScheduleCSS["applthey"]}`}
                                      >
                                        월
                                      </th>
                                      <th
                                        className={`${ScheduleCSS["applthey"]}`}
                                      >
                                        화
                                      </th>
                                      <th
                                        className={`${ScheduleCSS["applthey"]}`}
                                      >
                                        수
                                      </th>
                                      <th
                                        className={`${ScheduleCSS["applthey"]}`}
                                      >
                                        목
                                      </th>
                                      <th
                                        className={`${ScheduleCSS["applthey"]}`}
                                      >
                                        금
                                      </th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    <tr>
                                      <td
                                        className={`${ScheduleCSS["appltde"]}`}
                                      >
                                        {data2[0] && data2[0].workStarttime}
                                      </td>
                                      <td
                                        className={`${ScheduleCSS["appltde"]}`}
                                      >
                                        {data2[1] && data2[1].workStarttime}
                                      </td>
                                      <td
                                        className={`${ScheduleCSS["appltde"]}`}
                                      >
                                        {data2[2] && data2[2].workStarttime}
                                      </td>
                                      <td
                                        className={`${ScheduleCSS["appltde"]}`}
                                      >
                                        {data2[3] && data2[3].workStarttime}
                                      </td>
                                      <td
                                        className={`${ScheduleCSS["appltde"]}`}
                                      >
                                        {data2[4] && data2[4].workStarttime}
                                      </td>
                                    </tr>

                                    <tr>
                                      <td
                                        className={`${ScheduleCSS["appltdex"]}`}
                                      >
                                        {data2[0] && data2[0].workEndtime}
                                      </td>
                                      <td
                                        className={`${ScheduleCSS["appltdex"]}`}
                                      >
                                        {data2[1] && data2[1].workEndtime}
                                      </td>
                                      <td
                                        className={`${ScheduleCSS["appltdex"]}`}
                                      >
                                        {data2[2] && data2[2].workEndtime}
                                      </td>
                                      <td
                                        className={`${ScheduleCSS["appltdex"]}`}
                                      >
                                        {data2[3] && data2[3].workEndtime}
                                      </td>
                                      <td
                                        className={`${ScheduleCSS["appltdex"]}`}
                                      >
                                        {data2[4] && data2[4].workEndtime}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DutyApplyStatus;
