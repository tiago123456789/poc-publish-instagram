const PostScheduledService = require("../services/PostScheduledService");
const InstagramPublisherService = require("../services/InstagramPublisherService")
const postScheduledService = new PostScheduledService()
const instagramPublisherService = new InstagramPublisherService();

instagramPublisherService.initClient()

console.log("Initializing job to publish posts")

const EACH_FIVE_MINUTE = 300000

setInterval(async () => {
    const posts = await postScheduledService.getPostsNotPublished()
    if (posts.length > 0) {
        console.log("Initing publish posts")
        for(let index = 0; index < posts.length; index++) {
            const post = posts[index];
            console.log("Init publish to post id %s", post.id)
            await instagramPublisherService.publish(post)
            console.log("Finished publish to post id %s", post.id)
        }
        console.log("Finished publish posts")
    }
    
}, EACH_FIVE_MINUTE)