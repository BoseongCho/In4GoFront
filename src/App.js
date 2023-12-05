import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main";
import Layout from "./layouts/Layout";
import TaskSidebar from "./pages/task/TaskSidebar";
import ApprovalSubmit from "./pages/task/taskApproval/ApprovalSubmit";
import Login from "./pages/login/Login";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="task" element={<TaskSidebar/>}>
                        <Route path="submit" element={<ApprovalSubmit/>}/>
                    </Route>

                </Route>


                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
