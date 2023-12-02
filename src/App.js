import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Layout from "./layouts/Layout";
import TaskSidebar from "./pages/task/TaskSidebar";
import ApprovalSubmit from "./pages/task/taskApproval/ApprovalSubmit";
import DutyMain from "./pages/duty/DutyMain";
import DutyStatus from "./pages/duty/article/DutyStatus";
import DutySetting from "./pages/duty/article/DutySetting";
import DutyApplyStatus from "./pages/duty/article/DutyApplyStatus";
import ScheduleManage from "./pages/duty/components/ScheduleManage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />

          <Route path="task" element={<TaskSidebar />}>
            <Route path="submit" element={<ApprovalSubmit />} />
          </Route>

          <Route path="duty" element={<DutyMain />}>
            <Route index element={<DutyStatus />} />
            <Route path="setting" element={<DutySetting />} />
            <Route path="dutyApplyStatus" element={<DutyApplyStatus />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
