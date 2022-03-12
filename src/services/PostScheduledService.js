const PostScheduledRepository = require("../repositories/PostScheduledRepository");

class PostScheduledService {

    constructor(
        postScheduledRepository = new PostScheduledRepository()
    ) {
        this.postScheduledRepository = postScheduledRepository
    }

    schedule(newRegister) {
        return this.postScheduledRepository.create(newRegister)
    }
    getPostsSchedules() {
        return this.postScheduledRepository.getPostsSchedules()
    }

    getPostsNotPublished() {
        return this.postScheduledRepository.getPostsNotPublished();
    }
}

module.exports = PostScheduledService;