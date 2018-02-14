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

        if (escolhaComputadorTexto === 'pedra') {
            if (acao === 'pedra') {
                resultado = 'empate';
            }
            if (acao === 'papel') {
                resultado = 'Você ganhou';
            } else {
                resultado = 'Você perdeu';
            }
        }

        if (escolhaComputadorTexto === 'papel') {
            if (acao === 'pedra') {
                resultado = 'Você perdeu';
            }
            if (acao === 'papel') {
                resultado = 'empate';
            } else {
                resultado = 'Você ganhou';
            }
        }

        if (escolhaComputadorTexto === 'tesoura') {
            if (acao === 'pedra') {
                resultado = 'Você ganhou';
            }
            if (acao === 'papel') {
                resultado = 'Você perdeu';
            } else {
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

                <Icone escolha={ this.state.escolhaComputador} jogador='Computador'></Icone>
                <Icone escolha={ this.state.escolhaUsuario} jogador='Você'></Icone>

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

class Icone extends Component {

    render() {
        if(this.props.escolha == 'pedra'){

            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('./imgs/pedra.png')} />
                </View>
            );

        }else if(this.props.escolha == 'papel'){

            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('./imgs/papel.png')} />
                </View>
            );

        }else if(this.props.escolha == 'tesoura'){

            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('./imgs/tesoura.png')} />
                </View>
            );

        }else{
            return false;
        }    

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
    },

    icone: {
        alignItems: 'center',
        marginBottom: 20
    }, 
    
    txtJogador: {
        fontSize: 18
    }

});

AppRegistry.registerComponent('app3', () => app3);
