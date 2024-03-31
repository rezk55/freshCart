import React from "react";
import partner1 from "../../assets/images/partners/amazonpay.svg";
import partner2 from "../../assets/images/partners/american-express.svg";
import partner3 from "../../assets/images/partners/mastercard.svg";
import partner4 from "../../assets/images/partners/paypal.svg";
import partner5 from "../../assets/images/partners/visa.svg";
import appstore from "../../assets/images/appstore-btn.svg";
import googleplay from "../../assets/images/googleplay-btn.svg";
import { Link } from "react-router-dom/dist";

export default function Footer() {
  return (
    <>
      <footer
        className="footer bg-main-light py-5 mt-5 overflow-hidden"
        id="footer"
      >
        <div className="container">
          <h5>Get the freshCart app</h5>
          <p className="text-muted">
            We will send you a link, open it on your phone to download the app
          </p>
          <form className="d-flex justify-content-between gap-4">
            <input
              className="form-control w-75  ms-4"
              type="email"
              name="email"
              placeholder="Email"
            />
            <button className="btn bg-main text-white w-25 ">
              Share App Link
            </button>
          </form>
          <div className="row mt-5 ms-3 justify-content-between">
            <div className="col-lg-5 ps-1">
              <div className="payment h-100 d-flex align-items-center">
                <h6 className="me-2 m-0 fw-bold">Payment Partners</h6>
                <div className="partners">
                  <ul className="list-unstyled m-0 d-flex gap-2">
                    <li>
                      <Link to="/">
                        <img src={partner1} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={partner2} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={partner3} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={partner4} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={partner5} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7 p-0">
              <div className="download-app">
                <div className="row align-items-center border">
                  <div className="col-md-7 p-0">
                    <h6 className="fw-bold ms-3 mt-3 m-lg-0  text-lg-end ">
                      Get deliveries with FreshCart
                    </h6>
                  </div>
                  <div className="col-md-5 ">
                    <ul className="links list-unstyled d-flex gap-2 m-0">
                      <li className="">
                        <Link className="" to="/">
                          <img className="w-100" src={appstore} />
                        </Link>
                      </li>
                      <li className="">
                        <Link className="" to="/">
                          <img className="w-100" src={googleplay} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
