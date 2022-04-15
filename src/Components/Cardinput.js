import React from "react";
import "./Cardinput.css";


export default function Cardinput(props) {
  const handleEnter = (event) => {
    const { value, name } = event.target;
    props.setCardDetails({
      ...props.cardDetails,
      [name]: value,
    });
    if (event.target.value.length >= 4) {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
    const f = event.target.form;

    const index = [...f].indexOf(event.target);
    if (index >= 1 && event.target.value === "") {
      const form = event.target.form;
      form.elements[index - 1].focus();
      console.log("index");
      event.preventDefault();
    }
  };
  return (
    <form className="main">
      <input
        onChange={handleEnter}
        maxLength="4"
        name="first"
      />
      <input
        onChange={handleEnter}
        maxLength="4"
        name="second"
      />
      <input
        onChange={handleEnter}
        maxLength="4"
        name="third"
      />
      <input
        onChange={handleEnter}
        maxLength="4"
        name="fourth"
      />
      
    </form>
  );
}
