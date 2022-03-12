const Instagram = require('instagram-web-api')
const { v4 } = require("uuid")
const fs = require("fs")
const FileCookieStore = require('tough-cookie-filestore2')
const PostScheduledRepository = require('../repositories/PostScheduledRepository')
const StorageService = require('./StorageService')
 
class InstagramPublisherService {

    constructor(
        postScheduledRepository = new PostScheduledRepository(),
        storageService = new StorageService()
    ) {
        this.postScheduledRepository = postScheduledRepository
        this.storageService = storageService;
        this.client = null
    }

    async initClient() {
        const cookieStore = new FileCookieStore('./cookies.json')
        this.client = new Instagram({ 
            username: "" || process.env.INSTAGRAM_USERNAME,
            password: "" || process.env.INSTAGRAM_PASSWORD,
            cookieStore 
        })
    }

    async publish(post) {
        let filename = post.file.split("/").reverse()[0]
        const fileReturned = await this.storageService.getFile(filename)
        const extension = post.mimetype.split("/")[1] || "jpg"
        filename = `${v4()}.${extension}`;
        fs.writeFileSync(filename, fileReturned.Body);
        await this.client.login();
        await this.client.uploadPhoto({
            photo: `./${filename}`,
            caption: post.caption || '', 
            post: post.type_post,
        })

        fs.unlinkSync(filename);
        await this.postScheduledRepository.setPublished(post.id)
    }
}

module.exports = InstagramPublisherService