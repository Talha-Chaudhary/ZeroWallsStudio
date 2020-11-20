import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Text} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign'

export default (ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height,
}) => {
  return (
    
    <TouchableOpacity style={styles.container} onPress={() => onPress(index)}>
      <Image
        style={[styles.image, style, {height: height}]}
        source={local ? item[imageKey] : {uri: item[imageKey]}}
      />
      <TouchableOpacity style={styles.buttoncontainer2}>
        <IconAnt name={"menufold"} size={30} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttoncontainer3}>
        <IconAnt name={"search1"} size={30} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 230,
    resizeMode: 'stretch',
  },
   buttoncontainer2:{
    position: 'absolute',
    height:50,
    borderRadius:50,
    paddingVertical:10,
    alignSelf:'flex-end',
    justifyContent: 'center',
    marginBottom:1,
    paddingRight:5
  },
  buttoncontainer3:{
    position: 'absolute',
    height:50,
    borderRadius:50,
    paddingVertical:10,
    alignSelf:'flex-end',
    justifyContent: 'center',
    marginBottom:1,
    paddingRight:50
  },
});
