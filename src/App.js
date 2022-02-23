import { useState } from "react";
import "./App.css";
import FormContainer from "./component/FormContainer";
import UserList from "./component/UserList";

function App() {
  const [dataRecord, setdataRecord] = useState([]);

  const submitionDataHandler = (event) => {
    setdataRecord((prevdata) => {
      return [event, ...prevdata];
    });
  };
  // console.log(dataRecord);
  return (
    <div>
      <FormContainer submitionHandler={submitionDataHandler}></FormContainer>
      <UserList UserListItem={dataRecord}></UserList>

    </div>
  );
}

export default App;
