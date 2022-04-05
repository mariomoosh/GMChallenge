import React,{useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import {Text, View, StyleSheet,SafeAreaView,FlatList,TouchableOpacity } from "react-native";
import {getCommits} from "../services/commits-services";

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const CommitsList = ({navigation})=>{
    const [commits,setCommits] = useState([]);
    useEffect(()=>{
      fetchData();
    },[]);
    
    const fetchData = async ()=>{
      const response = await getCommits();
      const listItems = response.map((item,index)=>{
        return {
          id:index,
          title:item.sha,
          author: item.author.login,
          message: item.commit.message
        }
      });
      setCommits(listItems);
    }
    
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>{
                                    navigation.push("CommitDetail",item);
                                }}>
            <Item title={item.title} />
        </TouchableOpacity>
        
      );
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>GM Coding Challenge</Text>
            <FlatList
                data={commits}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
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
    }
  });

export default CommitsList;
