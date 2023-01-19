import "./Navbar.scss";
import {Link} from "react-router-dom";
import * as RiICon from 'react-icons/ri'
import {useState} from "react";
import Sidebar from "../../common/sidebar/Sidebar";

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
                        <RiICon.RiXingLine size={42}/>
                    </Link>
                    <div className="navbars-container__inputs">
                        <input type="text" placeholder="....."/>
                        <span>
              <RiICon.RiSearch2Line size={28}/>
            </span>
                    </div>
                    <span
                        className="navbars-container__icon"
                        onClick={() => setShow(!show)}
                    >
            <RiICon.RiMenu2Line size={32}/>
          </span>
                </div>
            </nav>
            <Sidebar show={show} setShow={setShow}/>
        </>
    );
};

export default Navbar;
