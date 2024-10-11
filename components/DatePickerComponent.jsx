// import React, { useState } from 'react';
// import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import { TextInput } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const DatePickerComponent = ({ date, setDate }) => {
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const onChangeDate = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(false);
//     setSelectedDate(currentDate);
//     setDate(currentDate.toLocaleDateString('en-GB'));
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => setShowDatePicker(true)}>
//         <TextInput
//           label="Select Date"
//           value={date}
//           editable={false}
//           style={styles.textInput}
//           theme={{ 
//             colors: { 
//               primary: '#8B4513', // Soft brown for label
//               placeholder: '#A0522D', // Light brown placeholder
//               text: '#8B4513', // Brown text for premium feel
//               background: '#F5F5F5', // Light cream background
//             } 
//           }} 
//         />
//       </TouchableOpacity>
//       {showDatePicker && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={selectedDate}
//           mode="date"
//           display="default"
//           onChange={onChangeDate}
//           style={styles.datePicker}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({

//   textInput: {
//     margin: 10,
//     backgroundColor: '#f5f5f5', // Soft light background for input
//     borderRadius: 10, // Rounded corners
//     borderWidth: 1,
//     borderColor: '#E3C99C', // VIP gold border
//     paddingHorizontal: 10,
//     shadowColor: '#000', // Slight shadow for depth
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 3, // Elevation for Android shadow
//   },
//   datePicker: {
//     backgroundColor: '#FAF0E6', // Light picker background
//     color: '#8B4513', // Brown text for premium feel
//   },
  
// });

// export default DatePickerComponent;









import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerComponent = ({ date, setDate }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChangeDate = (event, chosenDate) => {
    const currentDate = chosenDate || selectedDate; // Use selected date or fallback to previous date
    setShowDatePicker(false);
    setSelectedDate(currentDate);

    // Format the selected date as DD/MM/YYYY and pass it to the parent component
    const formattedDate = currentDate.toLocaleDateString('en-GB');
    setDate(formattedDate);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          label="Select Date"
          value={date}  // Display the selected date
          editable={false}  // Disable direct input
          style={styles.textInput}
          theme={{ 
            colors: { 
              primary: '#8B4513',
              placeholder: '#A0522D',
              text: '#8B4513',
              background: '#F5F5F5',
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
  textInput: {
    margin: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E3C99C',
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  datePicker: {
    backgroundColor: '#FAF0E6',
    color: '#8B4513',
  },
});

export default DatePickerComponent;
