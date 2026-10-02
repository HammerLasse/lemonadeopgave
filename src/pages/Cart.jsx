import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Kurc</h1>

      {items.length === 0 ? (
        <p>Din kurv er tom.</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} width="150" />
            <p>Antal: {item.quantity}</p>
            <button onClick={() => dispatch(removeItem(item.id))}>
              Fjern denne vare
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default Cart;
