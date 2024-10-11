import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DatePickerComponent from './DatePickerComponent';
import DayComponent from './DayComponent';

const ParentComponent = () => {
  const [date, setDate] = useState(''); // Selected date
  const [day, setDay] = useState('');   // Selected day of the week

  // Handle date selection and day calculation
  const handleDateChange = (newDate) => {
    setDate(newDate); // Update the selected date

    // Convert the selected date string to a Date object
    const dateObj = new Date(newDate.split('/').reverse().join('-'));
    if (!isNaN(dateObj.getTime())) { // Ensure it's a valid date
      const dayName = dateObj.toLocaleDateString('en-GB', { weekday: 'long' });
      setDay(dayName); // Set the corresponding day
    } else {
      setDay(''); // Clear day if invalid date
    }
  };

  return (
    <View style={styles.container}>
      <DatePickerComponent date={date} setDate={handleDateChange} />
      <DayComponent day={day} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#FFF',
  },
});

export default ParentComponent;
