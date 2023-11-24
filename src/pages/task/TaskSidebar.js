import {NavLink, Outlet} from "react-router-dom";
import Side from "../../components/common/Navbar.module.css";
import SlideToggle from "./components/SlideToggle";
import './taskCSS/Content.module.css';
function TaskSidebar() {

    return (
        <>
            <div className={Side.cYDzyY}>
                <div className={Side.iLkxeQ}>
                    <div className={Side.ecYrVX}>
                        <div className={Side.pbheK}>
                            <h1>업무관리</h1>
                            <hr style={{marginTop: 5}}/>
                            <div style={{fontSize: 17, fontWeight: 'bold'}}>나의 팀</div>
                            <div style={{fontSize: 15, marginTop: 5}}>+ 팀원추가</div>
                            <ul>
                                <li><NavLink to="management">조성일</NavLink></li>
                            </ul>

                            <hr style={{ marginTop: 30, marginBottom: 10 }} /><hr style={{ marginTop: 5 }} />
                            <h1>전자결재</h1>
                            <ul>
                                <li className={Side.fcngae}><NavLink to="submit">상신함</NavLink></li>
                                <li className={Side.fcngae}><SlideToggle /></li>
                                <li className={Side.fcngae}><NavLink to="bookMark">북마크</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default TaskSidebar;