import {NavLink, Outlet} from "react-router-dom";
import './noticeCSS/Notice.css'
function NoticeSidebar() {

    return (
        <>
            <div className="sc-gScZFl fhibIS">
                <div className="sc-iOeugr bYfCAz">
                    <div className="sc-cUEOzv vOjXz">
                        <div className="sc-cOxWqc fvSRZD">
                            {/*<a className="sc-bCfvAP hUZOlz" href="/company/info"></a>*/}
                            <NavLink className="sc-bCfvAP hUZOlz" to={"/notice"}>공지사항</NavLink>
                            <NavLink className="sc-bCfvAP hUZOlz" to={"detail"}>Test2</NavLink>
                            {/*<a className="sc-bCfvAP hUZOlz active" href="/company/notice" aria-current="page">자유 게시판</a>*/}
                        </div>
                    </div>
                </div>
                <Outlet/>

                <div id="DashboardLayout-footer" className="sc-oZIhv dyLAkK"></div>
            </div>
        </>
    )
}

export default NoticeSidebar;
