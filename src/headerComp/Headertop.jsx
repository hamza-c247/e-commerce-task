import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Mymodal from "./Mymodal";

function Headertop() {
  const state = useSelector((state) => state.handleCart);

  const [modalShow, setModalShow] = React.useState(false);

  const [cartCount, setcartCount] = useState();
  useEffect(() => {
    let count = 0;
    state.forEach((item) => {
      count += item.qty;
    });
    setcartCount(count);
  }, [state, cartCount]);
  return (
    <>
      <div className=" top-container">
        <div className=" d-flex header-top">
          <Link className="remove-headertop-icons-set1">
            
            book my appointment!
          </Link>
          <Link className="remove-headertop-icons-set2" to="">
            call
            <img
              className="navbar-icons"
              src="/assets/images/logo/support.png"
              alt=""
            />
            +91-999-222-22
          </Link>

          <div>
            <Link
              className="remove-headertop-icons-set1"
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              <img
                className="navbar-icons"
                src="/assets/images/logo/user.png"
                alt=""
              />
              LOGIN
            </Link>

            <Mymodal show={modalShow} onHide={() => setModalShow(false)} />

            <Link className="remove-headertop-icons-set1" to="">
              <img
                className="navbar-icons"
                src="/assets/images/logo/search-interface-symbol.png"
                alt=""
              />
              SEARCH
            </Link>

            <NavLink className="remove-headertop-icons-set1" to="/mycart">
              <img
                className="navbar-icons"
                src="/assets/images/logo/shopping-cart.png"
                alt=""
              />
              CART<span className="items-in-cart">{state.length}</span>
            </NavLink>
            <Link className="remove-headertop-icons-set2" to="">
              <img
                className="navbar-icons"
                src="/assets/images/logo/log-in.png"
              />
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Headertop;
