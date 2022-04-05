import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
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
    cdetail:{
        width:"20%",
        backgroundColor: "gray",
        alignContent:"center",
        padding: "20"
    }
  });

export default styles;