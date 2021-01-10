// build your server here

const express = require("express");
const server = express();

const resourcesAPI = require("./resource/router");
const projectsAPI = require("./project/router");
const tasksAPI = require("./task/router");

server.use(express.json());

server.use("/api/resources", resourcesAPI);
server.use("/api/projects", projectsAPI);
server.use("/api/tasks", tasksAPI);

module.exports = server;
