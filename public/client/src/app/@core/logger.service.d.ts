export declare enum LogLevel {
    Off = 0,
    Error = 1,
    Warning = 2,
    Info = 3,
    Debug = 4
}
export declare type LogOutput = (source: string | undefined, level: LogLevel, ...objects: any[]) => void;
export declare class Logger {
    private source?;
    static level: LogLevel;
    static outputs: LogOutput[];
    static enableProductionMode(): void;
    constructor(source?: string);
    debug(...objects: any[]): void;
    info(...objects: any[]): void;
    warn(...objects: any[]): void;
    error(...objects: any[]): void;
    private log;
}
