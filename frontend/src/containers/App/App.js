import React, { Component } from 'react'
import { Background } from './App.style'
import { A } from '../../theme/types'
import { Container, Flex } from '../../theme/grid'
import InputComponent from '../../components/Input/InputComponent'

class App extends Component {

  state = {
    name: 'fabio',
    last_name: 'guelfi',
    email: 'fabioguelfiunix@gmail.com',
    cnpj: '0.0.0.0',
    cpf: '0.0.0.0'
  }

  render() {
    return (
      <Container>
        <Flex align={'center'} justify={'center'} >
          <A href="/">CADASTRO</A>
          <Background>
              <InputComponent
                placeholder={'Nome'}
                value={this.state.name}
                label={'teste'} />
              <InputComponent
                placeholder={'Sobrenome'}
                value={this.state.last_name}
                label={'teste'} />
              <InputComponent
                placeholder={'Email'}
                value={this.state.email}
                label={'teste'} />
              <InputComponent
                placeholder={'CPF'}
                value={this.state.cpf}
                label={'teste'} />
              <InputComponent
                placeholder={'CNPJ'}
                value={this.state.cnpj}
                label={'teste'} />
          </Background>
        </Flex>
      </Container>
    )
  }
}

export default App;
