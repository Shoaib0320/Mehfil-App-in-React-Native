// components/OrganizerComponent.js

import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const OrganizerComponent = ({ organization, setOrganization }) => {
  return (
    <TextInput
      label="Organizer"
      value={organization}
      onChangeText={setOrganization}
      style={styles.textInput}
      theme={{
        colors: {
          primary: '#A0A0A0', // Golden color for label
          placeholder: '#A0A0A0', // Golden color for placeholder
          text: '#333', // Dark text color for better contrast
          background: '#f0f0f0', // Light background for input
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 10,
    backgroundColor: '#fff', // Light background for input fields
    borderWidth: 1,
    borderColor: '#A0A0A0', // Lighter gray border for contrast
    borderRadius: 10, // Rounded corners for input
    height: 55, // Consistent height for input fields
  }
});

export default OrganizerComponent;
