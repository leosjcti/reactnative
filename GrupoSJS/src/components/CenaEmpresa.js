import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
        <View style={styles.principal}>
            <StatusBar // hidden={true} 
            backgroundColor='#EC7148'
            />
            
            <BarraNavegacao 
                voltar //Valor booleano nao precisa ser setado, sempre será true por padrão  />
                navegacao={this.props.navegacao}
                corDeFundo={'#EC7148'}
            />
            
            <View style={styles.grupoTitulo}>
                <Image source={detalheEmpresa} />
                <Text style={styles.titulo}>A Empresa</Text>
            </View>
            
            <View style={styles.detelheEmpresa}>
                <Text style={styles.txtEmpresa}>
                    A Empresa LM de lima Soluções de computadores, nasceu
                    em 2010 com o intuito de desenvolver softwares....
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
        color: '#EC7148',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 25
    },
    detelheEmpresa: {
        marginTop: 20,
        padding: 20
    },
    txtEmpresa: {
        fontSize: 18
    }

});
