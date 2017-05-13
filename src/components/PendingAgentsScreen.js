/**
 * Created by Dat Tran on 4/27/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import BaseScreen from './BaseScreen'

class PendingAgentsScreen extends React.Component {

  render() {
    const {userInfo, language} = this.props
    console.log(this.props)
    return <View style={{flex: 1, backgroundColor: '#d67ed2', justifyContent: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Text>Pending Agents Screen</Text>
      </View>
    </View>
  }
}

export default connect(state => ({

}), dispatch => ({}))(PendingAgentsScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#1b59d0',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 25,
    marginHorizontal: 50,
    height: 42
  },
  minorButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  }
})