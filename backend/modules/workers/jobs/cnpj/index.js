const userModel = require('../../../schemas/user')
const { getChannel: getChannelRabbitmq } = require('../../../connections/rabbitmq/connection')

const worker = {}

worker.consulta_cnpj = async () => {
    const q = 'cnpj_consulta'
    const ch = await getChannelRabbitmq()
    await ch.assertQueue(q)
    ch.prefetch(1)
    await ch.consume(q, (payload) => {
        if (payload !== null) {
            setTimeout(async () => {
                try {
                    const p = payload.content.toString()
                    const user = await userModel.findOneAndUpdate({ _id: p }, { inscricao_estadual: Math.random().toFixed(3) }) 
                    ch.ack(payload)
                } catch (e) {
                    ch.nack(payload)
                }
            }, 5000)
        }
    })
}

module.exports = worker