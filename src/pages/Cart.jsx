import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} width="150" />
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default Cart;
