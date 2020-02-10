import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Text, TextInput, View, Alert, Image, Keyboard } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import axios from 'axios'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
//import * as SecureStore from 'expo-secure-store';
export default function Login(props) {
const [phone,setPhone]=useState()
async function sendOtp(){
  await axios({
    method: 'POST',
    url: 'http://192.168.1.228:3000/users/sendOTP',
    data: {
      phone:phone
    },
    headers: {
        'content-type': 'application/json'
    }
}).then((res) => {
 // console.log(res.data.request_id)
  if(res.data.status==='0'){
  props.navigation.navigate('CheckOtp',{idOtp:res.data.request_id,phone:phone})    
  }else {
    Alert.alert('Vui lòng thử lại sau')
  }
})
}

  return (

    <SafeAreaView style={{  alignItems: 'center', flex: 1 }}>


<Text style={{marginTop:'10%',width:'95%'}}>Anh vui lòng nhập số điện thoại để tiếp tục sử dụng dịch vụ </Text>


      <Image style={{width:wp('70%'),height:hp('30%')}} source={{uri:'https://bbs-final.s3-ap-southeast-1.amazonaws.com/logo.png'}}></Image>
      <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center' }}>
       

        <Text style={styles.textphone}>+84</Text>
        <TextInput style={styles.inputphone}  keyboardType='numeric'
          returnKeyLabel='Xong'
          returnKeyType='done'
          onSubmitEditing={Keyboard.dismiss} 
          onChangeText={(e)=>setPhone(e)}
          >
          </TextInput>

      </View>

      <GradientButton
        style={{ marginVertical: 10,marginTop:30, width: '80%' }}
        textSyle={{ fontSize: 20 }}

        gradientDirection="diagonal"
        height={50}
        
        onPressAction={()=> sendOtp() }
        radius={15}
        impact
        impactStyle='Light'
        text="Tiếp Tục"
        purpleViolet impact />
    </SafeAreaView>
  );
}

Login.navigationOptions = {
  title: 'Login',
};
const styles = StyleSheet.create({
  inputphone: {
    marginLeft:5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: wp('70%') , height: 30,
    fontSize: 18,
    textAlignVertical:'center'
  ,
  },
  textphone: {
    width: wp('10%'), height: 30, fontSize: 18,textAlignVertical:'center',paddingTop:2
  }

})