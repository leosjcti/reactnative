import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const imagemVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    if (this.props.voltar) {
        return (
            <View style={styles.barraTitulo}>
                 <TouchableHighlight
                    onPress={() => {
                        this.props.navegacao.pop(); //Recupera a props navegação das cenas
                    }}
                 >
                    <Image source={imagemVoltar} />
                 </TouchableHighlight>  
                 
                 <Text style={styles.titulo}>ATM Consultoria</Text>
            </View>
        );
    }
        
    return (
        <View style={styles.barraTitulo}>
             <Text style={styles.titulo}>ATM Consultoria</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    barraTitulo: {
        backgroundColor: '#CCC',
        padding: 10,
        flexDirection: 'row',
        height: 60
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }

});

