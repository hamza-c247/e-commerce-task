import React from "react";
import { Link } from "react-router-dom"

function Offer() {
  return (
    <>
      <section className="sale-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6 sale-wrapper">
              <Link to="">
                <img src="/assets/images/products/sale1.webp" alt="" />
              </Link>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6 sale-wrapper">
              <Link to="">
                <img src="/assets/images/products/sale2.webp" alt="" />
              </Link>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6 sale-wrapper">
              <Link to="">
                <img src="/assets/images/products/sale2.jpg" alt="" />
              </Link>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-6 sale-wrapper">
              <Link to="">
                <img src="/assets/images/products/sale4.webp" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offer;
