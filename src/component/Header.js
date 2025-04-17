import { HD_URL } from "../utils/constants";

export const Header= () =>{
    return (
        <div className="header">
            <div className="logo-cont">
                <img className="logo" src={HD_URL}/>
            </div>
            <div className="nav">
                <ul>
                    <li>About</li>
                    <li>Home</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
