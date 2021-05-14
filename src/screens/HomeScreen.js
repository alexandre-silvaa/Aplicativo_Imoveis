import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

class HomeScreen extends React.Component {

state = {
  data: [
    { id: 0, full_name: 'Imóvel 1', tipo:'Tipo do imóvel: Casa' },

    { id: 1, full_name: 'Imóvel 2', tipo:'Tipo do imóvel: Casa p/ alugar' },
    
    { id: 2, full_name: 'Imóvel 3', tipo:'Tipo do imóvel: Apartamento' },
    
    { id: 3, full_name: 'Imóvel 4', tipo:'Tipo do imóvel: Casa' },
    
    { id: 4, full_name: 'Imóvel 5', tipo:'Tipo do imóvel: Apartamento' },
    
  ],
};

  renderItem = ({item}) => (
      <View style={styles.listItem}>
        <Text style={styles.text}>{item.full_name} {"\n"} <Text style={styles.text2}>{item.tipo} {"\n"}</Text></Text>

        <TouchableOpacity style={styles.btnVerMais} onPress={() => this.props.navigation.navigate('Detalhes')}>
          <Text style={styles.btnText}>VER MAIS</Text>
        </TouchableOpacity>
      </View>
    );
  

render() {
  return (
    <FlatList
    contentContainerStyle={styles.list}
    data={this.state.data}
    renderItem={this.renderItem}
    keyExtractor={item => item.id}

    />
    
  );
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize:25,
    fontFamily:'sans-serif',
    color: '#fff'
  },
  text2:{
    fontFamily:'sans-serif',
    fontSize:16,
  },
  list: {
    padding: 20,
    backgroundColor: '#08ffc8',
  },
  listItem: {
    backgroundColor: '#204969',
    margin: 10,
    padding: 30,
    borderRadius: 15
  },
  btnText: {
    color: '#204969'
  },
  btnVerMais:{
    width:"55%",
    backgroundColor:"#08ffc8",
    borderRadius:25,
    height:40,
    alignItems:"center",
    justifyContent:"center",
  }
});

export default HomeScreen;