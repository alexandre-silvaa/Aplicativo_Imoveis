import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Detalhes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.imageCasa} 
          source={require('../images/casa.jpg')}
          />

        <View style={styles.detailsContainer}>
        
        <Text style={styles.title}>
          Casa de condomínio com 2 quartos à venda no Morumbi
          {"\n"}
        </Text>

        <Text style={styles.details}>
          Casa recém reformada com uma estrutura belíssima de 150m² de construção. Possui uma suíte com closet, 1 dormitório, 1 banheiro e 1 lavabo. A cozinha é toda planejada e ampla.
          {"\n"}{"\n"}
          Fica a apenas 8min do hospital Albert Einstein. Há praças, supermercados e bancos a menos de 10min de caminhada. Em apenas 2min é possível chegar ao ponto de ônibus mais próximo.
          {"\n"}{"\n"} 
          O condomínio oferece uma ampla piscina com 25m de raio, espaço gourmet. Há vigilância 24h com o circuito de câmeras de segurança, porteiro 24h.
          {"\n"}
        </Text>
      </View>

      <TouchableOpacity style={styles.btnVoltar} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.btnText}>VOLTAR</Text>
      </TouchableOpacity>

      <Image style={styles.logo} source={require('../images/delta_imo.png')}/>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08ffc8',
    alignItems: 'center'
  },
  detailsContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor:'#204969',
    borderRadius: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
    textAlign: 'center'
  },
  details: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'justify'
  },
  imageCasa:{
    resizeMode: 'stretch',
    borderRadius: 15,
    width: 300,
    height: 190,
    margin: 20,
  },
  btnText:{
    color:"white"
  },
  btnVoltar:{
    width:"80%",
    height:50,
    backgroundColor:"#204969",
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    marginBottom: 20
  },
  logo:{
    width: 100,
    height: 50,
    marginBottom: 40
  }
});

export default Detalhes;