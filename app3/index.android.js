import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  StyleSheet,
  Image,
  View
} from 'react-native';


class app3 extends Component {

    constructor(props) {
        super(props);
        this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' }
    }

    jokeyPo(acao) {
        //Gera numero aleatorio entre 0 e 2
        var numAleatorio = Math.floor(Math.random() * 3);

        var escolhaComputadorTexto = "";

        switch(numAleatorio){
            case 0: escolhaComputadorTexto = 'pedra'; break;
            case 1: escolhaComputadorTexto = 'papel'; break;
            case 2: escolhaComputadorTexto = 'tesoura'; break;
        }

        var resultado = '';

        if(escolhaComputadorTexto == 'pedra'){
            if(acao == 'pedra'){
                resultado = 'empate';
            }
            if(acao == 'papel'){
                resultado = 'usuario ganhou';
            }
            else{
                resultado = 'computador ganhou';
            }
        }

        if(escolhaComputadorTexto == 'papel'){
            if(acao == 'pedra'){
                resultado = 'computador ganhou';
            }
            if(acao == 'papel'){
                resultado = 'empate';
            }
            else{
                resultado = 'usuario ganhou';
            }
        }

        if(escolhaComputadorTexto == 'tesoura'){
            if(acao == 'pedra'){
                resultado = 'usuario ganhou';
            }
            if(acao == 'papel'){
                resultado = 'computador ganhou';
            }
            else{
                resultado = 'empate';
            }
        }

        this.setState({ escolhaUsuario: acao, 
                        escolhaComputador: escolhaComputadorTexto,
                        resultado: resultado
        }); 
    }

    render() {
        return (
          <View>
              
              <Topo></Topo>

              <View style={styles.painelAcoes}>
                  <View style={styles.btnEscolha}>
                        <Button title="pedra" onPress={() => { this.jokeyPo('pedra')}} />
                  </View>

                  <View style={styles.btnEscolha}>
                        <Button title="papel" onPress={() => { this.jokeyPo('papel')}} />
                  </View>
                    
                  <View style={styles.btnEscolha}>
                        <Button title="tesoura" onPress={() => { this.jokeyPo('tesoura')}} />
                  </View>  
              </View>


              <View style={styles.palco}>
                <Text style={styles.txtResultado}>{ this.state.resultado}</Text>
                <Text>Escolha do Computador: { this.state.escolhaComputador}</Text>
                <Text>Escolha do Usuário: { this.state.escolhaUsuario}</Text>

              </View>
             
              
          </View>
        );
    }
}

class Topo extends Component {
    render() {
        return (
            <View>
                  <Image source={require('./imgs/jokenpo.png')} />
              </View>
        );
    }
}

const styles = StyleSheet.create({
    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    palco: {
        alignItems: 'center',
        marginTop: 10
    },

    txtResultado: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    }

});

AppRegistry.registerComponent('app3', () => app3);
