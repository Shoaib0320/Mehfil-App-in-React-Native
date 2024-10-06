// components/AddressComponent.js

import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AddressComponent = ({ address, setAddress }) => {
  return (
    <TextInput
      label="Address"
      value={address}
      onChangeText={setAddress}
      style={styles.textInput}
      theme={{
        colors: {
          primary: '#FFD700', // Golden color for label
          placeholder: '#FFD700', // Golden color for placeholder
          text: '#fff', // White text color for better contrast
          background: '#333', // Dark background for input
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 10,
    backgroundColor: '#555', // Darker background for input fields
    borderWidth: 1,
    borderColor: '#FFD700', // Golden border for text input
    borderRadius: 10, // Rounded corners for input
    height: 55, // Consistent height for input fields
  }
});

export default AddressComponent;
