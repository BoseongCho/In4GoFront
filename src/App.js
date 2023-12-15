import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Layout from "./layouts/Layout";
import TaskSidebar from "./pages/task/TaskSidebar";
import ApprovalSubmit from "./pages/task/taskApproval/ApprovalSubmit";
import Login from "./pages/login/Login";
import DutyMain from "./pages/duty/DutyMain";
import DutyStatus from "./pages/duty/DutyStatus";
import ApplyStatus from "./pages/duty/ApplyStatus";
import AttendanceCalendar from "./pages/duty/AttendanceCalendar";
import DepartmentScheduleCheck from "./pages/duty/DepartmentScheduleCheck";
import DutyManage from "./pages/duty/DutyManage";
import SpecialDutyApply from "./pages/duty/SpecialDutyApply";
import VacationApply from "./pages/duty/VacationApply";
import ScheduleManage from "./pages/duty/components/ScheduleManage";
import ApprovalApprover from "./pages/task/taskApproval/ApprovalApprover";
import ApprovalBookmark from "./pages/task/taskApproval/ApprovalBookmark";
import ApprovalReferred from "./pages/task/taskApproval/ApprovalReferred";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />

          <Route path="task" element={<TaskSidebar />}>
            <Route index element={<ApprovalSubmit />} />
            <Route index path="submit" element={<ApprovalSubmit />} />
            <Route path="approver" element={<ApprovalApprover />} />
            <Route path="bookMark" element={<ApprovalBookmark />} />
            <Route path="referred" element={<ApprovalReferred />} />
          </Route>

          <Route path="duty" element={<DutyMain />}>
            <Route index element={<DutyStatus />} />
            <Route path="DutyManage" element={<DutyManage />} />
            <Route path="SpecialDutyApply" element={<SpecialDutyApply />} />
            <Route path="VacationApply" element={<VacationApply />} />
            <Route path="DVApplyStatus" element={<ApplyStatus />} />
            <Route path="AttendanceCalendar" element={<AttendanceCalendar />} />
            <Route path="DepartmentScheduleCheck" element={<DepartmentScheduleCheck />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
