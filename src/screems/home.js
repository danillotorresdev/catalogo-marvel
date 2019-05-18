import React, { Component } from 'react'
import Banner from '../components/Banner'
import Catalogo from '../components/Catalogo'


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner />
                <Catalogo />

            </React.Fragment>
        )
    }
}


export default Home