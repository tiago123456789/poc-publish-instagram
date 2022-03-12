const s3 = require("../config/s3")

class StorageService {

    constructor(storage = s3) {
        this.storage = storage;
    }

    getFile(filename) {
        return this.storage.getObject({
            Bucket: process.env.AWS_BUCKET,
            Key: filename
        }).promise()
    }
}

module.exports = StorageService