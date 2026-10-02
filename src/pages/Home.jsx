import { useDispatch, useSelector } from "react-redux";
import { buyLemons, sellLemonade } from "../redux/profitSlice";

function Home() {
  const profit = useSelector((state) => state.profit.value);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Lemonade Stand</h1>
      <h2>Profit: ${profit}</h2>
      <button onClick={() => dispatch(sellLemonade())}>
        Sell Lemonade +$5
      </button>
      <button onClick={() => dispatch(buyLemons())}>Buy Lemons -$2</button>
    </main>
  );
}
export default Home;
