const express = require("express");
const route = express.Router();
const renderService = require('../services/render');
const userController = require('../controllers/user-controller');

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

// API
route.get("/api/user", userController.find);
route.post("/api/user", userController.create);
route.put("/api/user/:id", userController.update);
route.delete("/api/user/:id", userController.delete);

module.exports = route;