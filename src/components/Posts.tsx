import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface DataFeed {
    id: String,
    title: String,
    favCount: Number,
    date: String
}


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        favCount: 5,
        date: '1/10/2021'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        favCount: 0,
        date: '1/10/2021'
    },
    {
        id: '5869fa0f-3da1-471f-bd96-14557fe29d72',
        title: 'Third Item',
        favCount: 3,
        date: '1/10/2021'
    },
    {
        id: 'bd7ahbea-c1b1-46c2-aed5-3ad53abb28bs',
        title: 'First Item',
        favCount: 5,
        date: '1/10/2021'
    },
    {
        id: '3ac68afc-a605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        favCount: 0,
        date: '1/10/2021'
    },
    {
        id: '58694a0f-3das-471f-bd96-14gs71e29d72',
        title: 'Third Item',
        favCount: 3,
        date: '1/10/2021'
    },
    {
        id: 'bd7agbea-c1b1-46c2-aed5-3ad53abb28bs',
        title: 'First Item',
        favCount: 5,
        date: '1/10/2021'
    },
    {
        id: '3ac48afc-a605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        favCount: 0,
        date: '1/10/2021'
    },
    {
        id: '586d4a0f-3das-471f-bd96-14gs71e29d72',
        title: 'Third Item',
        favCount: 3,
        date: '1/10/2021'
    },
  ];


export const Posts = () => {

    const renderItem = ( item: DataFeed ) => (
        <View style={ styles.item }>

            <View style={{ flexDirection: 'row'}}>
                <View style={{ marginRight: 10 }}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/42/static/media/react-native-logo.79778b9e.png' }}
                    />
                </View>

                <View>
                    <Text style={ styles.title }>{ item.title }</Text>
                    <Text style={ styles.date }>{ item.date }</Text>
                </View>
            </View>

            <View style={ styles.favContainer }>
                <Icon name="heart" size={18} /> 
                <Text style={ styles.favCount }>{ item.favCount }</Text>
            </View>

        </View>
      );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={ ({ item }) => renderItem( item ) }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    favContainer: {
        flexDirection: 'row',
        padding: 10,
        left: 10
    },
    favCount: {
        fontSize: 18,
        marginLeft: 5,
        bottom: 3
    },
    item: {
      flexDirection: 'row',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 10,
      justifyContent: "space-between"
    },
    title: {
      fontSize: 32,
    },
    date: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.3)'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
  });
