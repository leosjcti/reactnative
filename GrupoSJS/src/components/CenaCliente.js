import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaCliente extends Component {
  render() {
    return (
        <View style={styles.principal}>
            <StatusBar // hidden={true} 
            backgroundColor='#B9C941'
            />
            
            <BarraNavegacao 
                voltar //Valor booleano nao precisa ser setado, sempre será true por padrão  />
                navegacao={this.props.navegacao}
                corDeFundo={'#B9C941'}
            />
            
            <View style={styles.grupoTitulo}>
                <Image source={detalheCliente} />
                <Text style={styles.titulo}>Nossos Clientes</Text>
            </View>
            
            <View style={styles.detelheCliente}>
                <Image source={cliente1} />
                <Text style={styles.txtDetelheCliente}>Nossos Clientes</Text>
            </View>
            
            <View style={styles.detelheCliente}>
                <Image source={cliente2} />
                <Text style={styles.txtDetelheCliente}>Nossos Clientes</Text>
            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

    principal: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    
    grupoTitulo: {
        alignItems: 'center',
        flexDirection: 'row',
        margin: 20
    },
    titulo: {
        color: '#B9C941',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 25
    },
    detelheCliente: {
        marginTop: 10,
        padding: 20
    },
    txtDetelheCliente: {
        fontSize: 18,
        marginLeft: 20
    }

});
