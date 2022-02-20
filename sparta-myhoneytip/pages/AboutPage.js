import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import about from '../assets/aboutImage.png'

export default function AboutPage() {
    return (
      <View style={styles.container}>

          <Text style={styles.headline}>HI!환영합니다</Text>
        
        <View style={styles.centerBackgroud}>
            <Image source={about} style={styles.aboutImage}/>
            <Text style={styles.text1}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={styles.text2}>배울수록 재밌네요 끝까지 완주하겠습니다!🔥 🥳 🤓</Text>
            <TouchableOpacity style={styles.touch}><Text style={styles.touchText}>인스타계정</Text></TouchableOpacity>
        </View>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9966FF',
    },
    headline: {
        fontSize: 40,
        textAlign:"center",
        color: "white",
        marginTop: 50,
        padding: 20,
        fontWeight: "bold"
    },
    centerBackgroud: {
        marginTop: 30,
        marginBottom: 30,
        alignSelf: "center",
        backgroundColor: "white",
        width : "80%",
        height: "65%",
        borderRadius: 30
    },
    aboutImage: {
        alignSelf:"center",
        width: 150,
        height: 150,
        borderRadius: 30,
        marginTop: 75
    },
    text1: {
        fontSize: 25,
        fontWeight: "bold",
        padding : 20,
        textAlign: "center"
    },
    text2: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 20,
        textAlign: "center"
    },
    touch:{
        backgroundColor:"orange",
        width: "40%",
        height: "10%",
        borderRadius: 15,
        alignItems: "center",
        alignSelf: "center"
    },
    touchText:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding: 15
    }

  });