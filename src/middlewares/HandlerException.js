module.exports = (error, request, response, next) => {

    switch(error.name) {
        case "ValidationError":
            return response.status(400).json({
                error: error.errors
            })
        default:
            console.log(error)
            return response.status(500).json({
                error: "Internal server error"
            })
    }
}