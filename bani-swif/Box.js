import { View, Text } from 'react-native'
import React from 'react'
import styles from "./style";
const Box = ({bgColor,title}) => {
  return (
    <View 
    style={[
        styles.buttonStyle,
        {
            backgroundColor:bgColor,
        },
    ]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Box;