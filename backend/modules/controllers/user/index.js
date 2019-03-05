const userModel = require('../../schemas/user')
const { getChannel: getChannelRabbitmq } = require('../../connections/rabbitmq/connection')

const controller = {}

controller.createUser = async ({ name, email, password, cnpj, cpf }) => {
    try {
        const q = 'cnpj_consulta'
        const ch = await getChannelRabbitmq()

        const user = await new userModel({ name, email, password, cnpj, cpf })

        await ch.assertQueue(q)
        await ch.sendToQueue(q, new Buffer.from(user.id))

        return user.save()
    } catch (err) {
        throw (err)
    }
}

controller.getAllUsers = async () => {
    try {
        return await userModel.find({})
    } catch (err) {
        throw (err)
    }
}

module.exports = controller