import axios from "axios";
export const validateEmails = (emailsArr) => {
  return axios.post(`https://pacific-crag-22886.herokuapp.com/`, { emails : emailsArr });
};
