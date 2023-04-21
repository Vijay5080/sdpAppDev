import { StyleSheet, Text, View,Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function Login() {

    const [number,setnumber]=useState("");
    const [numberErr,setnumberErr]=useState("");
    const [psswd,setpsswd]=useState("");
    const [psswdErr,setpsswdErr]=useState("");
    
    const navigation=useNavigation();
    const onSubmit=()=>{
        
      var numberValid=false
      var psswdValid=false

        if(number.length!=10){
          setnumberErr("enter proper number");
      }
        else{
          setnumberErr("");
          numberValid=true;
      }
       
        if(psswd.length<6){
            setpsswdErr("enter password conatining minimum 6 characters");
        }
        else if((/[0-9]/.test(psswd)==false) || (/[A-Z]/.test(psswd)==false) || (/[a-z]/.test(psswd)==false) ){
            setpsswdErr("must be combination of digit,Ucase,Lcase");
        }
        else{
            setpsswdErr("");
            psswdValid=true;
        
        }
       
        if(numberValid && psswdValid ){
            navigation.navigate("Homepage")
        }
      }
      return (
        <View style={styles.container}>
          <Text>LOGIN</Text>
    
          <TextInput style={styles.btn}label="Phone" left={<TextInput.Icon icon="phone"/>}
          onChangeText={value=>setnumber(value)}
          keyboardType="numeric"/>
          <Text>{numberErr}</Text>
         
          <TextInput style={styles.btn}label="password" left={<TextInput.Icon icon="form-textbox-password"/>} 
             onChangeText={value=>setpsswd(value)}/>
            <Text>{psswdErr}</Text>
          
         
    
          <Button style={styles.btn} title="Submit" onPress={onSubmit}></Button>
          
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#add8e6',
        alignItems: 'center',
        justifyContent: 'center',
      },
      btn:{
        backgroundColor:"#fff",
        margin:10,
        height:60,
        width:300,
        marginBottom : 10, 
        borderWidth: 1,
        borderRadius: 10,
        padding: 5
      }
    });