import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import {FontAwesome5} from '@expo/vector-icons';

export default function Header({navigation}) {
    return (
        <View style={styles.headerStl}>
        <Image 
        source={require('../../assets/images/ufrngram.png')}
        style={{
          marginTop: 5,
          height: 25,
          width: 110
        }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("ChatListScreen")}>
        <FontAwesome5
        name="paper-plane" size={23} color="black"
        />
        </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
    headerStl: {
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      padding: 5,
      alignItems: 'center',
    },
  });
  

