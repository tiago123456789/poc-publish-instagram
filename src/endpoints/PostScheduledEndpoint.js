const PostScheduledService = require("../services/PostScheduledService")
const yup = require("yup");

class PostScheduledEndpoint {

    constructor(
        postScheduledService = new PostScheduledService()
    ) {
        this.postScheduledService = postScheduledService;
        this.findAll = this.findAll.bind(this)
        this.schedule = this.schedule.bind(this)
    }

    async findAll(request, response) {
        const postsScheduled = await this.postScheduledService.getPostsSchedules()
        response.json(postsScheduled)
    }

    async schedule(request, response, next) {
        try {
            const { location, mimetype } = request.file;
            const newRegister = { ...request.body, file: location, mimetype }
    
            let schema = yup.object().shape({
                caption: yup.string().required(),
                type_post: yup.string().required(),
                scheduled_at: yup.string().required(),
            });
    
            await schema.validate(newRegister)
            await this.postScheduledService.schedule(newRegister);
            response.sendStatus(201)
        } catch(error) {
            next(error);
        }
       
    }
}

module.exports = PostScheduledEndpoint