import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      
    
<Text style={{marginTop:100}} onPress={()=> props.navigation.navigate('Login')}>Xin Chao tuan</Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
 title:'Home'
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    alignContent:'center'
  },
 
});
