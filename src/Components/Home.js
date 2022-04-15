import React from "react";
import { useState } from "react";
import "./Home.css";
import Cardinput from "./Cardinput";
import DisplayCard from "./DisplayCard";


export default function Home() {

  const [cardData, setCardData] = useState([]);
  const [cardDetails, setCardDetails] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const callBackFunction = (id) => {
    setCardData(() => {
      return cardData.filter((el, ind) => {
        return ind !== id;
      });
    });
  };

  const handlePay = () => {
    setCardData([...cardData, cardDetails]);
  };

  return (
    <div className="main_contianer">
      <div className="left_section">
        <div className="company_name">
        <div className="span_wallet">
            <img className="logo1" src="https://media-exp1.licdn.com/dms/image/C4E0BAQFBBYfX4esDqw/company-logo_200_200/0/1640016792293?e=2147483647&v=beta&t=xSpfypINcXgOtrOULsWwZe2DeeX9BC5XEuU4Iv_spxc" alt="logo" />
          </div>
          <div className="pay_name">Dhwani IRS</div>
        </div>
        <div className="card_number">
          <div className="text_card_number">
            <span className="span1">Card Number*</span>
          </div>
        </div>
        <div className="card_digit">
          <Cardinput
            setCardDetails={setCardDetails}
            cardDetails={cardDetails}
          />
        </div>
        <div className="button">
          <button className="pay_button" onClick={handlePay}>
            Pay Now
          </button>
        </div>
      </div>
      <div className="right_section">
        <h1>Card Details</h1>
        <div className="right_box">
          <ol>
            {cardData.map((el, ind) => {
              return (
                <div key={ind}>
                  <li>
                    <DisplayCard
                      cardData={el}
                      ind={ind}
                      callBackFunction={callBackFunction}
                    />
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}