import React from "react";
import "./DisplayCard.css";

function DisplayCard(props) {

  const cardNumber =
    props.cardData.first +
    "-" +
    props.cardData.second +
    "-" +
    props.cardData.third +
    "-" +
    props.cardData.fourth;


  return (
    <div className="super_container">
      <div className="main_container">
        <div className="left_side">{cardNumber}</div>
        <div className="right_side">
          <i
            className="bi bi-trash-fill"
            onClick={() => props.callBackFunction(props.ind)}
          ></i>
        </div>
      </div>
    </div>
  );
}


export default DisplayCard;
