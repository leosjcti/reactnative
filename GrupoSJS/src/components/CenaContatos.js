import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
        <View style={styles.principal}>
            <StatusBar // hidden={true} 
            backgroundColor='#61BD8C'            
            />
            
            <BarraNavegacao 
                voltar //Valor booleano nao precisa ser setado, sempre será true por padrão  />
                navegacao={this.props.navegacao}
                corDeFundo={'#61BD8C'}
            />
            
            <View style={styles.grupoTitulo}>
                <Image source={detalheContatos} />
                <Text style={styles.titulo}>Contatos</Text>
            </View>
            
            <View style={styles.detelheContatos}>
                <Text style={styles.txtContatos}>Telefone: (12)99182-9674</Text>
                <Text style={styles.txtContatos}>Celular : (12)99182-9674</Text>
                <Text style={styles.txtContatos}>E-mail: leo.sjc.ti@gmail.com</Text>
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
        color: '#61BD8C',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 25
    },
    detelheContatos: {
        marginTop: 20,
        padding: 20
    },
    txtContatos: {
        fontSize: 18
    }

});
