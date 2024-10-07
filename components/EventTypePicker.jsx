import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const EventTypePicker = ({ eventType, setEventType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Event Type:</Text>
      <Picker
        selectedValue={eventType}
        onValueChange={(itemValue) => setEventType(itemValue)}
        style={styles.picker} // Apply custom styling to Picker
      >
        <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
        <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
        <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
        <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f9f9f9', // Light background
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Light shadow effect
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555', // Softer text color
    marginBottom: 10,
  },
  picker: {
    height: 50,
    borderColor: '#ddd', // Light border color
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff', // Light background for picker
  },
});

export default EventTypePicker;
