import axios from "axios";
export const validateEmails = (emailsArr) => {
  return axios.post(`https://git.heroku.com/gentle-eyrie-34093.git`, { emails : emailsArr });
};
