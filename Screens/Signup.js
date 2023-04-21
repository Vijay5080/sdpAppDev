import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import {useNavigation} from '@react-navigation/native'

export default function Signup() {
   
  const [name,setName]=useState("")
  const [nameErr,setNameErr]=useState("")
  const [pswd,setPswd]=useState("")
  const [pswdErr,setPswdErr]=useState("")
  const [mail,setMail]=useState("")
  const [mailErr,setMailErr]=useState("")
  const [num,setNum]=useState("")
  const [numErr,setNumErr]=useState("")
  
  const navigation=useNavigation()

  const onsubmit=()=>{
    
    var nameValid=false
    var pswdValid=false
    var mailValid=false
    var numValid=false
    if(name.length==0){
        setNameErr("UsrName Required");
    }
    else if(/[0-9]/.test(name)){
      setNameErr("Enter Proper Name");
    }
    else{
      setNameErr("");
      nameValid=true
    }
   
    if(pswd.length<6){
      setPswdErr("Enter Password length min. of 6 characters");
    }
    else if((/[0-9]/.test(pswd)==false) || (/[A-Z]/.test(pswd)==false)|| 
    (/[a-z]/.test(pswd)==false) ){
      setPswdErr("must be combintion of digit, Ucase,Lcase");
    }
    else{
      setPswdErr("");
      pswdValid=true;
    }

    if(mail.length==0){
      setMailErr("Email is required")
    }
    else if(mail.indexOf(' ')>=0){
      setMailErr("Cannot contain spaces")
    }
    else if(mail.includes('@')==false){
      setMailErr("Enter proper mail")
    }
    else{
      setMailErr("");
      mailValid=true;
    }

    if(num.length!=10){
      setNumErr("enter proper number");
    }
    else{
      setNumErr("");
      numValid=true
    }
   
    if(nameValid && pswdValid && mailValid && numValid){
      navigation.navigate("Login");
    }


  }
  return (
    <View style={styles.container}>
      <Text>Create the ccount here</Text>
      <TextInput style={styles.input}label="ÜserName" 
         left={<TextInput.Icon icon="äccount"/>}
         onChangeText={value=>setName(value)}
         />

      <Text style={styles.err}>{nameErr}</Text>

      <TextInput style={styles.input} label="Password" secureTextEntry 
      left={<TextInput.Icon icon="form-textbox-password"/>}
      onChangeText={value=>setPswd(value)}/>

        <Text style={styles.err}>{pswdErr}</Text>

      <TextInput style={styles.input}label="Email" 
      left={<TextInput.Icon icon="mail"/>}
      onChangeText={value=>setMail(value)}/>

      <Text style={styles.err}>{mailErr}</Text>
        
      <TextInput style={styles.input}label="Contact"  
      left={<TextInput.Icon icon="phone"/>}
      keyboardType="numeric"
      onChangeText={value=>setNum(value)}/>

      <Text style={styles.err}>{numErr}</Text>

      <Button style={styles.btn} title="SUBMIT" onPress={onsubmit}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor:"red",
    margin:10,
    height:30,
    width:40,
  },
  input:{
    backgroundColor:"blue",
    width:"50%",
    borderWidth:1,
    borderRadius:10,
    padding:5,
    margin:10,
  },
  err:{
    color:"red",
  }
});