import React, { Component } from 'react'

import { connect } from 'react-redux'
import ActionCreators from '../redux/actionCreators'

import {
    Card, CardImg, CardBody,
    CardTitle, Container, Col, Row,
    Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem
} from 'reactstrap'


class Catalogo extends Component {
    state = {
        modal: false,
        active: 0
    }
    handleClick = (id) => {
        this.setState({
            active: id
        }, this.toggle)
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    componentDidMount() {
        this.props.loadCharacters()
    }

    render() {
        return (
            <React.Fragment>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                        {!this.props.characters.isLoading &&
                            this.props.characters.data.results &&
                            this.props.characters.data.results[this.state.active].name
                        }
                    </ModalHeader>
                    <ModalBody>
                        <ListGroup>
                            {!this.props.characters.isLoading &&
                                this.props.characters.data.results &&
                                this.props.characters.data.results[this.state.active].series.items.map(
                                    (serie, i) => <ListGroupItem key={i}>{serie.name}</ListGroupItem>
                                )
                            }
                        </ListGroup>
                        {!this.props.characters.isLoading &&
                            this.props.characters.data.results &&
                            this.props.characters.data.results[this.state.active].series.items.length === 0 &&
                            <p>Este personagem nāo particiou de série</p>
                        }
                    </ModalBody>
                </Modal>


                <Container>
                    <Row className='justify-content-center mt-4'>
                        <h2 className='titulo text-center pt-3 pb-2'>Catálogo de séries de <br /> personagens da Marvel</h2>
                    </Row>
                    <Row className='mb-5'>
                        {this.props.characters.isLoading && <p>Carregando ...</p>}
                        {!this.props.characters.isLoading &&
                            this.props.characters.data.results &&
                            this.props.characters.data.results.map(
                                (character, i) =>
                                    <Col md='3' className='mt-2 mb-2' key={character.id}>

                                        <Card onClick={() => this.handleClick(i)}>
                                            <CardImg className='card--img' top width="100%" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle>{character.name}</CardTitle>
                                            </CardBody>
                                        </Card>
                                    </Col>
                            )
                        }
                    </Row>

                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToPros = state => {
    return {
        characters: state.characters
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadCharacters: () => dispatch(ActionCreators.getCharactersRequest())
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Catalogo)