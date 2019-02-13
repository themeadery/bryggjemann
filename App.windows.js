// 	<ImageBackground source={require('./assets/images/background.png')} style={{ flex: 1, justifyContent: 'center', width: null, height: null }}>

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
//  ImageBackground,
  Button,
  Alert
} from 'react-native';

const instructions =
  'Press Ctrl+R to reload,\n' +
  'Shift+F10 for dev menu';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
			<Text style={styles.welcome}>
			  Welcome to Bryggjemann!
			</Text>
			<Image source={require('./assets/images/background.png')} />
			<Button
				onPress={() => {
					Alert.alert('You tapped the button!');
				}}
				title="Learn More"
				color="#841584"
				accessibilityLabel="Learn more about this button"
			/>
			<Text style={styles.instructions}>
			  {instructions}
			</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4f9db',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
