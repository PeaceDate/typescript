// Impliments. A class can impliment multiple interfaces.  This way to reuse code is called implimentation inheritance.

// Example 1

interface ILogger {
    log(...args): void;
    error(...args): void;
}

class Logger implements ILogger {
    // This methods could be asynchronious
    log(...args): void {
        console.log(...args);
    }
    error(...args): void {
        console.log(...args);
    }
}

const logger = new Logger();

logger.log('This is a log message');
logger.error('This is an error message');