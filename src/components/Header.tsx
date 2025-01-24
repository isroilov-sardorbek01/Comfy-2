import { FC } from "react";
import { NavLink } from "react-router-dom";
import imgCArt from "../images/cartImg.svg";

const Header: FC = () => {
    return (
        <div className="header">
            <div className="container head-container">
                <div className="bg-[#057AFF] p-[10px] w-[150p] head-h">C</div>
                <ul className="headLinks">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                        to="/"
                    >
                        Products
                    </NavLink>
                </ul>
                <div className="">
                    <img src={imgCArt} width={25} height={25} alt="Img" />
                    <h1 className=""></h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
