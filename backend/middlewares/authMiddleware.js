const jwt = require("jsonwebtoken");
const User = require("../models/user");
const asyncHanler = require("express-async-handler");
const env = require("../config/environment");

const protect = asyncHanler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            // decodes token id
            const decoded = jwt.verify(token, env.jwt_secret);

            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (err) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
});

module.exports = { protect };
