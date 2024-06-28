require("dotenv").config();

module.exports = {
  input: "server/api",
  baseURL: process.env.SERVER_URI,
};
