import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppDatePicker from "./components/pickers/DatePicker";

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <AppDatePicker />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
