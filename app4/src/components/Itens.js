import React, { Component } from 'react';
import { View , Text, Image } from 'react-native';

export default class Itens extends Component {
  render() {
    return (
        <View>
            <Image style={{height: 100, width: 100}} source={{ uri: this.props.item.foto}} />
            <Text>{this.props.item.titulo}</Text>
            <Text>{this.props.item.valor}</Text>
        </View>
    );
  }
}
