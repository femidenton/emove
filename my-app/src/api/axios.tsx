import axios from "axios";

const BASE_URL = "http://localhost:8081/api/v1";

export default axios.create({
  baseURL: BASE_URL,
});
