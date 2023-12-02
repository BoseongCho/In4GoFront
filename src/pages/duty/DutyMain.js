import { Outlet } from "react-router-dom";
import DutySidebar from "./DutySidebar";

function DutyMain() {
  return (
    <>
      <div>
        <DutySidebar />
      </div>
      <Outlet />
    </>
  );
}

export default DutyMain;
