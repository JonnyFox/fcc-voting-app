"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8999,
    mongo: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost/voting-app-dev'
    }
};
//# sourceMappingURL=environment.js.map