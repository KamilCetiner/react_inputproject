import React, {useState, useEffect} from 'react';
import {SafeAreaView, TextInput, View, Text, TouchableOpacity, Alert, StyleSheet, Dimensions, Image, KeyboardAvoidingView} from 'react-native';


const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("")

    const login = () => {
        Alert.alert('YOUR INFORMATION ', `Email: ${email} Password: ${password} Name: ${name} Phone:${number}`);
    }

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -110 ;

    return (

        <SafeAreaView style={{flex:1, justifyContent:'space-around', backgroundColor: '#eceff1'}}>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}
            style={styles.keyboard}>


            <Image
            source={{uri:'https://www.eclatmediasolution.com/asset/p8.png'}}
            style={{width: Dimensions.get('window').width * 1.15,
            height: Dimensions.get('window').height * 0.30,
            resizeMode:'contain', marginBottom:50

           }}/>

                
                <View style={styles.container_input}>
                <View>

                    <TextInput
                    style={styles.inputs}
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder='Please enter your name'
                    onChangeText={(userName) => setName(userName)}

                    />
                </View>

                <View>
                    <TextInput
                    style={styles.inputs}
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    value={number}
                    placeholder='Please enter your phone number'
                    onChangeText={(userNumber) => setNumber(userNumber)}

                    />
                </View>
                    
                <View>
                <TextInput
                        style={styles.inputs}
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        value={email}
                        placeholder='E-posta adresinizi giriniz..'
                        onChangeText={(userText) => setEmail(userText)}
                        keyboardType="email-address"
                    />
                </View>
                
                <View>
                    <TextInput
                    style={styles.inputs}
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    value={password}
                    placeholder='Please Enter Your Password'
                    secureTextEntry={true}
                    
                    onChangeText={(userpassword) => setPassword(userpassword)}

                    />
                </View>

                </View>

                
                <View style={styles.container_button}>

               
                    <View style={styles.touch_view}>
                        <TouchableOpacity
                        style={styles.touch}
                        
                        onPress={login}
                        >

                        <Text  style={styles.texts}> LOGIN </Text>

                        </TouchableOpacity>
                    </View>

                    <View style={styles.touch_view}>
                        <TouchableOpacity
                        style={styles.touch}
                        onPress= {()=> {
                            setEmail=("");
                            setPassword=("");
                        }}
                        >

                        <Text style={styles.texts}> RESET </Text>

                        </TouchableOpacity>
                    </View>
                </View>

                
                </KeyboardAvoidingView>
            
        </SafeAreaView>


    )
}
export default App;

const styles = StyleSheet.create({
    container_button:{
        
        alignSelf:'center',
        marginTop: -50
        
    },
    container_input:{

    width: Dimensions.get('window').width * 0.80,
    height: Dimensions.get('window').height * 0.40,
    alignSelf:'center',
    marginTop:5
    },
    texts:{
        fontSize:20,
        color:'#37474f',
        textAlign: 'center',
        paddingTop:7,
        fontWeight: 'bold'
    },
    inputs:{
        borderWidth: 0.5,
        marginBottom: 10,
        borderRadius:5,
        borderColor: '#90a4ae'
    },
    touch:{
    width: Dimensions.get('window').width * 0.50,
    height: Dimensions.get('window').height * 0.06,
    backgroundColor:'#b0bec5',
    borderRadius: 5
    

    },
    touch_view:{
        marginBottom:10,
        
    },
    keyboard:{
        
    }

})