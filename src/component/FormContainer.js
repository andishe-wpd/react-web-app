import React, { useState } from "react";
import "./FormContainer.css";

const FormContainer = (props) => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  const nameChangeHandler = (event) => {
    setname(event.target.value);
  };
  const numberChangeHandler = (event) => {
    setage(event.target.value);
  };

  // error handeling
  const [error, seterror] = useState(false);

  const formSubmissionHandler = (event) => {
    if (!(name.length > 0) || !(age < 120)) {
      console.log("invalid");
      seterror(true);
    } else {
      event.preventDefault();
      const dataArray = {
        name: name,
        age: age,
      };
      props.submitionHandler(dataArray);

      setname("");
      setage("");
    }
  };

  return (
    <div className="form__container">
      <form onSubmit={formSubmissionHandler}>
        <label>User Name</label>
        <input type="text" onChange={nameChangeHandler} value={name}></input>
        <label>Age</label>
        <input type="number" onChange={numberChangeHandler} value={age}></input>
        <button type="submit">Add User</button>
      </form>
      {/* form error Modal */}
      <div
        className="specific_modal"
        style={error ? { visibility: "initial" } : console.log()}
      >
        <div className="modal__container">
          <h3>please Enter valid input</h3>
          <li>enter a name</li>
          <li> age must between 0 120</li>
          <div className="button__container">
            <button
              onClick={() => {
                seterror(false);
              }}
            >
              i got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
