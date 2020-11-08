import React from "react";
import "./App.css";
import cyrillicToLatin from "./assets/translit.js";
import generatorEmail from "./assets/generatorEmail";
// const convert = require("cyrillic-to-latin");
// function Send(e) {
//   e.preventDefault();
//   let firstname = cyrillicToTranslit().transform(
//     document.querySelector("#firstname").value,
//     spaceReplacement
//   );
// let lastname = convert(`${document.querySelector("#secondname").value}`);
// let company = convert(`${document.querySelector("#company").value}`);
// if (firstname == null) {
//   alert("At least enter a first name to get started!");
// } else if (lastname == null) {
//   alert("Come on!, enter a last name!");
// } else if (company == null) {
//   alert("Oopse, something wrong with company name:c");
// }
// console.log(firstname);
// if (pass === pass2) {
// fetch("/", {
//   method: "post",
//   headers: {
//     Accept: 'application/json, text/plain, "/"',
//     "Content-type": "Application/json",
//   },
//   body: JSON.stringify({
//     Email: email,
//     Password: password,
//     Password2: password2,
//   }),
// })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// } else {
//   document.getElementById("msg").innerHTML = "your password not Match";
// }

function App() {
  const [firstname, setFirstName] = React.useState("");
  const [secondname, setSecondName] = React.useState("");
  const [company, setCompany] = React.useState("");
  return (
    <div>
      <h1>NICE COCK</h1>
      <label for="firstname">Your name, mr :</label>
      <input
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        id="firstname"
        name="firstname"
      />
      <label for="secondname">Enter your second name :</label>
      <input
        value={secondname}
        onChange={(e) => setSecondName(e.target.value)}
        type="text"
        name="secondname"
        id="secondname"
      />
      <label for="password">Enter you company name, please :</label>
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        type="text"
        name="company"
        id="company"
      />
      <button
        onClick={() =>
          generatorEmail(
            cyrillicToLatin(firstname),
            cyrillicToLatin(secondname),
            cyrillicToLatin(company)
          )
        }
      >
        test
      </button>
    </div>
  );
}

export default App;
