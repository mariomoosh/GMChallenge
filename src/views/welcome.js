import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View,StyleSheet } from "react-native-web";

const Welcome = ({ navigation })=>{    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to My Coding Challenge</Text>
            <Button style={styles.btnCommit} title="Fetch Solution Commits!" onPress={()=>{navigation.push("Commits")}} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    header:{
      fontSize:40,
      fontWeight: 'bold'
    },
    btnCommit:{
        width:"100",
        heigth:"100",
        margin:"10"
    }
  });
export default Welcome;