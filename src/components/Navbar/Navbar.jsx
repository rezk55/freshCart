import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/freshcart-logo.svg";
import { NavLink } from "react-router-dom";
import { Cartcontext } from "../../context/cartContext";

export default function Navbar() {
  const { counter, setCounter, getCart } = useContext(Cartcontext);
  const { counterWish, setCounterWish, getWishList } = useContext(Cartcontext);

  useEffect(() => {
    (async () => {
      const dataCart = await getCart();
      if ((dataCart.status = "success")) {
        setCounter(dataCart.numOfCartItems);
      }
      const dataWish = await getWishList();
      if (dataWish.status == "success") {
        setCounterWish(dataWish.count);
      }
    })();
  }, []);

  const clearLogin = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top pt-3">
        <div className="container-fluid mx-3">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/categories">
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/brands">
                  Brands
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <NavLink
                  className="nav-link position-relative"
                  aria-current="page"
                  to="/cart"
                >
                  <i className="fa-solid fa-cart-shopping ms-2" />
                  {counter ? (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {counter}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  ) : (
                    ""
                  )}
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link position-relative"
                  aria-current="page"
                  to="/wishlist"
                >
                  <i className="fa-solid fa-heart ms-2"></i>
                  {counterWish ? (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {counterWish}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  ) : (
                    ""
                  )}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={clearLogin}
                  className="nav-link position-relative"
                  aria-current="page"
                  to="/signIn"
                >
                  Sign Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
