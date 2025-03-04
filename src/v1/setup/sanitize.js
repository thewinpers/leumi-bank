const express = require("express");
const xss = require("xss-clean");
const cors = require("cors");
const helmet = require("helmet");
const { server } = require("../config/system");

module.exports = (app) => {
  app.use(express.json({ limit: `${server.MAX_REQ_BODY_SIZE}kb` }));
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors({ origin: true }));
  app.use(xss());
};
