import { View, Text, Image } from 'react-native'
import React from 'react'
import { AppLogo, language } from '../../assets/images'
import { style } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import CustomButton from '../../components/CustomButton/CustomButton';
const Header = () => {
  return (
    <View style={style.headerContainer}>
      <Image source={AppLogo} style={style.applogo}/>
      <View style={style.subContainer}>
        <Image source={language} style={style.languageImg} resizeMode='contain'/>
        <CustomButton/>
      </View>
    </View>
  )
}

export default Header