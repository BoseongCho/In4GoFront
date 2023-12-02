import { NavLink } from "react-router-dom";
import Side from "../../components/common/Navbar.module.css";
import RegularDuty from "./sidebar/RegularDuty";
import SpecialDuty from "./sidebar/SpecialDuty";
import Vacation from "./sidebar/Vacation";
import AdditionalMenu from "./sidebar/AdditionalMenu";

function DutySidebar() {
  return (
    <>
      <div className={Side.cYDzyY}>
        <div className={Side.iLkxeQ}>
          <div className={Side.ecYrVX}>
            <div className={Side.pbheK}>
              <div style={{ fontSize: '25px', fontWeight: 'bold' }}>
                  <NavLink to="/duty">근무/휴가</NavLink>

                <hr style={{ marginTop: 30, marginBottom: 10 }} />
                <hr style={{ marginTop: 5 }} />

                <ul>
                  <li className={Side.fcngae} style={{ marginBottom: 40 }}>
                    <RegularDuty />
                  </li>
                  <li className={Side.fcngae} style={{ marginBottom: 40 }}>
                    <SpecialDuty />
                  </li>
                  <li className={Side.fcngae} style={{ marginBottom: 40 }}>
                    <Vacation />
                  </li>
                  <li className={Side.fcngae} style={{ marginBottom: 40 }}>
                    <AdditionalMenu />
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
