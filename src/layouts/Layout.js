import {Outlet} from "react-router-dom";
import Navbar from "../components/common/Navbar";
import LayoutCSS from "../components/common/Navbar.module.css";

function Layout() {
    return (
        <>
            <div style={{ display: "block" }} className={LayoutCSS.mSgFN}>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout;