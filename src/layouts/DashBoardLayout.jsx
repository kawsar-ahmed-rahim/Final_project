import { Navigate,Outlet } from "react-router";
import SideBar from '../partials/SideBar';
import NavBar from '../partials/NavBar';
import { useState } from "react";

const DashBoardLayout = () => {
    const token = localStorage.getItem("token");
    if (!token) return <Navigate to={"/login/"} />;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isNavOpen,setIsNavOpen] = useState(true);

    const handleNavOpen = () =>{
        setIsNavOpen(!isNavOpen);
    }
    return (
    <div>
        <NavBar navOpenHandler={handleNavOpen}/>
        <div id="sideNavRef" className={isNavOpen ? "side-nav-open" : "side-nav-close"}>
            <SideBar/>
        </div>
        <div id="contentRef" className={isNavOpen ? "content" : "content-expand"}>
            <Outlet/>
        </div>
    </div>
    );
};

export default DashBoardLayout;