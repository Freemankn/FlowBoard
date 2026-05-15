import { Outlet } from "react-router-dom";
import OuterBox from "./OuterBox";
import TopBarLine from "./Topbar";
import SideBar from "./Sidebar";

function AppLayout () {
    return (
    <div>
    <OuterBox>
        <TopBarLine />
        <SideBar />

        <main className="page-content">
            <Outlet />
        </main>
    </OuterBox>
    </div>
   
    );
}

export default AppLayout;