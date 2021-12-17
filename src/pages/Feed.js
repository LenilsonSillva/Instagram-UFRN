import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Feed() {

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    
    const getData = async() => {
      const response = await fetch('https://mobile.ect.ufrn.br:3000/feed');
      const feed = await response.json();
      setFeed(feed);
    }

    getData();

  }, [])

function renderItem({item}){
  return <View style={styles.post}>
  <View style={styles.postHeader}>
    <View style={styles.phEsquerda}>
        <Image style={styles.phImage} source={{uri: item.imgPerfilUri}}></Image>
        <Text>{item.nomeUsuario}</Text>
    </View>
    <FontAwesome5
    name="ellipsis-h" size={16} color="black"
    />
  </View>
  <Image style={styles.postImg} aspectRatio={item.aspectRatio} source={{uri: item.imgPostUri}}/>
  <View style={styles.footer}>
  <FontAwesome5 style={styles.foosterIcon} name="heart" size={28} color="black"/>
  <FontAwesome5 style={styles.foosterIcon} name="comment" size={28} color="black"/>
  </View>
</View>
}

    return (
        <View style={styles.feed}>
        <FlatList
          data={feed}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
}
const styles = StyleSheet.create({
    feed:{
        flex: 1,
      },
      post: {
    
      },
      postHeader:{
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5
      },
      phImage:{
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 5
      },
      phEsquerda:{
          flexDirection: 'row',
          alignItems: 'center',
      },
      postImg: {
          width: '100%',
          height: undefined,

      },
      footer: {
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 5,
      },
      foosterIcon: {
          margin: 5,
      }
})

