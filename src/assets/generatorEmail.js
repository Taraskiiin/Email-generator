const generatorEmail = (firstname, lastname, company) => {
  firstname.toString().toLowerCase().trim();
  lastname.toLowerCase().trim();
  company.toString().toLowerCase().trim();
  const domain = [
    company + ".com",
    company + ".ua",
    company + ".org",
    company + ".net",
    company + "com.ua",
  ];
  let res = [];
  if (
    firstname === null ||
    firstname === "" ||
    lastname === null ||
    lastname === "" ||
    company === null ||
    company === ""
  ) {
    alert("Come on!, never leave empty fields!");
    return false;
  } else {
    domain.forEach((i) => {
      res.push(firstname + "@" + domain[i]);
      res.push(firstname + lastname + "@" + domain[i]);
      res.push(firstname + "." + lastname + "@" + domain[i]);
      res.push(firstname.charAt(0) + lastname + "@" + domain[i]);
      res.push(firstname.charAt(0) + "." + lastname + "@" + domain[i]);
      res.push(firstname + lastname.charAt(0) + "@" + domain[i]);
      res.push(firstname + "." + lastname.charAt(0) + "@" + domain[i]);
      res.push(firstname.charAt(0) + lastname.charAt(0) + "@" + domain[i]);
      res.push(firstname + "_" + lastname + "@" + domain[i]);
      res.push(firstname.charAt(0) + "_" + lastname + "@" + domain[i]);
      res.push(lastname + firstname + "@" + domain[i]);
      res.push(lastname + "." + firstname + "@" + domain[i]);
      res.push(lastname + firstname.charAt(0) + "@" + domain[i]);
      res.push(lastname + "." + firstname.charAt(0) + "@" + domain[i]);
    });
    console.log(res);
  }
};
export default generatorEmail;
