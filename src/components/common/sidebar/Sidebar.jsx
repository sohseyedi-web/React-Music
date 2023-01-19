import './Sidebar.scss'
import * as RiICon from "react-icons/ri";
import {Link} from "react-router-dom";
import Back from "../back/Back";

function Sidebar({show , setShow}) {
    return (
        <>
            <Back open={show} setOpen={setShow}/>
            <div className={show ? "sidebar sidebar-active" : "sidebar"} dir="rtl">
                <div className="sidebar-item">
                    <div
                        className="sidebar-item__icon  "
                        onClick={() => setShow(!show)}
                    >
                        <RiICon.RiCloseLine size={20}/>
                    </div>
                    <li className="sidebar-item__lists">
                        <Link to={"/"} className="sidebar-item__lists-route">
                            <RiICon.RiHome2Line size={32}/>
                            <span className="sidebar-item__lists-route__txt">
                  صفحه اصلی
                </span>
                        </Link>
                    </li>

                    <li className="sidebar-item__lists">
                        <Link to={"/songs"} className="sidebar-item__lists-route">
                            <RiICon.RiSpeakerLine size={32}/>
                            <span className="sidebar-item__lists-route__txt">
                  لیست پخش
                </span>
                        </Link>
                    </li>
                    <li className="sidebar-item__lists">
                        <Link to={"/fav"} className="sidebar-item__lists-route">
                            <RiICon.RiHeart3Line size={32}/>
                            <span className="sidebar-item__lists-route__txt">
                  موردعلاقه
                </span>
                        </Link>
                    </li>
                    <li className="sidebar-item__lists">
                        <Link to={"/auth"} className="sidebar-item__lists-route">
                            <RiICon.RiLogoutBoxLine size={32}/>
                            <span className="sidebar-item__lists-route__txt">کاربر</span>
                        </Link>
                    </li>
                </div>
            </div>
        </>
    );
}

export default Sidebar;