import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerComponent = ({ date, setDate }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
    setDate(currentDate.toLocaleDateString('en-GB'));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          label="Select Date"
          value={date}
          editable={false}
          style={styles.textInput}
          theme={{ 
            colors: { 
              primary: '#FFD700', // Golden color for label
              placeholder: '#FFD700', // Golden color for placeholder
              text: '#FFD700', // Golden color for text
              background: '#333333', // Dark background color
            } 
          }} 
        />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate}
          mode="date"
          display="default"
          onChange={onChangeDate}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 20,
    backgroundColor: '#1a1a1a', // Darker background for an elegant look
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFD700', // Golden border for elegance
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  textInput: {
    marginVertical: 10,
    backgroundColor: '#222222', // Slightly darker background for input field
    color: '#FFD700' , // Golden text color for selected item
    borderWidth: 1,
    borderColor: '#FFD700', // Golden border for text input
    borderRadius: 10, // Rounded corners for input
    height: 55, // Height to match button style
  },
  datePicker: {
    borderRadius: 10,
    borderColor: '#FFD700',
    borderWidth: 1,
  },
});

export default DatePickerComponent;
