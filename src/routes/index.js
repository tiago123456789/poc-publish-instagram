const uploadFileMiddleware = require("../middlewares/UploadFileMiddleware")
const PostScheduledEndpoint = require("../endpoints/PostScheduledEndpoint");
const HandlerException = require("../middlewares/HandlerException");
const postScheduledEndpoint = new PostScheduledEndpoint()

module.exports = (app) => {

    app.get("/posts-scheduled", postScheduledEndpoint.findAll)

    app.post(
        "/posts-scheduled",
        uploadFileMiddleware.single("file"),
        postScheduledEndpoint.schedule
    )

    // Middleware handler exceptions
    app.use(HandlerException)

}