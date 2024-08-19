
import { Outlet } from "react-router-dom";
import { BrowserBar } from "../Components/BrowserBar";
import { useEffect } from "react";
import '../Styles/CorePage.css';
import { DevilFruitProvider } from "../Context/DevilFruitContext";

export const CorePage= () => {
    useEffect(() => {
        document.body.style.background = "inherit";
        document.body.style.display = "inherit";
        document.body.style.justifyContent = "inherit"
        document.body.style.alignItems = "inherit";
        document.body.style.minWidth = "inherit";
        document.body.style.minHeight = "inherit";
        document.body.style.backgroundSize = "inherit";
        document.body.style.backgroundPosition = "inherit";
        return () => {
            document.body.style.background = "";
            document.body.style.display = "";
            document.body.style.justifyContent = ""
            document.body.style.alignItems = "";
            document.body.style.minWidth = "";
            document.body.style.minHeight = "";
            document.body.style.backgroundSize = "";
            document.body.style.backgroundPosition = "";
        };
      }, []);
    return <>
    <DevilFruitProvider>
        <BrowserBar/>
        <Outlet/>
    </DevilFruitProvider>
    </>;
};