import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
  render() {
    return (
        <View style={styles.principal}>
            <StatusBar // hidden={true} 
            backgroundColor='#19D1C8'
            />
            
            <BarraNavegacao 
                voltar //Valor booleano nao precisa ser setado, sempre será true por padrão  />
                navegacao={this.props.navegacao}
                corDeFundo={'#19D1C8'}
            />
            
            <View style={styles.grupoTitulo}>
                <Image source={detalheServico} />
                <Text style={styles.titulo}>Serviços</Text>
            </View>
            
            <View style={styles.detelheServico}>
                <Text style={styles.txtServico}>
                    - Desenvolvimento de Programas
                </Text>
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
        color: '#19D1C8',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 25
    },
    detelheServico: {
        marginTop: 20,
        padding: 20
    },
    txtServico: {
        fontSize: 18
    }

});
