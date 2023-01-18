import "./Navbar.scss";
import { Link } from "react-router-dom";
import * as RiICon from 'react-icons/ri'
import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [color, setColor] = useState(false);

    const changeBgcolor = () => {
        if (window.scrollY >= 80) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeBgcolor);

    return (
        <>
            <nav className={color ? "navbars nav-scroll" : "navbars"}>
                <div className="navbars-container container-fluid">
                    <Link to={"/"} className="navbars-container__logo">
                        <RiICon.RiXingLine size={42} />
                    </Link>
                    <div className="navbars-container__inputs">
                        <input type="text" placeholder="....." />
                        <span>
              <RiICon.RiSearch2Line size={28} />
            </span>
                    </div>
                    <span
                        className="navbars-container__icon"
                        onClick={() => setShow(!show)}
                    >
            <RiICon.RiMenu2Line size={32} />
          </span>
                </div>
                <div className={show ? "sidebar sidebar-active" : "sidebar"} dir="rtl">
                    <div className="sidebar-item">
                        <div
                            className="sidebar-item__icon  "
                            onClick={() => setShow(!show)}
                        >
                            <RiICon.RiCloseLine size={20} />
                        </div>
                        <li className="sidebar-item__lists">
                            <Link to={"/"} className="sidebar-item__lists-route">
                                <RiICon.RiHome2Line size={32} />
                                <span className="sidebar-item__lists-route__txt">
                  صفحه اصلی
                </span>
                            </Link>
                        </li>
                        
                        <li className="sidebar-item__lists">
                            <Link to={"/songs"} className="sidebar-item__lists-route">
                                <RiICon.RiSpeakerLine size={32} />
                                <span className="sidebar-item__lists-route__txt">
                  لیست پخش
                </span>
                            </Link>
                        </li>
                        <li className="sidebar-item__lists">
                            <Link to={"/fav"} className="sidebar-item__lists-route">
                                <RiICon.RiHeart3Line size={32} />
                                <span className="sidebar-item__lists-route__txt">
                  موردعلاقه
                </span>
                            </Link>
                        </li>
                        <li className="sidebar-item__lists">
                            <Link to={"/auth"} className="sidebar-item__lists-route">
                                <RiICon.RiLogoutBoxLine size={32} />
                                <span className="sidebar-item__lists-route__txt">کاربر</span>
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
