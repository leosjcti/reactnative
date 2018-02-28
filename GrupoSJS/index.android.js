import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import {
  AppRegistry
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaCliente from './src/components/CenaCliente';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class GrupoSJS extends Component {
  render() {
    return (
      <Navigator 
          //Recebe um objeto literal para indicar a rota principal
          initialRoute={{ id: 'a' }}
          //Configura as rotas dos componentes baseado nos seus ids
          renderScene={(route, navigator) => {
              if (route.id === 'a') {
                  return (<CenaPrincipal navegacao={navigator} />);
              }

              if (route.id === 'b') {
                return (<CenaCliente navegacao={navigator} />);
              }

              if (route.id === 'c') {
                return (<CenaContatos navegacao={navigator} />);
              }

              if (route.id === 'empresa') {
                return (<CenaEmpresa navegacao={navigator} />);
              }

              if (route.id === 'servico') {
                return (<CenaServicos navegacao={navigator} />);
              }
          }}
      
      />
    );
  }
}


AppRegistry.registerComponent('GrupoSJS', () => GrupoSJS);
