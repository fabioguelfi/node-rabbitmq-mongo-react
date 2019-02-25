const userModel = require('../../schemas/user')

const controller = {}

controller.createUser = async ({ name, last_name, cnpj, cpf }) => {
    try {
        const user = await new userModel({ name, last_name, cnpj, cpf })

        return user.save()
    } catch (err) {
        throw (err)
    }
}

module.exports = controller