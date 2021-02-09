import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
}from'react-native'

export default function Registretionform() {
  return (
    <View style={styles.regform}>
      <Text style={styles.header}>signIn/signUp</Text>
      <br></br>
      <TextInput style={styles.input} placeholder="FirstName" autoFocus/> 
      <TextInput style={styles.input} placeholder="LastName" autoFocus/>
      <TextInput style={styles.input} placeholder="email"/>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry="true"/>
      
      <TouchableOpacity style={styles.buttom}>
      <Text style={styles.buttonTxt}>submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    regform:{
        alignSelf:'stretch',
        paddingLeft:40,
        paddingRight:40,
    },
    header:{
        borderButtomColor:'#dfe30b',
        color :'#dfe30b',
        borderBottomWidth:1,
        paddingButtom:10,
        marginButtom:10,
        fontSize:20 ,
        fontStyle:'oblique',
      
    },
    input:{
      padding:30,
      marginBottom:10,
      borderColor:'#dfe30b',
      borderWidth:1,
    },
    buttom:{
      backgroundColor:'#dfe30b',
      alignItems:'center', 
      padding:30,
    },
    buttonTxt:{
      color:'#7358a1',
      fontWeight:'bold',
      fontStyle:'oblique',

    }

 
})
