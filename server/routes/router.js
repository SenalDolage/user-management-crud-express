const express = require("express");
const route = express.Router();
const renderService = require('../services/render');

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", renderService.homeRoute);

/**
 * @description Add User
 * @method GET /add-user
 */
route.get("/add-user", renderService.addUserRoute);

/**
 * @description Edit User
 * @method GET /edit-user
 */
route.get("/edit-user", renderService.editUsereRoute);

module.exports = route;