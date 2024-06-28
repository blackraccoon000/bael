import api from "@server/api/$api";
import aspida from "@aspida/fetch";

const apiClient = api(
  aspida(undefined, {
    baseURL: process.env.SERVER_URI,
  })
);

export default apiClient;
