import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {" | "}
        <NavLink to="/shop">Shop</NavLink>
        {" | "}
        <NavLink to="/cart">Cart</NavLink>
        {" | "}
        <NavLink to="/checkout">Checkout</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
