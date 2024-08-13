const Axios = require("axios").default;

export const createAxiosInstanceWithRequire = () => {
  try {
    const axiosInstance = Axios.create();
    console.log("axios require instance", axiosInstance);
  } catch (e) {
    console.error("axios require error caught", e);
    throw e;
  }
};
