import { Navigate, NavLink } from "react-router-dom";
import NavCSS from "./Navbar.module.css";
import Alarm from "../icon/Alarm";
import { useState } from "react";
import { decodeJwt } from "../../utils/tokenUtils";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { callLogoutAPI } from "../../apis/MemberAPICalls";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = window.localStorage.getItem("accessToken");

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem("accessToken");

        dispatch(callLogoutAPI());
        alert("로그아웃 됩니다.");
        navigate("/", { replace: true });
        window.location.reload();
    };

    function BeforeLogin() {
        return (
            <div>
                <NavLink to="/login" className={`${NavCSS.kOVHNW}`}>
                    로그인
                </NavLink>
            </div>
        );
    }

    function AfterLogin() {
        return (
            <div className={NavCSS.cAnmmb}>
                <div className={NavCSS.ePumqH}>
          <span className={NavCSS.fcykKi}>
            <button
                data-active="false"
                className={`${NavCSS.bfYjzh} ${NavCSS.kyAoKz} ${NavCSS.gmZOLP} ${NavCSS.ieRdlXN}`}
            >
              <Alarm />
            </button>
          </span>
                    <span className={NavCSS.fcykKi}>
            <span className={`${NavCSS.bfYjzh} ${NavCSS.kyAoKz}`}>
              <div className={NavCSS.kGKtTY}>
                <div width={38} height={38} className={NavCSS.kXwhM}>
                  <div width={38} height={38} className={NavCSS.kSBOsp}>
                    <div
                        src="https://api.wantedspace.ai/user/users/59249/serve_image/"
                        width={38}
                        height={38}
                        className={NavCSS.gTMCwH}
                    >
                      성
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </span>
                    <div style={{ padding: "10px" }}>
                        <button onClick={onClickLogoutHandler}>로그아웃</button>
                    </div>
                </div>
            </div>
        );
    }


  return (
    <>
      <div className={NavCSS.bwzYVU}>
        <div className={NavCSS.bReTMH}>
          <div className={NavCSS.cAnmmb}>
            <div className={NavCSS.jqVsbC}>
              <span>
                <div style={{ width: "128px", height: "50px" }}>
                  <NavLink to="/">
                    <img
                      src={process.env.PUBLIC_URL+ "/images/INSAGO.png"}
                      alt=""
                      width={150}
                      height={70}
                    />
                  </NavLink>
                </div>
              </span>
            </div>
            <div className={NavCSS.lkOGXI}>
              <span className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}>
              <NavLink to="/">HOME</NavLink>
              </span>
              <span className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}>
                <NavLink to="/personnel">인사</NavLink>
                 </span>

              <span
                className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}
              >
                <NavLink to="/duty">근무/휴가</NavLink>
              </span>

              <span className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}>
                <NavLink to="/task">업무</NavLink>
              </span>
              <span className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}>
                <NavLink to="/notice">게시판</NavLink>
              </span>
            </div>
          </div>
          {isLogin == null || isLogin === undefined ? (
            <BeforeLogin />
          ) : (
            <AfterLogin />
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
