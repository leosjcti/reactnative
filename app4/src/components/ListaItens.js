import React, { Component } from 'react';
import {
    ScrollView
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {
  
    constructor(props){
        super(props);

        this.state = { listaItens: [] };
    }
    
    
    componentDidMount() {
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
             //Mesma coisa que colocar no callback (function(response){})
            .then(response => { this.setState({ listaItens: response.data }); })
            .catch(() => { console.log("Erro ao recuperar os dados.");  });
    }
  
  
    render() {
        return (
            <ScrollView>
                { this.state.listaItens.map(item => (<Itens key={item.titulo} item={item}/> ) ) }
            </ScrollView>
        );
  }
}