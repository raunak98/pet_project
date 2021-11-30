import axios from "axios";

export const getAPIByName = (apiName) => {
  switch (apiName) {
    case "getAllCandidates":
      return "/api/candidate/getAllCandidates";
    case "registerCandidate":
      return "/api/candiate/registerCandidate";
    case "deleteCandidates":
      return "/api/candidate/deleteCandidates";
    default:
      return "";
  }
};

export const getData = (apiName) => {
  return axios
    .get(`http://localhost:8080${getAPIByName(apiName)}`)
    .then((res) => res);
};

export const postData = (apiName, inputData) => {
  return axios
    .post(`http://localhost:8080${getAPIByName(apiName)}`, inputData)
    .then((res) => res);
};
