/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { getUniqueId, getMacAddress } from 'react-native-device-info';
import NetInfo from "@react-native-community/netinfo";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  state;
  constructor(props) {
    super(props)


    this.state = {
      mobileUid: null,
      ipAddress: null
    }
  }

  componentDidMount() {
    this._getDevices()
  }


  verifyUser() {
    // TODO: Verify User
  }



  _getDevices = () => {
    // console.log("in get Devices")
    getUniqueId().then(uid => {
      console.log("uid =>", uid)
      this.setState(
        {
          mobileUid: uid
        },
        console.log("state ==>", this.state)
      )

      NetInfo.fetch().then(info => {
        this.setState(prevState => ({
          ...prevState,
          ipAddress: info.details.ipAddress
        }))
      })
        .catch(err => {
          console.log("error fetching ipaddress: ", err)
        })
    })
      .catch(err => {
        console.error("Error Getting Device ID's ==> ", err)
      })
  }

  render() {
    console.log("state ==> ", this.state)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Click To get Device Level unique ID:
       </Text>
        <TouchableOpacity style={{ backgroundColor: 'black' }} onPress={() => console.log(this.state)}>
          <Text style={{ color: Colors.white }}>Click</Text>
        </TouchableOpacity>
        {this.state.ipAddress &&
          <Text style={{ marginVertical: 5 }}>{this.state.ipAddress}</Text>
        }

        {this.state.mobileUid &&
          <Text style={{ marginVertical: 5 }}>{this.state.mobileUid}</Text>
        }
      </View>
    );
  };
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
