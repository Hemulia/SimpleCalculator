import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0); 
  const [result, setResult] = useState();
  const [history, setHistory] = useState([]);

  const pressPlus = () => {
    const plus = num1 + num2;
    setResult(plus);
    setHistory([...history, `${num1} + ${num2} = ${plus}`]);
  }

  const pressMinus = () => {
    const minus = num1 - num2;
    setResult(minus);
    setHistory([...history, `${num1} - ${num2} = ${minus}`]);
  }

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'space-evenly', top:100}}>
      <Text>Result: {result} </Text>
      <TextInput 
        type= "number" 
        placeholder= "0" 
        keyboardType = 'number-pad'
        value={num1} 
        onChange={e => setNum1(Number.parseInt(e.nativeEvent.text))}
      />
      <TextInput 
        type= "number" 
        placeholder= "0"
        keyboardType = 'number-pad' 
        value={num2} 
        onChange={v => setNum2(Number.parseInt(v.nativeEvent.text))}
      />
      <View style={{flexDirection:'row', }}>
        <Button title="+" onPress={pressPlus} />
        <Button title="-" onPress={pressMinus}/>
      </View>
      <Text>History</Text>
      <FlatList
        data={history}
        keyExtractor={item => history.indexOf(item).toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}