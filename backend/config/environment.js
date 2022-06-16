const development = {
    name: "development",
    port: 5000,
    mongo_url:
        "mongodb+srv://blazing-storm:Uj7mHRLMjVT6aRk@cluster0.jqgyh.mongodb.net/?retryWrites=true&w=majority",
    jwt_secret: "texty-dev",
};

const production = {
    name: "production",
};

module.exports = development;
