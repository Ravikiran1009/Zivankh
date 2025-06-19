import { View,Image } from 'react-native'
import React from 'react'
import { AppLogo, language } from '../../assets/images'
import { style } from './styles'
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