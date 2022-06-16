const env = require("../config/environment");

const notFound = (req, res, next) => {
    const err = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(err);
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: env.name === "production" ? null : err.stack,
    });
};

module.exports = { notFound, errorHandler };
