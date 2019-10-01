import React, { Component } from 'react';
import { Container, Header, Text, Body, Left, Button, Icon, Title } from 'native-base';
export default class HeaderMultipleIconExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title style={{ display: "flex", justifyContent: "center", width: "100%" }}>User Entry Form</Title>
                    </Body>
                </Header>
            </Container>
        );
    }
}