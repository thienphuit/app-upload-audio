import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import Chart from '../../component/Chart'
import { getMarketData } from '../../services/ctyptoService'

export const { width: SIZE } = Dimensions.get('window')

const HomeScreen = () => {
  const [data, setData] = useState([])
  const [selectedCoinData, setSelectedCoinData] = useState(null)
  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData()
      setData(marketData)
    }

    fetchMarketData()
  }, [])
  console.log('============================')
  console.log('dataa', data[0])
  console.log('============================')
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 24 }}> 
      <View>
        <Chart
          currentPrice={data[0]?.current_price}
          logoUrl={data[0]?.image}
          name={data[0]?.name}
          symbol={data[0]?.symbol}
          priceChangePercentage7d={data[0]?.price_change_percentage_7d_in_currency}
          sparkline={data[0]?.sparkline_in_7d.price}
        />
      </View>
    </SafeAreaView>
   
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
export default HomeScreen
