"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reporter {
    constructor(wrappedLog) {
        this.wrappedLog = wrappedLog;
    }
    reportError(error) {
        this.wrappedLog.error(error);
    }
    reportNoDifferencesFound() {
        this.wrappedLog.info('No differences found');
    }
    reportSuccessWithDifferences(differences) {
        const output = `Differences found between the two schemas:\n${JSON.stringify(differences, null, 4)}`;
        this.wrappedLog.info(output);
    }
    reportFailureWithDifferences(differences) {
        const output = `Breaking changes found between the two schemas:\n${JSON.stringify(differences, null, 4)}`;
        this.wrappedLog.error(output);
    }
}
exports.Reporter = Reporter;
