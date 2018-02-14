import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Estilos = {
    
    principal:{
      backgroundColor: '#D7D9D7',
      flex: 1,
    },
    topo: {
        backgroundColor: '#BAACBD',
        flex: 2
    },
    conteudo: {
        backgroundColor: '#C9C5CB',
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center' 
    },
    rodape: {
        backgroundColor: '#B48EAE',
        flex: 1
    },
    botao:{
      backgroundColor: '#48BBEC',
      padding: 10,
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 1
    },
    textoBotao:{
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf:'center'
    }

};

const botaoPressionado = () => {
  alert("Botao Pressionado");
}


const app2 = () => {

  const{ principal, topo, conteudo, rodape, botao, textoBotao } = Estilos;

  return(
     <View style={ principal }>
        <Text style={ topo }>Topo</Text>   
        <View style={ conteudo }>

            <TouchableOpacity style={botao}>
                <Text style={textoBotao}>Clique Aqui</Text>

            </TouchableOpacity>

        </View>  
        <Text style={ rodape }>Rodape</Text>     
     </View>
  );
};


AppRegistry.registerComponent('app2', () => app2);
