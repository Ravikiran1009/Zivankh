import { View,Text,Image} from 'react-native'
import React from 'react'
import Header from '../Header/Header'
import { style } from './styles'
import { doctor, talk, uploadImg } from '../../assets/images'

const HomeScreen = () => {
  return (
    <View>
      <Header/>
     <View style={style.descriptionContainer}>
         <Text style={style.description}>
        Hi, Abc patient, Let's get started - I'm here to listen and help you feel better!
      </Text>
     </View>
     <View style={style.imgContainer}>
        <Image source={uploadImg}  style={style.uploadImg}/>
        <Image source={talk}  style={style.talk}/>
     </View>
     <Image source={doctor}  style={style.doctorImg} resizeMode='contain'/>
    </View>
  )
}

export default HomeScreen