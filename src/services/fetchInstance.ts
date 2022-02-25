const BASE_URL =
  process.env.REACT_APP_BASE_URL ||
  "https://api.github.com/repos/IamPixelMx/fullstack-interview-test";
const API_KEY = process.env.REACT_APP_API_KEY;
const headers = {
  Authorization: `Token ${API_KEY}`,
  Accept: "application/vnd.github.v3+json",
};

export type ParamsType = {
  [key: string]: any;
};

const deafultErrorMsg = "Something went wrong!";

const fetchInstance = {
  get: async (url = "") => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, { headers });
      const data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        throw new Error(
          `${response.status}:  ${
            data.message || response.statusText || deafultErrorMsg
          }`
        );
      }
    } catch (error) {
      throw error;
    }
  },

  post: async (url = "", params?: ParamsType) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        headers,
        method: "POST",
        ...(params && { body: JSON.stringify(params) }),
      });
      const data = await response.json();
      if (response.status === 201) {
        return data;
      } else {
        throw new Error(
          `${response.status}:  ${
            data.message || response.statusText || deafultErrorMsg
          }`
        );
      }
    } catch (error) {
      throw error;
    }
  },

  patch: async (url = "", params?: ParamsType) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        headers,
        method: "PATCH",
        ...(params && { body: JSON.stringify(params) }),
      });
      const data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        throw new Error(
          `${response.status}:  ${
            data.message || response.statusText || deafultErrorMsg
          }`
        );
      }
    } catch (error) {
      throw error;
    }
  },
};

export default fetchInstance;
