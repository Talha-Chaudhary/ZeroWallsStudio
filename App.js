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
            onPress={item => alert("Main")}
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
            <TouchableOpacity >
              <Text style={styles.buttontext}>SIGNUP NOW!</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container2}>
            <Text style={styles.upperText3}>Most Recent Classes</Text>
            <FlatListSlider
            data={this.state.data}
            width={175}
            indicator = {false}
            component={<Preview />}
            autoscroll = {false}
            onPress={item => alert("Most Recent Classes")}
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
            onPress={item => alert("Feature Classes")}
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
            onPress={item => alert("Popular classes")}
            contentContainerStyle={styles.contentStyle}
          />
          </View>

          <View style={styles.container3}>
            <Text style={styles.upperText1}>READY TO GET STARTED</Text>
            <Text style={styles.upperText2}>Create an account to book classes or attend event.</Text>

            <View style={styles.container5}>
              <TouchableOpacity style={styles.buttoncontainer2}>
                <Text style={styles.buttontext}>SIGNUP NOW!</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttoncontainer3}>
                <Text style={styles.buttontext}>SUPPORT</Text>
              </TouchableOpacity>
            </View>            
          </View>

          <View style={styles.container4}>

            <View style={styles.container6}>
              <Text style={styles.text3}>Menu</Text>

              <TouchableOpacity>
                <Text style={styles.buttontext3}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.buttontext3}>Single class</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.buttontext3}>Instructor</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.buttontext3}>Support / FAQs</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.buttontext3}>Studio info</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container6}>
              <Text style={styles.text3}>Legal</Text>

              <TouchableOpacity>
                <Text style={styles.buttontext3}>Privacy</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.buttontext3}>Term</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container6}>
            <Text style={styles.text3}>Connect</Text>

            <TouchableOpacity>
                  <Text style={styles.buttontext3}>About</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.buttontext3}>Twitter</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.buttontext3}>Instagram</Text>
              </TouchableOpacity>
            </View>
            
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
buttontext3:{
  textAlign:'center',
  color:'#808080',
  fontSize:15
},
buttontext2:{
  textAlign:'center',
  color:'#00ff00',
  fontSize:35
},
text3:{
  textAlign:'center',
  color:'#ffffff',
  fontSize:19,
  marginBottom: 10
},
container2:{
  marginTop:20,
  backgroundColor:'#000000',
},
container3:{
  backgroundColor:'#fed8b1',
  alignItems: 'center',
},
container4:{
  backgroundColor:'#000000',
  flexDirection: 'row',
  justifyContent: 'center'
},
container5:{
  flexDirection: 'row',
  justifyContent : 'center',
  marginBottom:30
},
container6:{
  marginLeft: 20
},
buttoncontainer2:{
  height:50,
  borderRadius:50,
  backgroundColor : '#ffffff',
  width: "30%",
  justifyContent: 'center'

},
buttoncontainer3:{
  height:50,
  borderRadius:50,
  backgroundColor:'#ffffff',
  marginLeft:20,
  width: "30%",
  justifyContent: 'center'
}
});
