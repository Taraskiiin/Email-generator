import axios from "axios";
export const validateEmails = (emailsArr) => {
  return axios.post(`http://localhost:9000/`, { emails : emailsArr });
};
