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
    margin: 15,
    padding: 15,
    backgroundColor: '#000000', // Dark background for contrast
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFD700', // Golden border for elegance
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
    color: '#FFD700', // Golden text color for label
    textAlign: 'center',
  },
  picker: {
    height: 50,
    borderColor: '#FFD700', // Golden border for the Picker
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#444444', // Dark background for the Picker
    color: '#FFD700', // Golden text color for selected item
  },
});

export default EventTypePicker;
