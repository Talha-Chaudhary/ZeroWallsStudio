import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Preview from './src/Preview';
import FlatListSlider from './src/FlatListSlider'; 

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image:
            'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
        {
          image:
            'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
          desc:
            'Red fort in India New Delhi is a magnificient masterpeiece of humans',
        },
        {
          image:
            'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          desc:
            'Sample Description below the image for representation purpose only',
        },
        {
          image:
            'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          desc:
            'Sample Description below the image for representation purpose only',
        },
        {
          image:
            'https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
          desc:
            'Sample Description below the image for representation purpose only',
        },
      ],
    };
  }

  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatListSlider
            data={this.state.data}
            timer={2000}
            onPress={item => alert(JSON.stringify(item))}
            indicatorContainerStyle={{position:'absolute', bottom: 20}}
            indicatorActiveColor={'#8e44ad'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={30}
            autoscroll = {true}
            animation
          />
          <View style={styles.upperContainer}>
            <Text style={styles.upperText1}>ZERO WALLS FOR STUDIO</Text>
            <Text style={styles.upperText2}>Zero walls fitness is the meeting place between those who love fitness</Text>
            <TouchableOpacity style={styles.buttoncontainer2}>
              <Text style={styles.buttontext}>SIGNUP NOW!</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container2}>
            <Text style={styles.upperText3}>Most Recent Classes</Text>
            <FlatListSlider
            data={this.state.data}
            width={275}
            indicator = {false}
            component={<Preview />}
            autoscroll = {false}
            onPress={item => alert(JSON.stringify(item))}
            contentContainerStyle={styles.contentStyle}
          />
          </View>

          <View style={styles.container2}>
            <Text style={styles.upperText3}>Feature Classes</Text>
            <FlatListSlider
            data={this.state.data}
            width={275}
            indicator = {false}
            component={<Preview />}
            autoscroll = {false}
            onPress={item => alert(JSON.stringify(item))}
            contentContainerStyle={styles.contentStyle}
          />
          </View>

          <View style={styles.container2}>
            <Text style={styles.upperText3}>Most Popular Classes</Text>
            <FlatListSlider
            data={this.state.data}
            width={275}
            indicator = {false}
            component={<Preview />}
            autoscroll = {false}
            onPress={item => alert(JSON.stringify(item))}
            contentContainerStyle={styles.contentStyle}
          />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  contentStyle: {
    paddingHorizontal: 16,
  },
  upperText1:{
    textAlign:'center',
    color:'#000000',
    fontSize:20,
    marginTop:10
 },
 upperText2:{
    textAlign:'center',
    color:'#000000',
    fontSize:10,
    marginBottom:30
 },
 upperText3:{
  textAlign:'left',
  color:'#ffffff',
  fontSize:20,
  marginBottom: 1,
  marginLeft: 20,
  marginTop:30
},
 buttontext:{
  textAlign:'center',
  color:'#000000',
  fontSize:15
},
buttontext2:{
  textAlign:'center',
  color:'#00ff00',
  fontSize:35
},
container2:{
  marginTop:20,
  backgroundColor:'#000000',
},
buttoncontainer:{
  position: 'absolute',
  height:50,
  borderRadius:50,
  backgroundColor:'#800080',
  paddingVertical:10,
  justifyContent:'center',
  marginBottom:1,
  width: "30%",
}
});
