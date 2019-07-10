import React from 'react';
import {
    Header,
    Text,
    Left,
    Body,
    Right,
    Button
} from 'react-native';

export default class MainHeader extends React {

    render () {
        return (
            <Header>
                <Left>
                    <Button>
                        <Text>Left btn</Text>
                    </Button>
                </Left>
                <Body>
                    <Header>
                        <Text>Header</Text>
                    </Header>
                </Body>
                <Right>
                    <Text>
                        Right btn
                    </Text>
                </Right>
            </Header>
        )
    }
}