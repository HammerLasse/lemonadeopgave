import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCheckout() {
    dispatch(clearCart());
    navigate("/");
  }
  return (
    <div>
      <h1>Tjek ud</h1>
      {items.length === 0 ? (
        <p>Du har intet at tjekke ud.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>Antal: {item.quantity}</p>
            </div>
          ))}
          <button onClick={handleCheckout}>Tjek ud</button>
        </>
      )}
    </div>
  );
}
export default Checkout;
