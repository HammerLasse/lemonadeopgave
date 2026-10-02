import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function Shop() {
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon")
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.drinks);
      });
  }, []);

  return (
    <div>
      <h1>Shop</h1>

      {drinks.map((drink) => (
        <div key={drink.idDrink}>
          <h2>{drink.strDrink}</h2>

          <img src={drink.strDrinkThumb} alt={drink.strDrink} width="200" />

          <button
            onClick={() =>
              dispatch(
                addItem({
                  id: drink.idDrink,
                  name: drink.strDrink,
                  image: drink.strDrinkThumb,
                }),
              )
            }
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
