const { consulta_cnpj } = require('./cnpj')

const jobs = {}

jobs.init = () => {
    consulta_cnpj()
}

module.exports = jobs