
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity, Keyboard,KeyboardAvoidingView,
  View,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Dimensions } from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input'
import axios from 'axios'

export default function ChecktOtp(props) {
  const Header=()=>{
    if(Dimensions.get('window').width<=360){
      return(
        <Image style={{ width:wp('90%'), height:hp('40%') }} source={{ uri: 'https://bbs-final.s3-ap-southeast-1.amazonaws.com/logo.png' }}></Image>
      )
    }else{
      return(
      <Image style={{ width:'90%', height:'35%' }} source={{ uri: 'https://bbs-final.s3-ap-southeast-1.amazonaws.com/logo.png' }}></Image>
      )

    }
  }
  async function checkOtp(otp) {

    await axios({
      method: 'POST',
      url: 'http://192.168.1.228:3000/users/checkOTP',
      data: {
        id: props.navigation.getParam('idOtp', 'NO-NAME'),
        code: otp
      },
      headers: {
        'content-type': 'application/json'
      }
    }).then((res) => {
         if(res.data.status==='0'){ alert('Thành công')}else{alert('thất bại')}
    })
  }

  async function confirmOtp() {
    await axios({
      method: 'POST',
      url: 'http://192.168.1.228:3000/users/confirmOTP',
      data: {
        id: props.navigation.getParam('idOtp', 'NO-NAME'),
        phone: props.navigation.getParam('phone', 'NO-NAME'),
      },
      headers: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      if (res.data.status === '0') {
        props.navigation.navigate('Main')
      } else { alert('Thử lại sau') }
    })
  }
  return (
    < KeyboardAvoidingView style={{flex:1, alignItems: 'center',
}} behavior='padding'>
    <View style={styles.container}>
      <Header></Header>
      <OTPInputView
        style={{ width: '70%', height: 200 }}
        pinCount={6}
        autoFocusOnLoad={false}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code => {
          checkOtp(code)
        })}
      />
      <Text onPress={() => {
    console.log(  )
      }}>Gửi lại mã</Text>
    </View>
    </KeyboardAvoidingView>
  );
}

ChecktOtp.navigationOptions = {
  title: 'Nhập otp'
};


const styles = StyleSheet.create({
  container: {
    marginTop:30,
    width:'100%',
    height:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center'
  },
   borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },

});
