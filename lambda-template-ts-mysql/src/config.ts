import { merge } from "lodash";

const env = process.env.NODE_ENV;

console.log("env", env);

interface IConfig {
  DB_URL: string;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_PORT: string;
  CONNECTION_LIMIT: number;
}

const config: { [x: string]: any } = {
  default: {
    DB_URL: "",
    DB_NAME: "",
    DB_USERNAME: "",
    DB_PASSWORD: "",
    DB_PORT: "",
    CONNECTION_LIMIT: 10,
  },
  develepment: {},
  staging: {},
  production: {},
};

export default merge(Object.assign({}, config.default), config[env]) as IConfig;
