import React from "react";
import { SafeAreaView,Text } from "react-native";
import Card from "../../component/Card";
import useConnect from "../../hook/useConnect";


const Sale = () => {
    const {sale} = useConnect()
    return(
        <Card item={sale}/>
    )
}

export default Sale;