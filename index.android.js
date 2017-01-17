/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Container, Content, Button, Header, Title, Icon, Badge, List, ListItem,Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class latihan extends Component {
  render() {
    return (
      <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>Header</Title>

                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>
                <Content>
                <List>
                    <ListItem>
                        <Thumbnail square size={80} source={require('./img/fiat.png')} />
                        <Text>Hyundai</Text>
                        <Text note>1967</Text>
                    </ListItem>
                    <ListItem>
                        <Thumbnail square size={80} source={require('./img/hyundai.png')} />
                        <Text>Infiniti</Text>
                        <Text note>1989</Text>
                    </ListItem>
                    <ListItem>
                        <Thumbnail square size={80} source={require('./img/mersi.png')} />
                        <Text>Hyundai</Text>
                        <Text note>1967</Text>
                    </ListItem>
                    <ListItem>
                        <Thumbnail square size={80} source={require('./img/volkwagen.jpg')} />
                        <Text>Infiniti</Text>
                        <Text note>1989</Text>
                    </ListItem>
                </List>
                    <List>
                        <ListItem iconLeft>
                            <Icon name='ios-chatboxes' />
                            <Text> Simon Mignolet</Text>
                        </ListItem>
                        <ListItem iconLeft>
                            <Icon name='ios-alarm' />
                            <Text> Nathaniel Clyne</Text>
                            <Badge>2</Badge>
                        </ListItem>
                        <ListItem iconLeft>
                            <Icon name='ios-notifications' />
                            <Text> Dejan Lovren</Text>
                            <Text note>Note here</Text>
                        </ListItem>
                        <ListItem iconLeft iconRight>
                            <Icon name='ios-mic' />
                            <Text> Mama Sakho</Text>
                            <Icon name='ios-mic-outline' />
                        </ListItem>
                    </List>
                </Content>
            </Container>
    );
  }
}

AppRegistry.registerComponent('latihan', () => latihan);
