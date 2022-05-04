import React, { useState, useEffect } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'

const CreateUserScreen = (props) => {

  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChangeText = (name, value) => {
    setInputState({ ...inputState, [name]: value });
  }

  const saveNewUser = async () => {
    if(inputState.name === '') {
      alert('Please provide a name');
    } else {
      try {
        await firebase.db.collection('users').add({
          name: inputState.name,
          email: inputState.email,
          phone: inputState.phone,
        });

        props.navigation.navigate("UsersList");
      } catch(error) {
        console.log(error)
      }
    }
  }

  return (
    <ScrollView style={styles.container}>

      <View style={styles.inputGroup}>
        <TextInput 
          placeholder='Name user'
          onChangeText={ (value) => handleChangeText('name', value) }
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput 
          placeholder='Email user'
          onChangeText={ (value) => handleChangeText('email', value) }
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput 
          placeholder='Phone user'
          onChangeText={ (value) => handleChangeText('phone', value) }
        />
      </View>
      <View style={styles.inputGroup}>
        <Button title='Save User' onPress={ () => saveNewUser() }/>
      </View>

      <Button 
        title="See all users" 
        color="#ACADAF"
        onPress={() => props.navigation.navigate('UsersList')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  }
});

export default CreateUserScreen