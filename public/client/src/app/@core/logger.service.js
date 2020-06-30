"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class Logger {
    constructor(source) {
        this.source = source;
    }
    static enableProductionMode() {
        Logger.level = LogLevel.Warning;
    }
    debug(...objects) {
        this.log(console.log, LogLevel.Debug, objects);
    }
    info(...objects) {
        this.log(console.info, LogLevel.Info, objects);
    }
    warn(...objects) {
        this.log(console.warn, LogLevel.Warning, objects);
    }
    error(...objects) {
        this.log(console.error, LogLevel.Error, objects);
    }
    log(func, level, objects) {
        if (level <= Logger.level) {
            const log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach((output) => output.apply(output, [this.source, level, ...objects]));
        }
    }
}
exports.Logger = Logger;
Logger.level = LogLevel.Debug;
Logger.outputs = [];
//# sourceMappingURL=logger.service.js.map