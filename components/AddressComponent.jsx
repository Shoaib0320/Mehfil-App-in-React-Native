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
          primary: '#BFA76F', // Light golden shade for label
          placeholder: '#BFA76F', // Light golden for placeholder
          text: '#333', // Dark text color for contrast with light theme
          background: '#F7F6F3', // Very light cream background
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    backgroundColor: '#FAF9F6', // Light cream background for input fields
    borderWidth: 1,
    borderColor: '#BFA76F', // Light golden border for input
    borderRadius: 12, // Smooth rounded corners for a luxurious feel
    height: 55, // Consistent height for input fields
    paddingHorizontal: 15, // Padding for a comfortable input field
    shadowColor: '#BFA76F', // Light shadow for VIP effect
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android shadow effect
  }
});

export default AddressComponent;
