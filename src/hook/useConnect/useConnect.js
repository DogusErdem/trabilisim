import React,{useState,useEffect} from "react";

const useConnect = () => {
    const [sale,setSale] = useState()
    const [buy,setBuy] = useState()
    const [err,setError] = useState()
    const [loading,setLoading] = useState(false)

    const fetchData = () =>{
        var ws = new WebSocket ("wss://ws.kraken.com/");
         ws.onopen =()=>{
         ws.send('{"event":"subscribe", "subscription":{"name":"book"}, "pair":["XBT/USD"]}')
     }
        ws.onmessage=(e) => {
        const datas = (JSON.parse(e.data))
        if(datas[1])
        {if(datas[1].a) 
        setSale(datas[1].a[0][0])
        else if(datas[1].b)
        setBuy(datas[1].b[0][0])}
     }
    }   
        useEffect(()=>{
        fetchData();
    },[])

   
   return {sale,buy,err,loading}
}

export default useConnect;