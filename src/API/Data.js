const BASE_API_URL = "data.json";
export const API = {
  get: async () => {
  
    const path = BASE_API_URL;

    const res = await fetch(path);
    const json = await res.json();
    return json;
  },
};


