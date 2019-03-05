
const mongoose = require('mongoose');
const { getConnection: getConnectionMongo } = require('../../connections/mongo/connection')
const { getChannel: getChannelRabbitmq } = require('../../connections/rabbitmq/connection')
const { init } = require('../jobs')
worker = { }

worker.init = () => {
    // ENV
    require('dotenv').load()

    // MONGO
    getConnectionMongo().then(conn => {
        console.log(`Mongo connected !`)
    }).catch(console.error)

    // RABBITMQ
    getChannelRabbitmq().then(conn => {
        console.log(`Rabbitmq connected !`)
        init()
    }).catch(console.error)
    
}

module.exports = worker