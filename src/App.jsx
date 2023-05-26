import "./App.css";
import ace from "./assets/ace.png";
import card from "./assets/card.png";
import mastercard from "./assets/mastercard.png";
import check from "./assets/check.png";
import { MdModeEdit } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import { BiBookmarkAltMinus } from "react-icons/BI";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [value, setValue] = useState("");
  const [cvv, setCvv] = useState("327");
  const [day, setDay] = useState("22");
  const [month, setMonth] = useState("09");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setDisabled(true);
    console.log("submit handled");
    if (value.length !== 16) {
      toast.error("Card digit must be 16");
      setLoading(false);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        toast.success("Payment succefully sent");
      }, 3000);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
    if (numericValue.length === 16) {
      setShowCheck(true);
    } else {
      setShowCheck(false)
    }

    setValue(numericValue);
  };

  const handleCvvChange = (event) => {
    const cvvValue = event.target.value;
    const numericValue = cvvValue.replace(/\D/g, ""); // Remove non-numeric characters

    setCvv(numericValue);
  };
  const handleDayChange = (event) => {
    const dayValue = event.target.value;
    const numericValue = dayValue.replace(/\D/g, ""); // Remove non-numeric characters

    setDay(numericValue);
  };
  const handleMonthChange = (event) => {
    const monthValue = event.target.value;
    const numericValue = monthValue.replace(/\D/g, ""); // Remove non-numeric characters

    setMonth(numericValue);
  };
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    const numericValue = passwordValue.replace(/\D/g, ""); // Remove non-numeric characters

    setPassword(numericValue);
  };
  return (
    <section className="bg-main">
      <ToastContainer />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 mt-4" style={{ background: "#FEFEFE" }}>
            <div className="row m-4">
              <div className="col-md-8">
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={ace} alt="ace" className="img-fluid" />
                  </div>
                  <div>
                    <span className="number">0</span>
                    <span className="number">1</span>
                    <span className="dot">:</span>
                    <span className="number">1</span>
                    <span className="number">9</span>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mt-5 d-flex justify-content-between">
                    <div>
                      <h6>Card Number</h6>
                      <p>Enter the 16-digit card number on the card</p>
                    </div>
                    <div className="edit">
                      <MdModeEdit /> <span>Edit</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        placeholder="2412   -   7512  -  3412  -  3456"
                        value={value}
                        onChange={handleInputChange}
                        maxLength={16}
                        required
                      />
                      <div className="input-img">
                        <div>
                          <img
                            src={mastercard}
                            alt="mastercard"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          {showCheck && (
                            <img
                              src={check}
                              alt="check"
                              className="img-fluid"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mt-4">
                      <h6>CVV Number</h6>
                      <p>Enter the 3 or 4 digit number on the card</p>
                    </div>
                    <div className="col-md-6 mt-4">
                      <input
                        type="text"
                        value={cvv}
                        onChange={handleCvvChange}
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mt-4">
                      <h6>Expiry Date</h6>
                      <p>Enter the expiration date of the card</p>
                    </div>
                    <div className="col mt-4">
                      <input
                        type="text"
                        value={month}
                        onChange={handleMonthChange}
                        maxLength={2}
                        required
                      />
                    </div>
                    <div className="col mt-4">
                      <input
                        type="text"
                        value={day}
                        onChange={handleDayChange}
                        maxLength={2}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mt-4">
                      <h6>Password</h6>
                      <p>Enter your dynamic password</p>
                    </div>
                    <div className="col-md-6 mt-4">
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                  </div>
                  <button className="mt-4" type="submit" disabled={disabled}>
                    {loading ? (
                      <div
                        className="spinner-border text-light"
                        role="status"
                        style={{
                          width: "20px",
                          height: "20px",
                          fontSize: "10px",
                        }}
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </form>
              </div>

              <div className="col-md-4">
                <div className="d-flex justify-content-center">
                  <div className="top"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <img src={card} alt="card" className="img-fluid" />
                </div>
                <div className="main mx-3">
                  <div className="col d-flex justify-content-between mx-4">
                    <p className="name">Company</p>
                    <p className="value">
                      <BsApple className="apple" /> Apple
                    </p>
                  </div>
                  <div className="col d-flex justify-content-between mx-4">
                    <p className="name">Order Number</p>
                    <p className="value">1266201</p>
                  </div>
                  <div className="col d-flex justify-content-between mx-4">
                    <p className="name">Product</p>
                    <p className="value">MacBook Air</p>
                  </div>
                  <div className="col d-flex justify-content-between mx-4 pb-4">
                    <p className="name">VAT(20%)</p>
                    <p className="value">$100.00</p>
                  </div>
                  <div className="line mx-4"></div>
                  <div className="col d-flex justify-content-between mx-4 py-3">
                    <div>
                      <p className="name">You have to Pay</p>
                      <h5 className="price">
                        <span className="big">549</span>
                        <span className="mid">.99</span> USD
                      </h5>
                    </div>
                    <p className="value">
                      <BiBookmarkAltMinus className="h4" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
