const amqp = require('amqplib/callback_api')

let channel

let connection = { }

connection.getChannel = () => {
  if (channel) return Promise.resolve(channel)

  console.log(`Connecting on rabbitmq amqp://${process.env.AMQP_USER}:***@${process.env.AMQP_HOST}${process.env.AMQP_VHOST}`)

  return new Promise((resolve, reject) => {
    return amqp.connect({
      hostname: process.env.AMQP_HOST,
      port: process.env.AMQP_PORT,
      username: process.env.AMQP_USER,
      password: process.env.AMQP_PASS,
      vhost: process.env.AMQP_VHOST
    }, (err, conn) => {
      if (err) return reject(err)
      return conn.createChannel((err, ch) => {
        if (err) return reject(err)

        channel = ch

        return resolve(ch)
      })
    })
  })
}

module.exports = connection
