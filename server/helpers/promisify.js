module.exports = (func) => (...agrs) => {
    return new Promise((resolve, reject) => {
        func(...args, (err, data) => {
            if (err) {
                reject(err);
            }

            resolve(data);
        })
    });
};