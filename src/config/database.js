const knex = require("knex")

module.exports = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'schedule_post_instagram'
    }
})