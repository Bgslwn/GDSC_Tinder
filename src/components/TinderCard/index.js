import React from "react";
import { Text, ImageBackground, View, StyleSheet } from 'react-native';

const Card = (props) => {
    const {name, image, bio} = props.user;
    return (
    <View style={styles.card}>
      <ImageBackground 
          source={{ 
            uri: image,
          }}
          style={styles.image}>
            <View style={styles.cardInner}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>{bio}</Text>
            </View>
          </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
      width: '100%',
      height: '100%',
      borderRadius: 20,
      backgroundColor: '#fefefe',
      
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity:  0.21,
      shadowRadius: 7.68,
      elevation: 10
   
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 20, 
      overflow: 'hidden',
  
      justifyContent: 'flex-end',
    },
    cardInner: {
      padding: 15,
      //backgroundColor: 'red',
    },
    name: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
    },
    bio: {
      fontSize: 15,
      color: 'white',
      lineHeight: 25,
  
    }
  });
export default Card;