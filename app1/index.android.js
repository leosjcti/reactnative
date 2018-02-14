//var React = require('react');
import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';


const gerarNumero = ()=>{
  var numero = Math.random();
  numero = Math.floor(numero * 10);
  alert(numero);
}


const App = ()=>{
  return(
        
      <View>
          <Text>Gerador de números aleatórios</Text>
          <Button 
            title="Gerar numero"
            onPress={gerarNumero}

          />
      </View>

  );
};

AppRegistry.registerComponent('app1', () => App);
