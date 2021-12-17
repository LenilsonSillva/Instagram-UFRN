import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';

export default function Stories() {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    
    const getData = async() => {
      const response = await fetch('https://mobile.ect.ufrn.br:3000/stories');
      const stories = await response.json();
      setStories(stories);
    }

    getData();

  }, [])
  
function renderItem({item}){
  return <View style={styles.story}>
      <Image style={styles.imgStory} source={{uri: item.imgPerfilUri}}></Image>
      <Text>{item.nomeUsuario}</Text>
    </View>
}

    return (
      <View style={styles.stories}>
        <FlatList
          data={stories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    stories: {
        flexDirection: 'row',
        height: 90,
        backgroundColor: '#fff'
      },
      story: {
        height: 90,
        width: 90,
        backgroundColor: '#fff',
        alignItems: 'center'
      },
      imgStory: {
        borderRadius: 35,
        width: 70,
        height: 70
      },
})

