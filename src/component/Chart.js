import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, Text, Dimensions, Image,
} from 'react-native'
import {
  ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation, ChartYLabel, ChartXLabel,
} from '@rainbow-me/animated-charts'
import { useSharedValue } from 'react-native-reanimated'
import { Svg, Rect } from 'react-native-svg'

const { width: SIZE } = Dimensions.get('window')

const Chart = ({
  currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline, 
}) => {
  const [chartReady, setChartReady] = useState(false)
  const latestCurrentPrice = useSharedValue(currentPrice)
  // console.log('============================')
  // console.log('poosit', sparkline[0])
  // console.log('============================')
  // if (sparkline.length === 0) {
  //   return <Text>Loading...</Text>
  // }
  useEffect(() => {
    latestCurrentPrice.value = currentPrice

    setTimeout(() => {
      setChartReady(true)
    }, 0)
  }, [])
  const formatDatetime = (value) => {
    'worklet'

    if (value === '') {
      return ''
    }
    const date = new Date(Number(value * 1000))
    const s = date.getSeconds()
    const m = date.getMinutes()
    const h = date.getHours()
    const d = date.getDate()
    const n = date.getMonth()
    const y = date.getFullYear()
    return `${y}-${n}-${d} ${h}:${m}:${s}`
  }
  const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30'
  const formatUSD = (value) => {
    'worklet'

    // if (value === '') {
    //   const formattedValue = `$${latestCurrentPrice?.value.toLocaleString('en-US', { currency: 'USD' })}`
    //   return formattedValue
    // }

    const formattedValue = `$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    return formattedValue
  }
  console.log('============================')
  console.log('current', chartReady)
  console.log('============================')
  return (
    <View>
      {/* <View style={{
        height: 320,
        width: 300,
        position: 'absolute',
        backgroundColor: 'red',
        bottom: 0,
        right: 0,
      }}
      /> */}
      <ChartPathProvider data={{
        points: sparkline,
        smoothingStrategy: 'bezier', 
        yRange: '',
      }}
      >
        <View style={styles.chartWrapper}>
          {/* Titles */}
          <View style={styles.titlesWrapper}>
            <View style={styles.upperTitles}>
              <View style={styles.upperLeftTitle}>
                <Image source={{ uri: logoUrl }} style={styles.image} />
                <Text style={styles.subtitle}>
                  {name}
                  {' '}
                  (
                  btc
                  )
                </Text>
              </View>
              <Text style={styles.subtitle}>7d</Text>
            </View>
            <View style={styles.lowerTitles}>
              <ChartYLabel
                format={formatUSD}
                style={styles.boldTitle}
              /> 
              <Text style={[styles.title, { color: priceChangeColor }]}>
                {Number(priceChangePercentage7d).toFixed(2)}
                %
              </Text>
            </View>
          </View>
          <View style={styles.chartLineWrapper}>
            {/* <ChartDot style={{ backgroundColor: 'black' }} /> */}
            <ChartPath height={320} strokeWidth={1} stroke="blue" width={SIZE - 32} />
            
          </View>
          {/* <ChartXLabel
            format={formatDatetime}
            style={{ backgroundColor: 'blue', color: 'red', margin: 4 }}
          /> */}
        
        </View>
      </ChartPathProvider>
    </View>
   
  )
}
const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 16,
  },
  titlesWrapper: {
    marginHorizontal: 16,
  },
  upperTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperLeftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#A9ABB1',
  },
  lowerTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
  chartLineWrapper: {
    marginTop: 40,
    alignItems: 'center',
  },
})
export default Chart
