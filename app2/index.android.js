import React from 'react';
import { AppRegistry, Text, View, Image, TouchableOpacity, Alert } from 'react-native';


const Estilos = {
    
    principal:{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },

    botao: {
      backgroundColor: '#538530',
      paddingVertical: 10,
      paddingHorizontal: 40,
      marginTop: 20
    },

    textoBotao:{
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    }


};


const gerarNovaFrase = () =>{
    
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 5);

    var frases = Array();
    frases[0] = 'Jesus morreu por ti. Ele te salvou da morte.' 
    frases[1] = 'Eu te amo Jesus, tudo que sou devo a ti' 
    frases[2] = 'Jesus é o meus pastor e nada me faltará' 
    frases[3] = 'Espirito Santo, seja bem-vindo aqui' 
    frases[4] = 'O Espirito de Deus está aqui' 

    var fraseEscolhida = frases[ numeroAleatorio ];
    Alert.alert(fraseEscolhida);

}



const app2 = () => {

  const{ principal, botao, textoBotao } = Estilos;

  return(
     
     <View style={ principal }>
          
        <Image source={ require('./imgs/logo.png') }/>

        <TouchableOpacity style={ botao } onPress={ gerarNovaFrase }>
            <Text style={ textoBotao }>Nova Frase</Text>
        </TouchableOpacity>


     </View>
  );
};


AppRegistry.registerComponent('app2', () => app2);
