import { NavLink } from "react-router-dom";
import Side from "../../components/common/Navbar.module.css";
import ManagerMenu from "./sidebar/ManagerMenu";
import ApplyMenu from "./sidebar/ApplyMenu";
import StatusMenu from "./sidebar/StatusMenu";

function DutySidebar() {
  return (
    <>
      <div className={Side.cYDzyY}>
        <div className={Side.iLkxeQ}>
          <div className={Side.ecYrVX}>
            <div className={Side.pbheK}>
              <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                <div style={{ marginTop: 20, marginBottom: 40 }}>
                <NavLink to="/duty">근무/휴가</NavLink>
                </div>
                <hr />
                <ul>
                  <li className={Side.fcngae}>

                  </li>
                  <br />
                  <li className={Side.fcngae} style={{ marginBottom: 40 }}>
                    <StatusMenu />
                  </li>
                  <li className={Side.fcngae} style={{ marginBottom: 40 }}>
                    <ApplyMenu />
                  </li>
                  <li className={Side.fcngae} style={{ marginBottom: 40 }}>
                    <ManagerMenu />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DutySidebar;

<div className={Side.pbheK}>
  <div className={Side.ebDIkT}>
    <span className={Side["material-icons"]}>arrow_back</span>
  </div>
</div>;
