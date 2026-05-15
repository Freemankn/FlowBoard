import {House} from "lucide-react";
import {Settings} from "lucide-react";
import {ChartColumnBig} from "lucide-react";
import {Pencil} from "lucide-react";
import {Siren} from "lucide-react";
import {ClockFading} from "lucide-react";
import {Clipboard} from "lucide-react";

function SideBar () {
    return ( 
        <header className="line2">

            <button className="HomeButton">
                <House size={70} />
            </button>

            <button className="SettingsButton">
                <Settings size={70} />
            </button>

            <button className="ChartButton">
                <ChartColumnBig size={70} />
            </button>

            <button className="PencilButton">
                <Pencil size={70} />
            </button>

            <button className="SirenButton">
                <Siren size={70} />
            </button>

            <button className="ClockButton">
                <ClockFading size={70} />
            </button>

            <button className="TasksButton">
                <Clipboard size={70} />
            </button>

        </header>

    );
}

export default SideBar;