import React from "react";
import { SafeAreaView,Text,Button, FlatList,View} from "react-native";
import Card from '../../component/Card'
import useConnect from "../../hook/useConnect";

const Buy = () => {
    const {buy} = useConnect()
    return(
        <Card item={buy}/>
    )
}

export default Buy;