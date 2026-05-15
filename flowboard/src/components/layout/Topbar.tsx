import {Bell} from "lucide-react";
import {UserRound} from "lucide-react";
import {Menu} from "lucide-react";

type TopBarLineProps = {
  children: React.ReactNode;
};


function TopBarLine({children}: TopBarLineProps) {
    return (
        <header className="line">
            {children}

            <button className="UserButton">
                <UserRound size={40} />
            </button>

            <button className="NotiButton">
                <Bell size={40} />
            </button>

            <button className="MenuButton">
                <Menu size={40} />
            </button>
            
        </header>

    );
}

export default TopBarLine;