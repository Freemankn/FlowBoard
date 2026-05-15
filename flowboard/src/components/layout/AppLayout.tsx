import { Outlet } from "react-router-dom";
import OuterBox from "./OuterBox";
import TopBarLine from "./Topbar";
import SideBar from "./SideBar";

function AppLayout () {
    return (
    <div>
        <OuterBox>
            <TopBarLine>
                <h1 className="title">FlowBoard</h1>
            </TopBarLine>
            <SideBar />

            <main className="page-content">
                <Outlet />
            </main>
        </OuterBox>
    </div>
   
    );
}

export default AppLayout;