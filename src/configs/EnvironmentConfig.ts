//Base URL
let baseURL: string = "https://engineering-task.elancoapps.com";

interface Config {
  API_ENDPOINT_URL: string;
}

//Local Environment
const local: Config = {
  API_ENDPOINT_URL: `${baseURL}/api/`,
};


const getEnv = (): Config => {
  const origin = window.location.origin;
  if (origin === "https://localhost:3000") {
    return local;
  } else {
    return local;
  }
};

export const env = getEnv();
