import axios from "axios";

const BASE_URL = "https://e-move-api.onrender.com/api/v1";

export default axios.create({
  baseURL: BASE_URL,
});
