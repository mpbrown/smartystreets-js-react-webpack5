import Axios from "axios";

export const createAxiosInstanceWithImport = () => {
  try {
    const axiosInstance = Axios.create();
    console.log("axios import instance", axiosInstance);
  } catch (e) {
    console.error("axios import error caught", e);
    throw e;
  }
};
