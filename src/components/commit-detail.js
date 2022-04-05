import React from "react";
import { View,Text } from "react-native";
import styles
 from "../styles/commonStyles";
 
const CommitDetail = ({route,navigation}) =>{
    const {id,title,author,message} = route.params;
    return (
        <View style={styles.cdetail}>
            <Text>Hash: {title}</Text>
            <Text>Author {author}</Text>            
            <Text>Message {message}</Text>
        </View>
    )
}

export default CommitDetail;