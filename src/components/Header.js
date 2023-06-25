import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState(btnName);
  return (
    <div className="header">
      <div className="logo-header">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Home</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
// export { Header };
export default Header;
