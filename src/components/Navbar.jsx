import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <nav>
        <ul>
          <li>
            <a href="">Store Home</a>
          </li>
          <li>
            <a href="">Shoping Cart {props.userItems}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  userItems: PropTypes.number,
};

export default Navbar;
