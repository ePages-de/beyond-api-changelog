"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class FileSystem {
    readFile(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, (error, data) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data.toString());
            });
        });
    }
}
exports.FileSystem = FileSystem;
