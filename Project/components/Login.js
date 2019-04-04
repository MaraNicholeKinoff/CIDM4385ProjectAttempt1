import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
        <Text> This is the login page. </Text>
        <Text> Click the button below to go to your account. </Text>
        <Button
          title="Account"
          onPress={() =>
            this.props.navigation.navigate('Account')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});