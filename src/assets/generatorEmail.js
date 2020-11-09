const generatorEmail = (firstname, lastname, company) => {
  const firstnameFL = firstname.charAt(0);
  const lastnameFL = lastname.charAt(0);
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
      res.push((firstname + "@" + i).toLowerCase());
      res.push((firstname + lastname + "@" + i).toLowerCase());
      res.push((firstname + "." + lastname + "@" + i).toLowerCase());
      res.push((firstnameFL + lastname + "@" + i).toLowerCase());
      res.push((firstnameFL + "." + lastname + "@" + i).toLowerCase());
      res.push((firstname + lastnameFL + "@" + i).toLowerCase());
      res.push((firstname + "." + lastnameFL + "@" + i).toLowerCase());
      res.push((firstnameFL + lastnameFL + "@" + i).toLowerCase());
      res.push((firstname + "_" + lastname + "@" + i).toLowerCase());
      res.push((firstnameFL + "_" + lastname + "@" + i).toLowerCase());
      res.push((lastname + firstname + "@" + i).toLowerCase());
      res.push((lastname + "." + firstname + "@" + i).toLowerCase());
      res.push((lastname + firstnameFL + "@" + i).toLowerCase());
      res.push((lastname + "." + firstnameFL + "@" + i).toLowerCase());
    });
    }
    console.log(res);
};
export default generatorEmail;
