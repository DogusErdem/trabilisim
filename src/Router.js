import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

import Buy from './screens/Buy'
import Sale from './screens/Sale'
const Tab = createBottomTabNavigator();

const Router = () => { 
    return(
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({color,size})=> {
                let iconName;

                if(route.name=='BuyScreen'){
                    iconName="arrow-down-outline"
                }else if (route.name=='SaleScreen'){
                    iconName='arrow-up-outline'
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
            <Tab.Screen name='BuyScreen' component={Buy} options={{
                tabBarStyle:{height:50},
                title:'ALIŞ EMİRLERİ',
                headerTitleAlign:'center',
                headerTitleStyle:{fontSize:25,fontWeight:'bold',textDecorationLine:'underline'}
            }}/>
            <Tab.Screen name='SaleScreen' component={Sale} options={{
                title:'SATIŞ EMİRLERİ',
                headerTitleAlign:'center',
                headerTitleStyle:{fontSize:25,fontWeight:'bold', textDecorationLine:'underline'}
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
    )
}

export default Router;