import axios from "axios";

const BASE_URL = "http://localhost:3000";

const apiService = async (method, url, data) => {
  const config = {
    method,
    url: BASE_URL + url,
    data,
  };

  return await axios(config);
};

export default apiService;