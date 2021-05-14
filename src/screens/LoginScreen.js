import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from 'react-native';

class LoginScreen extends React.Component {
  state={
    email:"",
    password:""
  }
  login_click = () => {
    //alert(`Email: ${this.state.email}\nSenha: ${this.state.password}`)
    if(this.state.email == "emailoficial@gmail.com" && this.state.password == "13579")
      this.props.navigation.navigate('Home')
      else alert('Verifique se seu email ou sua senha estão corretos.')
  }
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/delta_imo.png')}/>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Senha..." 
            secureTextEntry={true}
            placeholderTextColor="#fff"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={this.login_click}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08ffc8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 300,
    height: 150,
    marginBottom: 40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#204969",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#204969",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
  },
  loginText:{
    color:"white"
  }
});

export default LoginScreen;