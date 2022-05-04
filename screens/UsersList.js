import React, { useEffect, useState } from 'react'
import { Button, ScrollView  } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import firebase from '../database/firebase'

const UsersList = (props) => {

  const [users, setUsers] = useState([]);

  useEffect( () => {
    firebase.db.collection('users').onSnapshot(querySnapshot => {
      const users = [];

      querySnapshot.docs.forEach( (doc) => {
        const {name, email, phone} = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
        })
      })

      setUsers(users);
    })
  }, [])
  

  return (
    <ScrollView>
      <Button 
        title="Create user" 
        onPress={() => props.navigation.navigate('CreateUserScreen')}
      />

      {users.map((user) => {
        return (
          <ListItem 
            key={user.id}  
            bottomDivider 
            onPress={() => props.navigation.navigate("UserDetailScreen", {
              userId: user.id
            })}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  )
}

export default UsersList