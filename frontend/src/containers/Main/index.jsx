import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

class MainComponent extends Component {
    state = {
        users: []
    }

    async componentWillMount () {
        const response = await axios.get('http://localhost:3000/users')
        this.setState({ users: response.data })
    }

    cardComponent = ({ _id, cnpj, cpf, name, email, inscricao_estadual }) => (
        <Card key={_id} >
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>CPF || CNPJ: {cnpj | cpf}</Card.Text>
                <Card.Text>Email: {email}</Card.Text>
                <Card.Text>Inscricao Estadual: {inscricao_estadual}</Card.Text>
            </Card.Body>
        </Card>
    )

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={10}>
                        {this.state.users.map(user => this.cardComponent(user))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainComponent