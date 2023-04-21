import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';


class Login extends Component{
  constructor(args){
    super(args);
    this.state={
      username:'',
      passwd:''
    }

  }
  onLogin(){
    const {username,passwd}=this.state
    if(username=="9916945080" && passwd=="abc"){
      Alert.alert("You logged in!")
    }
    else{
      Alert.alert("error in credentials")
    }
  }


  render(){
    return(
      <View style={styles.container}>
      <TextInput
      placeholder='Phone Number'
      style={styles.input}
      onChangeText={(username)=>this.setState({username})}
      />
      <TextInput
      placeholder='Password' 
      style={styles.input}
      secureTextEntry={false}
      onChangeText={(passwd)=>this.setState({passwd})}
      />
      <Button 
      title ='login'
      onPress={this.onLogin.bind(this)}
      />
      </View>);
  }
  
}

styles = StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#fff'

},
input:{
  width:200,
  height:50,
  padding:10,
  marginBottom:20,
  borderWidth:1,
  borderRadius:30,
}
});