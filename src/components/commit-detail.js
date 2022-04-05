import React from "react";
import { View,Text } from "react-native";
import styles
 from "../styles/commonStyles";
 
const CommitDetail = ({route,navigation}) =>{
    
    return (
        <View style={styles.cdetail}>
            <Text>Hash</Text>
            <Text>Author</Text>            
            <Text>Message</Text>
        </View>
    )
}

export default CommitDetail;