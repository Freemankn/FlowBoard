import HomePage from "./pages/Homepage";
import OuterBox from "./components/layout/AppLayout";
import TopBarLine from "./components/layout/Topbar";
import SideBar from "./components/layout/Sidebar";

function App () {
  return (
    <div>
      <HomePage />
      <OuterBox />
      <TopBarLine />
      <SideBar />
    </div>

  );
  
}




export default App;