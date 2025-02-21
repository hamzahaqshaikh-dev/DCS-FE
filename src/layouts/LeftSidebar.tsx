import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

import { getMenuItems } from "@/helpers/menu";

// components
import AppMenu from "./Menu";

import profileImg from "@/assets/dsc-images/sidebar-profile-image.png";
// import logoSm from "@/assets/images/logo-sm.png";
// import logoDark from "@/assets/images/logo-dark.png";
import logoDark from "@/assets/dsc-images/sidebar-logo.png";
import logoSm from "@/assets/dsc-images/footer-logo.png";
import logoLight from "@/assets/images/logo-light.png";
import logoLight2 from "@/assets/images/logo-light-2.png";

import { FiUser, FiSettings, FiLock, FiLogOut } from "react-icons/fi"
import { useLayoutContext } from "@/context/useLayoutContext";

/* user box */
const UserBox = () => {
    // get the profilemenu
    const ProfileMenus = [
        {
            label: "My Account",
            icon: FiUser,
            redirectTo: "#",
        },
        {
            label: "Settings",
            icon: FiSettings,
            redirectTo: "#",
        },
        {
            label: "Lock Screen",
            icon: FiLock,
            redirectTo: "/auth/lock-screen",
        },
        {
            label: "Logout",
            icon: FiLogOut,
            redirectTo: "/auth/logout",
        },
    ];

    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    /*
     * toggle dropdown
     */
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="user-box text-center d-flex justify-content-start mt-5">
            <img
                src={profileImg}
                alt=""
                title="Mat Helme"
                className="rounded-circle avatar-md"
            />
            <div className="flex-grow-1 d-flex flex-column justify-content-center ms-2">
                <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
                    <Dropdown.Toggle
                        id="dropdown-notification"
                        as="a"
                        onClick={toggleDropdown}
                        className="cursor-pointer text-white h5 mt-0 mb-0 d-block text-start text-uppercase"
                    >
                        Ali khalid
                    </Dropdown.Toggle>
                    {/* <Dropdown.Menu className="user-pro-dropdown">
                    <div onClick={toggleDropdown}>
                        {(ProfileMenus || []).map((item, index) => {
                            return (
                                <Link
                                    to={item.redirectTo}
                                    className="dropdown-item notify-item"
                                    key={index + "-profile-menu"}
                                >
                                    <i className={`${item.icon} me-1`}></i>
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </Dropdown.Menu> */}
                </Dropdown>
                <p className="text-muted text-start m-0 light-green">Partner</p>
            </div>
        </div>
    );
};

/* sidebar content */
const SideBarContent = () => {
    return (
        <>

            {/* <div id="sidebar-menu"> */}
            <AppMenu menuItems={getMenuItems()} />
            {/* </div> */}

            <UserBox />
            <div className="clearfix" />
        </>
    );
};

interface LeftSidebarProps {
    isCondensed: boolean;
    hideLogo?: boolean;
}

const LeftSidebar = ({ isCondensed, hideLogo }: LeftSidebarProps) => {
    const menuNodeRef: any = useRef(null);

    const { orientation } = useLayoutContext();

    /**
     * Handle the click anywhere in doc
     */
    const handleOtherClick = (e: any) => {
        if (
            menuNodeRef &&
            menuNodeRef.current &&
            menuNodeRef.current.contains(e.target)
        )
            return;
        // else hide the menubar
        if (document.body) {
            document.body.classList.remove("sidebar-enable");
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOtherClick, false);

        return () => {
            document.removeEventListener("mousedown", handleOtherClick, false);
        };
    }, []);

    return (
        <React.Fragment>
            <div className="app-menu" ref={menuNodeRef}>
                {!hideLogo && (
                    <div className="logo-box">
                        <Link to="/" className="logo logo-dark text-center">
                            <span className="logo-sm">
                                <img src={logoSm} alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img
                                    src={
                                        orientation === 'two-column'
                                            ? logoDark2
                                            : logoDark
                                    }
                                    alt=""
                                    height="80"
                                />
                            </span>
                        </Link>
                        <Link to="/" className="logo logo-light text-center">
                            <span className="logo-sm">
                                <img src={logoSm} alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img
                                    src={
                                        orientation === 'two-column'
                                            ? logoLight2
                                            : logoLight
                                    }
                                    alt=""
                                    height="20"
                                />
                            </span>
                        </Link>
                    </div>
                )}

                {!isCondensed && (
                    <SimpleBar className="scrollbar show h-100" scrollbarMaxSize={320}>
                        <SideBarContent />
                    </SimpleBar>
                )}
                {isCondensed && <SideBarContent />}
            </div>
        </React.Fragment>
    );
};

LeftSidebar.defaultProps = {
    isCondensed: false,
};

export default LeftSidebar;
