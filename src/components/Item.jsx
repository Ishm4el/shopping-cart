import PropTypes from "prop-types";
const Item = (props) => {
  return (
    <div className="item-card">
      <h2>{props.name}</h2>
      <button
        type="button"
        onClick={() =>
          props.handlerAddItem({ price: 100, id: crypto.randomUUID() })
        }
      >
        Add to cart
      </button>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  handlerAddItem: PropTypes.func,
};

Item.defaultProps = {
  name: "Error",
};

export default Item;
