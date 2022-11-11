import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import users from '../../assets/data/users';

const ChatScreen = (props) => {
  const {name, image, bio} = props.user;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={{fontWeight: 'bold', fontSize: 24, color: '#F63A6E'}}>Chats</Text>
      <View style={styles.user}>
      <Image source={{ uri: image,}} style={styles.image}/>
      </View>
      <View style={styles.tester}>
      <Text style={styles.name}>{name}</Text>
      </View>
      
    
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
      width: '100%',
      flex: 1,
      padding: 5,
    },
    card: {
        width: 330,
        height: 510,
        borderRadius: 20,
        backgroundColor: '#fafafa',

      },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
    },
    users: {
      flexDirection: 'column',
      flexWrap: 'wrap',
      flex: 1,
    },
    user: {
      width: 58,
      height: 58,
      margin: 10,
      borderRadius: 50,
  
      borderWidth: 2,
      padding: 3,
      borderColor: '#b5b5b5',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
    },
    name: {
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold',
    },
    tester: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',

    },
  });

export default ChatScreen