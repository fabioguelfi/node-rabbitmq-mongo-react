const { createUser } = require('../../controllers/user')

const handler = {}

handler.createUser = async (req, res, next) => {
    try {
        const user = await createUser({ ...req.body })

        res
            .status(200)
            .json(user)
    } catch (err) {
        return next(err)
    }
}

module.exports = handler