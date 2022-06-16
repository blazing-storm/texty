const jwt = require("jsonwebtoken");
const env = require("./environment");

const generateToken = (id) => {
    return jwt.sign({ id }, env.jwt_secret, {
        expiresIn: "30d",
    });
};

module.exports = generateToken;
