import axios from "axios";

//const dev = "http://localhost:3000";
const prod = process.env.REACT_APP_BACKEND_API;

export default axios.create({
  baseURL: prod,
});
