import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function Login () {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function getLogin() {

        try {
            if (!user || !password) {
                return Alert.alert("Atenção", "Prencha todos os campos corretamente");
            };
            
            Alert.alert("Login realizado com sucesso!");
        } catch (error) {
            return error;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.topText}>MeuDinheiro</Text>
            <View style={styles.boxInput}>
                    
                <View style={styles.input}>
                    <TextInput 
                        style={styles.textInput} placeholder="Login"
                        onChangeText={setUser}
                    ></TextInput>
                </View>
                <View style={styles.input}>
                    <TextInput 
                        style={styles.textInput} placeholder="Password"
                        onChangeText={setPassword}
                    >
                    </TextInput>
                </View>
            </View>

            <View >
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => getLogin()}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.bottomText}>
                    <Text style={styles.bottomText}>
                        Não tem uma conta?
                    </Text>
                    <Text style={styles.bottomText}>
                        Cadastre aqui!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        

    )

}


const styles = StyleSheet.create ({
    container : {
        width: 300,
        height: 400,

    },

    topText: {
        fontSize: 50,
        fontWeight: 900,
        color: "green",
        marginBottom: 40
    },

    textInput: {
        borderColor: "gray",
        fontSize: 20,
        paddingLeft: 20,
        alignItems: "center",
        justifyContent: "center",

    },

    boxInput: {
        marginBottom: 15
    },

    input: {
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: "center",
        borderColor: "#4f6353",
        borderWidth: .4,
        borderRadius: 15,
        height: 50,
        marginBottom: 20
        
    },

    button: {
        backgroundColor: "green",
        borderRadius: 20,
        width: 150,
        height: 50,
        fontSize: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 20
    },

    bottom: {
        alignItems: "center",
        justifyContent: "flex-end",
        height: 300
    },
    bottomText: {
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20
    }


})
