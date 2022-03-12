const knex = require("../config/database")

class PostScheduledRepository {

    create(newRegister) {
        return knex("post_scheduled").insert(newRegister)
    }

    getPostsSchedules() {
        return knex("post_scheduled")
    }

    getPostsNotPublished() {
        const scheduledAt = new Date()
        scheduledAt.setMinutes(scheduledAt.getMinutes() + 10)
        return knex("post_scheduled")
                    .select()
                    .where("is_published", false)
                    .where("scheduled_at", "<=", scheduledAt)
                    
    }

    setPublished(id) {
        return knex("post_scheduled")
                .where("id", id)
                .update({
                    is_published: true
                })
    }
}


module.exports = PostScheduledRepository