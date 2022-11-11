import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import users from '../../assets/data/users';

const ChatScreen = (props) => {
  const {name, image, bio} = props.user;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={{fontWeight: 'bold', fontSize: 24, color: '#F63A6E'}}>Messages</Text>
      <View style={styles.containerTester}>
      <View style={styles.user}>
      <Image source={{ uri: image,}} style={styles.image}/>
      </View>
      <View style={styles.tester}>
      <Text style={styles.name}>{name}</Text>
      <Text> Say Hi!</Text>
      </View>
      </View>
    </View> 
    </View>
  )
}

const styles = StyleSheet.create({
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
      flexDirection: 'row',
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
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      height: 30,
      justifyContent: 'center',
    },
    tester: {
      width: 340,
      height: 40,
      borderRadius: 20,
      /*backgroundColor: 'red',*/
      justifyContent: 'space-between',
      justifyContent: 'flex-end',
      marginTop: -55,
      paddingLeft: 75,
    },

  });

export default ChatScreen