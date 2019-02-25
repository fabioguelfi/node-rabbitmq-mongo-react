const mongoose = require('mongoose')

let connection = {}

connection.getConnection = () => {
  const mongoUser = process.env.MONGO_USER
  const mongoPassword = process.env.MONGO_PASS
  const mongoHost = process.env.MONGO_HOST
  const mongoPort = process.env.MONGO_PORT
  const mongoDatabase = process.env.MONGO_DATABASE
  const mongoUri = process.env.MONGO_URI

  console.log(`Connecting on mongoDB mongodb://${mongoUser}:***@${mongoHost}:${mongoPort}/${mongoDatabase}`)

  return mongoose.connect(connection.getURI({ user: mongoUser, password: mongoPassword, host: mongoHost, port: mongoPort, database: mongoDatabase, mongoUri }), {})
}

connection.getURI = ({ user, password, host, port, database, mongoUri }) => {
  return !!mongoUri ? mongoUri : `mongodb://${user}:${password}@${host}:${port}/${database}`
}

module.exports = connection
