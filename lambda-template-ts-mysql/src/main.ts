import "source-map-support/register";
import { createPool } from "mysql2";

import config from "./config";

// initialize db connection pool
console.log("Initializing db connection pool...");
global.pool = createPool({
  host: config.DB_URL,
  user: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  waitForConnections: true,
  connectionLimit: config.CONNECTION_LIMIT,
  queueLimit: 0,
}).promise();
console.log("Done");

export const handler = async () => {};
