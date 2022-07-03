const development = {
    name: "development",
    port: 5000,
    mongo_url:
        "mongodb+srv://blazing-storm:Uj7mHRLMjVT6aRk@cluster0.jqgyh.mongodb.net/?retryWrites=true&w=majority",
    jwt_secret: "texty-dev",
};

const production = {
    name: "production",
    port: process.env.PORT,
    mongo_url: process.env.MONGO_URL,
    jwt_secret: process.env.JWT_SECRET,
};

module.exports = production;
