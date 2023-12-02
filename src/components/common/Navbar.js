import { Navigate, NavLink } from "react-router-dom";
import NavCSS from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                      src="./images/INSAGO.png"
                      alt=""
                      width={150}
                      height={55}
                    />
                  </NavLink>
                </div>
              </span>
            </div>

            <div className={NavCSS.lkOGXI}>
              <span
                className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}
              >
                <NavLink to="/">HOME</NavLink>
              </span>

              <span
                className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}
              >
                <NavLink to="/personnel">인사</NavLink>
              </span>

              <span
                className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}
              >
                <NavLink to="/duty">근무/휴가</NavLink>
              </span>

              <span
                className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}
              >
                <NavLink to="/salary/salinfo">급여</NavLink>
              </span>

              <span
                className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}
              >
                <NavLink to="/dailyWorker">일용직</NavLink>
              </span>
              <span
                className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}
              >
                <NavLink to="/task">업무</NavLink>
              </span>
              <span
                className={`${NavCSS.fEXmlR} ${NavCSS.kOVHNW} ${NavCSS.nav}`}
              >
                게시판
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
