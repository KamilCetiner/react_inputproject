import React, {useState, useEffect} from 'react';
import {SafeAreaView, TextInput, View, Text, TouchableOpacity, Alert} from 'react-native';

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        Alert.alert('Email and Password created', `Email: ${email} Password: ${password}`);
    }

    return (

        <SafeAreaView>
            <View>
                <Text>Hallo</Text>
                <View>
                <TextInput
                        value={email}
                        placeholder='E-posta adresinizi giriniz..'
                        onChangeText={(userText) => setEmail(userText)}
                        keyboardType="email-address"
                    />
                </View>

                <View>
                    <TextInput
                    value={password}
                    placeholder='Please Enter Your Password'
                    onChangeText={(userpassword) => setPassword(userpassword)}

                    />
                </View>

                <View>
                    <TouchableOpacity
                    onPress={login}
                    >

                    <Text> LOGIN </Text>

                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                    onPress= {()=> {
                        setEmail=("");
                        setPassword=("");
                    }}
                    >

                    <Text> RESET </Text>

                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>


    )
}
export default App;