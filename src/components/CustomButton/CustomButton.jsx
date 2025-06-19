import {Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { style } from './styles';
const CustomButton = () => {
  return (
    <TouchableOpacity style={style.btnContainer}>
      <FontAwesome name="long-arrow-left" size={18} color="white"/>
      <Text style={style.btnText}>Back</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
