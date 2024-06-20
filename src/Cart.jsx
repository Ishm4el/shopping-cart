import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const [total, userItems] = useOutletContext();

  return (
    <div id="cart-body">
      <span>Cart Body! </span>
      <span>HELLO {total}</span>
      <span>{JSON.stringify(userItems)}</span>
    </div>
  );
};

Cart.propTypes = {
  length: PropTypes.number,
};

Cart.defaultProps = {
  length: 0,
};

export default Cart;
