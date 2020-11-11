const generatorEmail = (firstName, lastName, company) => {
  const firstNameFL = firstName.charAt(0);
  const lastNameFL = lastName.charAt(0);
  const domain = [
    company + ".com",
    company + ".ua",
    company + ".org",
    company + ".net",
    company + ".com.ua",
  ];
  const res = [];
  if (
    !firstName || !lastName || !company
  ) {
    return [];
  } else {
    domain.forEach((i) => {
      res.push((firstName + "@" + i).toLowerCase());
      res.push((firstName + lastName + "@" + i).toLowerCase());
      res.push((firstName + "." + lastName + "@" + i).toLowerCase());
      res.push((firstNameFL + lastName + "@" + i).toLowerCase());
      res.push((firstNameFL + "." + lastName + "@" + i).toLowerCase());
      res.push((firstName + lastNameFL + "@" + i).toLowerCase());
      res.push((firstName + "." + lastNameFL + "@" + i).toLowerCase());
      res.push((firstNameFL + lastNameFL + "@" + i).toLowerCase());
      res.push((firstName + "_" + lastName + "@" + i).toLowerCase());
      res.push((firstNameFL + "_" + lastName + "@" + i).toLowerCase());
      res.push((lastName + firstName + "@" + i).toLowerCase());
      res.push((lastName + "." + firstName + "@" + i).toLowerCase());
      res.push((lastName + firstNameFL + "@" + i).toLowerCase());
      res.push((lastName + "." + firstNameFL + "@" + i).toLowerCase());
    });
  }
  return res;
};
export default generatorEmail;
