import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import VacationStatusArticle from "./articles/VacationStatusArticle";
import "react-datepicker/dist/react-datepicker.css";
import DutyCSS from "./dutyCSS/Duty.module.css";
import DutyApplyCSS from "./dutyCSS/DutyApply.module.css";

Modal.setAppElement("#root");

function VacationApply() {
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startHalfday, setStartHalfday] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endHalfday, setEndHalfday] = useState(null);
  const [destination, setDestination] = useState("");
  const [reason, setReason] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleStartHalfdayChange = (date) => {
    setStartHalfday(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleEndHalfdayChange = (date) => {
    setEndHalfday(date);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = () => {
    // 누락 사항 검증
    if (!category || !startDate || !endDate || !destination || !reason) {
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
      <div className={DutyCSS.article} style={{ display: "flex" }}>
        <div style={{ flex: 5 }}>
          <h1 className={DutyCSS.articleTitle}>휴가 확인 및 신청</h1>
          <div className={DutyApplyCSS.formGroup} style={{ display: "flex" }}>
            <div className={DutyApplyCSS.formBox} style={{ flex: 1 }}>
              <label className={DutyApplyCSS.label}>카테고리:</label>
              <select
                className={DutyApplyCSS.select}
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="">선택하세요</option>
                <option value="연차">연차(유급)</option>
                <option value="공가">공가(유급)</option>
                <option value="병결">병결(유급)</option>
                <option value="무급">개인사유(무급)</option>
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
                placeholderText="출발일을 선택하세요"
              />
            </div>
            <div className={DutyApplyCSS.formBox} style={{ flex: 1 }}>
              <label className={DutyApplyCSS.label}>시작 시간:</label>
              <select
                className={DutyApplyCSS.select}
                value={startHalfday}
                onChange={handleStartHalfdayChange}
              >
                <option value="">출발시간</option>
                <option value="오전">오전</option>
                <option value="오후">오후</option>
              </select>
            </div>

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
              <label className={DutyApplyCSS.label}>시작 시간:</label>
              <select
                className={DutyApplyCSS.select}
                value={endHalfday}
                onChange={handleEndHalfdayChange}
              >
                <option value="">종료시간</option>
                <option value="오전">오전</option>
                <option value="오후">오후</option>
              </select>
            </div>
          </div>
          <div className={DutyApplyCSS.formGroup}>
            <div className={DutyApplyCSS.formBox}>
              <label className={DutyApplyCSS.label}>목적지:</label>
              <input
                className={DutyApplyCSS.input}
                type="text"
                value={destination}
                onChange={handleDestinationChange}
              />
            </div>
          </div>
          <div className={DutyApplyCSS.formGroup}>
            <div className={DutyApplyCSS.formBox}>
              <label className={DutyApplyCSS.label}>신청사유:</label>
              <textarea
                className={DutyApplyCSS.textarea}
                rows="3"
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
            <p>종료일자: {endDate?.toLocaleDateString()}</p>
            <br />
            <p>기간: {calculateDuration()} 일</p>
            <br />
            <p>신청일자: {new Date().toLocaleDateString()}</p>
            <br />
            <p>목적지: {destination}</p>
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
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 4 }}>
          <VacationStatusArticle />
        </div>
      </div>
    </>
  );
}

export default VacationApply;
