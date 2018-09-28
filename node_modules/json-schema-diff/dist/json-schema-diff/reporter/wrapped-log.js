"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WrappedLog {
    info(message) {
        console.log(message);
    }
    error(error) {
        console.error(error);
    }
}
exports.WrappedLog = WrappedLog;
