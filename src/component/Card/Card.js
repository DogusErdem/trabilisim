import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import style from '../Styles/Style'

const BuyCard = ({item}) => {
  const amount = [1,2,10,4,5]
  return (
    <SafeAreaView style={style.container}>
      <View style={style.rows}>
        <Text style={style.title}>PRİCE</Text>
        <Text style={style.title_data}>{item}</Text>
        <Text style={style.title_data}>{item}</Text>
        <Text style={style.title_data}>{item}</Text>
        <Text style={style.title_data}>{item}</Text>
        <Text style={style.title_data}>{item}</Text>
      </View>
      <View style={style.rows}>
        <Text style={style.title}>AMOUNT</Text>
        <Text style={style.title_data}>{amount[0]}</Text>
        <Text style={style.title_data}>{amount[1]}</Text>
        <Text style={style.title_data}>{amount[2]}</Text>
        <Text style={style.title_data}>{amount[3]}</Text>
        <Text style={style.title_data}>{amount[4]}</Text>
      </View>
      <View style={style.rows}>
        <Text style={style.title}>TOTAL</Text>
        <Text style={style.title_data}>{Number(item)*(amount[0])}</Text>
        <Text style={style.title_data}>{Number(item)*(amount[1])}</Text>
        <Text style={style.title_data}>{Number(item)*(amount[2])}</Text>
        <Text style={style.title_data}>{Number(item)*(amount[3])}</Text>
        <Text style={style.title_data}>{Number(item)*(amount[4])}</Text>
      </View>
    </SafeAreaView>
  );
};

export default BuyCard;
