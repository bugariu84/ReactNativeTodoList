import React, { Component } from 'react';
import Header from './components/Header'
import {
    Container
} from 'react-native'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <Container>
                <Header />
            </Container>
        )
    }
}