module.exports = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'schedule_post_instagram'
    },
    migrations: {
        directory: __dirname + '/migrations',
        tableName: 'knex_migrations',
    },
    seeds: {
        directory: __dirname + '/seeds',
    },
}