import React, { useRef } from 'react'
import { Image } from 'react-native'
import { youtube } from '../../assets/images'
  
const ImageIndex = () => {
  const ChipStyles = useRef({
    position: 'absolute',
    top: Math.floor(Math.random() * 50),
    left: '50%',
    transform: 'translate(-50%, -50%)',
  })

  return (
    <Image style={ChipStyles.current} source={youtube} />
  )
}
    
export default ImageIndex
