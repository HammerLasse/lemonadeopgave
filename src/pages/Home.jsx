import { useDispatch, useSelector } from "react-redux";
import { buyLemons, sellLemonade } from "../redux/profitSlice";

function Home() {
  const profit = useSelector((state) => state.profit.value);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Lemonade Butik</h1>
      <h2>Penge tjent: {profit}kr</h2>
      <button onClick={() => dispatch(sellLemonade())}>
        Sælg Lemonade +5kr
      </button>
      <button onClick={() => dispatch(buyLemons())}>Køb citroner -2kr</button>
    </main>
  );
}
export default Home;
