import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";
import DutyCSS from "./dutyCSS/Duty.module.css";
import DutyApplyCSS from "./dutyCSS/DutyApply.module.css";

Modal.setAppElement("#root");

function SpecialDutyApply() {
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [reason, setReason] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = () => {
    // 누락 사항 검증
    if (!category || !startDate || !endDate || !reason) {
      window.alert("빈 항목이 있습니다. 다시한번 확인해주세요.");
    } else {
      setError(""); // 에러 메시지 초기화
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const calculateDuration = () => {
    if (startDate && endDate) {
      const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);
      let days = 0;

      while (startDateObj <= endDateObj) {
        const dayOfWeek = startDateObj.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          days++;
        }
        startDateObj.setTime(startDateObj.getTime() + oneDay);
      }

      return days;
    }
    return 0;
  };

  return (
    <>
      <div className={DutyCSS.article}>
        <h1 className={DutyCSS.articleTitle}>특별 근무 (확인) 신청</h1>
        <div className={DutyApplyCSS.formGroup} style={{ display: "flex" }}>
          <div className={DutyApplyCSS.formBox} style={{ flex: 1 }}>
            <label className={DutyApplyCSS.label}>카테고리:</label>
            <select
              className={DutyApplyCSS.select}
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">선택하세요</option>
              <option value="야근">야근</option>
              <option value="주말근무">주말근무</option>
              <option value="출장">출장</option>
              <option value="파견">파견</option>
            </select>
          </div>
          <div style={{ flex: 2 }}></div>
        </div>
        <div className={DutyApplyCSS.formGroup} style={{ display: "flex" }}>
          <div className={DutyApplyCSS.formBox} style={{ flex: 1 }}>
            <label className={DutyApplyCSS.label}>시작일자:</label>
            <DatePicker
              className={DutyApplyCSS.datePicker}
              selected={startDate}
              onChange={handleStartDateChange}
              placeholderText="시작일을 선택하세요"
            />
          </div>
          <div className={DutyApplyCSS.formBox} style={{ flex: 1 }}>
            <label className={DutyApplyCSS.label}>시작 시간:</label>
            <select
              className={DutyApplyCSS.select}
              value={startTime}
              onChange={handleStartTimeChange}
            >
              <option value="">선택하세요</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
            </select>
          </div>
          <div style={{ flex: 1 }}></div>
          <div className={DutyApplyCSS.formBox} style={{ flex: 1 }}>
            <label className={DutyApplyCSS.label}>종료일자:</label>
            <DatePicker
              className={DutyApplyCSS.datePicker}
              selected={endDate}
              onChange={handleEndDateChange}
              placeholderText="종료일을 선택하세요"
            />
          </div>
          <div className={DutyApplyCSS.formBox} style={{ flex: 1 }}>
            <label className={DutyApplyCSS.label}>종료 시간:</label>
            <select
              className={DutyApplyCSS.select}
              value={endTime}
              onChange={handleEndTimeChange}
            >
              <option value="">선택하세요</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
            </select>
          </div>
          <div style={{ flex: 1 }}></div>
        </div>
        <div className={DutyApplyCSS.formGroup}>
          <div className={DutyApplyCSS.formBox}>
            <label className={DutyApplyCSS.label}>사유:</label>
            <textarea
              className={DutyApplyCSS.textarea}
              rows="10"
              value={reason}
              onChange={handleReasonChange}
              style={{ resize: "vertical" }}
            />
          </div>
        </div>
        <button className={DutyApplyCSS.applyButton} onClick={handleSubmit}>
          신청
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={{
            overlay: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경 어둡게
            },
            content: {
              position: "relative",
              top: "auto",
              left: "auto",
              right: "auto",
              bottom: "auto",
              minWidth: "500px", // 모달의 최대 너비 설정
              maxWidth: "500px", // 모달의 최대 너비 설정
              minHeight: "600px", // 모달의 최대 너비 설정
              maxHeight: "600px", // 모달의 최대 너비 설정
            },
          }}
        >
          <h2>신청 정보 확인</h2>
          <br />
          <br />
          <p>카테고리: {category}</p>
          <br />
          <p>시작일자: {startDate?.toLocaleDateString()}</p>
          <br />
          <p>시작시간: {startTime} 시</p>
          <br />
          <p>종료일자: {endDate?.toLocaleDateString()}</p>
          <br />
          <p>종료시간: {endTime} 시</p>
          <hr />
          <p>인정 요청 기간: {calculateDuration()} 일</p>
          <hr />
          <p>신청일자: {new Date().toLocaleDateString()}</p>
          <br />
          <p>신청사유: {reason}</p>
          <br />
          <br />
          <button className={DutyApplyCSS.applyButton} onClick={closeModal}>
            닫기
          </button>
          <button className={DutyApplyCSS.submitButton} onClick={closeModal}>
            제출
          </button>
          <p>* 다시한번 확인 후 제출하시기 바랍니다. </p>
        </Modal>
      </div>
    </>
  );
}

export default SpecialDutyApply;
