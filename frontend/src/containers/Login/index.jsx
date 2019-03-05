import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap'
import axios from 'axios'

export class LoginComponent extends Component {
    state = {
        email: '',
        password: '',
        type: 'signin',
        validated: false,
        idRegister: 'CPF',
        optionsIdRegister: [
            { option: 'CPF', disabled: false, },
            { option: 'CNPJ', disabled: true, },
        ],
        payloadSubmit: {
            name: '',
            email: '',
            password: '',
            cpf: '',
            cnpj: ''
        }
    }

    radiosButton = () => {
        const changeIdRegister = ({ optionCurrent }) => {
            const newOptions = this.state.optionsIdRegister.map(opt => ({ ...opt, disabled: opt.option === optionCurrent ? false : true }))
            this.setState({ idRegister: optionCurrent, optionsIdRegister: newOptions })
        }
        return (
            <React.Fragment>
                {this.state.optionsIdRegister.map(i => {
                    return (
                        <ButtonGroup key={i.option} >
                            <Button
                                onClick={() => changeIdRegister({ optionCurrent: i.option })} variant="secondary">{i.option}</Button>
                        </ButtonGroup>
                    )
                })}
            </React.Fragment>
        )
    }

    changeTypeForm = ({ type }) => {
        this.setState({ type })
    }

    typeButtonsForm = () => {
        return (
            <ButtonGroup>
                <Button onClick={() => this.changeTypeForm({ type: 'signin' })} variant="secondary">SignIn</Button>
                <Button onClick={() => this.changeTypeForm({ type: 'signup' })} variant="secondary">SignUp</Button>
            </ButtonGroup>
        )
    }

    singupFormComponent = () => {
        return (
            <React.Fragment>
                <Col style={{ marginTop: '1vh', marginBottom: '1vh' }}>
                    {this.radiosButton()}
                </Col>
                {this.state.idRegister === 'CPF'
                    ? (<Form.Group>
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            onChange={this.handleChange.bind(this)}
                            id='cpf'
                            type='text'
                            placeholder="CPF" />
                    </Form.Group>)
                    : (<Form.Group>
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Control
                            onChange={this.handleChange.bind(this)}
                            id='cnpj'
                            type='text'
                            placeholder="CNPJ" />
                    </Form.Group>)}
            </React.Fragment>
        )
    }

    submitSignin = () => {
        debugger
    }

    submitSignup = async () => {
        const user = await axios.post('http://localhost:3000/users/register', { ...this.state.payloadSubmit })
        this.props.history.push('/main')
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.state.type === 'signin' ? this.submitSignin() : this.submitSignup()
    }

    handleChange(event) {
        switch (event.target.id) {
            case 'name':
                this.setState({ payloadSubmit: { ...this.state.payloadSubmit, name: event.target.value } })
                break;
            case 'email':
                this.setState({ payloadSubmit: { ...this.state.payloadSubmit, email: event.target.value } })
                break;
            case 'password':
                this.setState({ payloadSubmit: { ...this.state.payloadSubmit, password: event.target.value } })
                break;
            case 'cpf':
                this.setState({ payloadSubmit: { ...this.state.payloadSubmit, cpf: event.target.value } })
                break;
            case 'cnpj':
                this.setState({ payloadSubmit: { ...this.state.payloadSubmit, cpf: event.target.value } })
                break;
        }
        setTimeout(() => {
            console.log(this.state.payloadSubmit)
        }, 500);
    }

    render() {
        return (
            <Container>
                <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2vh' }}>
                    <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} xs={12} md={10}>
                        {this.typeButtonsForm()}
                    </Col>
                    <Col xs={12} md={10}>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    id='name'
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.payloadSubmit.name}
                                    type="text"
                                    placeholder="name" />
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    id='email'
                                    onChange={this.handleChange.bind(this)}
                                    type="email"
                                    placeholder="Enter email" />
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    onChange={this.handleChange.bind(this)}
                                    id='password'
                                    type="password"
                                    placeholder="Password" />
                                {this.state.type === 'signup' ? this.singupFormComponent() : null}
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
