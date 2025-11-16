export default class AppError extends Error {
    constructor(message, statusCode, code = "ERROR", details = null) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.details = details;
        Error.captureStackTrace(this, this.constructor);
    }
}
