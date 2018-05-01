import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,Alert, Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    //currentImage: 'initial'
  }

  _generate = () => {
    //Alert.alert("hey")
      var path = '../assets/images',
      //files = ['ok.png', 'ok1.png', 'ok2.png', 'ok3.png', 'ok4.png', 'ok5.png'],
      files = ['ok','ok2', 'ok3', 'ok4', 'ok5', 'ok6', 'ok7', 'ok8', 'ok9']
      i = Math.floor(Math.random()*files.length);
      //var url = (path+"/"+files[0]);
      this.setState({currentImage: files[i]})
  }

  render() {
    const images = {
      ok: require('../assets/images/ok.png'),
      ok2: require('../assets/images/ok2.png'),
      ok3: require('../assets/images/ok3.png'),
      ok4: require('../assets/images/ok4.png'),
      ok5: require('../assets/images/ok5.png'),
      ok6: require('../assets/images/ok6.png'),
      ok7: require('../assets/images/ok7.png'),
      ok8: require('../assets/images/ok8.png'),
      ok9: require('../assets/images/ok9.png')
    }

     return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image style={styles.image}source={images[this.state.currentImage]} />
          <Button onPress={this._generate}
            title="Generate"
            color="#FF0000"
            accessibilityLabel="Press me to make a meme" />
        </View>
      </View>
     ) 
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'flex-end' 
  },
  contentContainer: {
    alignItems:"center"
  },
  image:{
    width: 300,
   height: 400
   

  }


})
