import configureStore from "../../store";
import { addToCart } from "../../store/cart";
import { useDispatch } from "react-redux";


function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();


  function clickHandler(e) {
    dispatch(addToCart(produce.id))
    console.log('added to cart', produce.id)
  }

    return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button onClick={clickHandler}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;