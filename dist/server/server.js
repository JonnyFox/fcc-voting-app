"use strict";
require("reflect-metadata");
const logger = require("morgan");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const inversify_conf_1 = require("./config/inversify.conf");
const services_1 = require("./services");
const inversify_express_utils_1 = require("inversify-express-utils");
let configService = inversify_conf_1.default.get(services_1.ConfigService);
let server = new inversify_express_utils_1.InversifyExpressServer(inversify_conf_1.default);
server.setConfig((app) => {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, '../public')));
    app.use('/lib', express.static(path.join(__dirname, '../../node_modules')));
    app.use('/app', express.static(path.join(__dirname, '../public/app')));
    app.use(logger('dev'));
});
let app = server.build().listen(configService.port);
console.log(`Server started on port ${configService.port} :)`);
exports = module.exports = app;
//# sourceMappingURL=server.js.map