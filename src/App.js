import React from "react";

import "./App.css";
import cyrillicToLatin from "./helpers/translit";
import generatorEmail from "./helpers/generatorEmail";
import { validateEmails } from "./helpers/api";

function App() {
  const [firstname, setFirstName] = React.useState("");
  const [secondname, setSecondName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [validEmailList, setValidEmailList] = React.useState([]);
  const [readyList, setReadyList] = React.useState(false);

  const onStartGenerator = async () => {
    const emailArr = generatorEmail(
      cyrillicToLatin(firstname),
      cyrillicToLatin(secondname),
      cyrillicToLatin(company)
    );
    try {
      const { data } = await validateEmails(emailArr);
      setValidEmailList(data.emails);
    } catch (error) {
      console.log(error);
    }
    setReadyList(true);
  };

  return (
    <div className="wrapper">
      <div className="wrapper-shadow">
        <div className="input-info__block">
          <h2 className="info-block__title">HAVE A NICE DAY, BRO!</h2>
          <label for="firstname"></label>
          <input
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstname"
            placeholder="Your name:"
            name="firstname"
          />
          <label for="secondname"></label>
          <input
            value={secondname}
            onChange={(e) => setSecondName(e.target.value)}
            type="text"
            name="secondname"
            placeholder="Your second name:"
            id="secondname"
          />
          <label for="password"></label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            name="company"
            placeholder="Your company name:"
            id="company"
          />
          <button
            className="btn btn-success"
            onClick={() => onStartGenerator()}
          >
            Get some sweets!
          </button>
        </div>
        <ul>
          {readyList ? (
            validEmailList.map((validEmail, i) => 
              <li key={i}>{validEmail}</li>
            )
          ) : (
            <li>...Waiting for data</li>
          )}
        </ul>
      </div>
    </div>
  );
}
export default App;
