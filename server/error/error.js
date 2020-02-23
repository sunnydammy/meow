const logger = require('../logger');

class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

const handleError = (err, res) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || "An Unknown error has occrued.";

    console.log("statusCode = " + statusCode);
    console.log("message = " + message);

    logger.error(message);

    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};

module.exports = {
    ErrorHandler,
    handleError
}