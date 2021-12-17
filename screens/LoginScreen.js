import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation}) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const logar = async() => {

        const headerOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user, password})
        }
        const response = await fetch('https://mobile.ect.ufrn.br:3000/login', headerOptions);

        if(response.status === 200){
            const token = await response.text();

            await AsyncStorage.setItem('token', token);
            navigation.navigate('HomeScreen');

        } else {
            console.log(response.status)
            Alert.alert(
                'Erro',
                'Usuário ou senha inválidos'
            )
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <View style={styles.loginContainer}>
                <TextInput style={styles.input} placeholder="Usuário..." value={user} onChangeText={setUser}/>
                <TextInput style={styles.input} placeholder="Senha..." secureTextEntry={true} value={password} onChangeText={setPassword}/>
                <TouchableOpacity style={styles.senderButton} onPress={() => logar()}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    loginContainer: {
        justifyContent: 'center',
        margin: 20,
        padding: 40,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginTop: 20,
        borderColor: 'grey',
        borderRadius: 5,
        paddingLeft: 10,
    },
    senderButton: {
        backgroundColor: 'blue',
        padding: 10,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'center'
    }
})
