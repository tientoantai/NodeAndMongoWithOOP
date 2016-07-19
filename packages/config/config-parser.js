var fs = require('fs');

module.exports = function (configDirectory) {
    var files = fs.readdirSync(configDirectory);
    var store = {};

    files.forEach(function (file) {
        store[file.replace(/\.json/i, '')] =
            JSON.parse(fs.readFileSync(configDirectory + '/' + file))
    });

    // Helper for reading config or env
    store.configOrEnv = function (value) {
        if (typeof value.env == 'string') {
            // Parse from environment
            return process.env[value.env] || value.default
        } else {
            return value
        }
    };

    return store;
};
