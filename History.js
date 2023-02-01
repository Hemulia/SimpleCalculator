import React from'react';
import { View, Text, FlatList } from'react-native';

export default function History({route,navigation}) {
    const {history} = route.params;

    return (
    <View style={{flex:1, alignItems:'center', justifyContent:'space-evenly', top:100}}>
      <Text>History</Text>
      <FlatList
        data={history}
        keyExtractor={item => history.indexOf(item).toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>

    )
}