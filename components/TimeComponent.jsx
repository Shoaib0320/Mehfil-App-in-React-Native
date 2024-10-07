import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const TimeComponent = ({ time, setTime }) => (
  <View style={styles.inputContainer}>
    <TextInput
      label="Time"
      value={time}
      onChangeText={setTime}
      style={styles.input}
      theme={{
        colors: {
          primary: '#C5A880', // Light gold for VIP touch
          background: '#f9f9f9', // Soft white background
          text: '#333', // Dark gray for readability
          placeholder: '#aaa', // Light gray for placeholder text
        },
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  // inputContainer: {
  //   margin: 10,
  //   padding: 5,
  //   backgroundColor: '#2c2c2e', // Darker background for contrast
  //   borderRadius: 10,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 6 },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 8,
  //   elevation: 8, // For Android shadow effect
  // },
  input: {
    margin: 10,
    backgroundColor: '#f5f5f5', // Soft light background for input
    borderRadius: 10, // Rounded corners
    borderWidth: 1,
    borderColor: '#E3C99C', // VIP gold border
    paddingHorizontal: 10,
    shadowColor: '#000', // Slight shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Elevation for Android shadow
  },
});

export default TimeComponent;
