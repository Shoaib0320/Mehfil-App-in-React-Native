// import React from 'react';
// import { TextInput } from 'react-native-paper';
// import { StyleSheet } from 'react-native';

// const DayComponent = ({ day, setDay }) => (
//   <TextInput
//     label="Day"
//     value={day}
//     onChangeText={setDay}
//     style={styles.input}
//     theme={{
//       colors: {
//         primary: '#C5A880', // Light gold for VIP touch
//         background: '#f9f9f9', // Soft white background
//         text: '#333', // Dark gray for readability
//         placeholder: '#aaa', // Light gray for placeholder text
//       },
//     }}
//   />
// );

// const styles = StyleSheet.create({
//   input: {
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
// });

// export default DayComponent;


import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const DayComponent = ({ day }) => (
  <TextInput
    label="Day"
    value={day}  // Display the calculated day
    editable={false}  // Make the field read-only
    style={styles.input}
    theme={{
      colors: {
        primary: '#C5A880',
        background: '#f9f9f9',
        text: '#333',
        placeholder: '#aaa',
      },
    }}
  />
);

const styles = StyleSheet.create({
  input: {
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
});

export default DayComponent;
