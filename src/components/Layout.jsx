import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">Hjem</NavLink>
        {" | "}
        <NavLink to="/shop">Butikken</NavLink>
        {" | "}
        <NavLink to="/cart">Kurv</NavLink>
        {" | "}
        <NavLink to="/checkout">Tjek ud</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
