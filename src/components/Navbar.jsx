import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => props.setCurrentPath("/")}>
              Home Page
            </Link>
          </li>
          <li>
            <Link to="cart" onClick={() => props.setCurrentPath("cart")}>
              Shoping Cart {props.userItems}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  userItems: PropTypes.number,
  setCurrentPath: PropTypes.func,
};

export default Navbar;
