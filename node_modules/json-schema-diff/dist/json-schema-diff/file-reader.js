"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const verror_1 = require("verror");
class FileReader {
    constructor(fileSystem) {
        this.fileSystem = fileSystem;
    }
    read(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.fileSystem.readFile(filePath);
            }
            catch (error) {
                throw new verror_1.VError(error, '%s', `Error loading "${filePath}"`);
            }
        });
    }
}
exports.FileReader = FileReader;
