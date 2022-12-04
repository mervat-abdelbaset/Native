import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Box from './Box';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Text style={styles.text}>Boxes with fdifferent colors</Text>
      <Box title={"cyan:#2aa198"} bgColor={"#2aa198"}></Box>
      <Box title={"Blue:#268bd2"} bgColor={"#268bd2"}></Box>
      <Box title={"Magenta:#d33682"} bgColor={"#d33682"}></Box>
      <Box title={"Orange:#cb4b16"} bgColor={"#cb4b16"}></Box>
      <Text style={styles.text}>Mervat Abd-Elbasset</Text>
      {/* <StatusBar style="auto"/> */}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    padding:20,
  },
  text:{
    marginBottom:20,
    fontWeight:'bold',
    fontSize:16,
  }

});
