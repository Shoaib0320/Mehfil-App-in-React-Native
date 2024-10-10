// // // import React from 'react';
// // // import { View, Text, StyleSheet } from 'react-native';
// // // import { Picker } from '@react-native-picker/picker';

// // // const EventTypePicker = ({ eventType, setEventType }) => {
// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.label}>Select Event Type:</Text>
// // //       <Picker
// // //         selectedValue={eventType}
// // //         onValueChange={(itemValue) => setEventType(itemValue)}
// // //         style={styles.picker} // Apply custom styling to Picker
// // //       >
// // //         <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
// // //         <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
// // //         <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
// // //         <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
// // //       </Picker>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     padding: 15,
// // //     backgroundColor: '#f9f9f9', // Light background
// // //     borderRadius: 10,
// // //     margin: 10,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 4,
// // //     elevation: 3, // Light shadow effect
// // //   },
// // //   label: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     color: '#555', // Softer text color
// // //     marginBottom: 10,
// // //   },
// // //   picker: {
// // //     height: 50,
// // //     borderColor: '#ddd', // Light border color
// // //     borderWidth: 1,
// // //     borderRadius: 5,
// // //     backgroundColor: '#fff', // Light background for picker
// // //     color: '#000', // Golden text color for selected item
// // //   },
// // // });

// // // export default EventTypePicker;









// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
// // import { Picker } from '@react-native-picker/picker';
// // import { launchImageLibrary } from 'react-native-image-picker';

// // const EventTypePicker = ({ eventType, setEventType }) => {
// //   const [childrenName, setChildrenName] = useState('');
// //   const [dulhaName, setDulhaName] = useState('');
// //   const [childrenImage, setChildrenImage] = useState(null);
// //   const [dulhaImage, setDulhaImage] = useState(null);

// //   const selectChildrenImage = () => {
// //     launchImageLibrary({ mediaType: 'photo' }, (response) => {
// //       if (response.didCancel) {
// //         console.log('User cancelled image picker');
// //       } else if (response.error) {
// //         console.log('ImagePicker Error: ', response.error);
// //       } else {
// //         setChildrenImage(response.assets[0].uri); // Use the URI of the selected image
// //       }
// //     });
// //   };

// //   const selectDulhaImage = () => {
// //     launchImageLibrary({ mediaType: 'photo' }, (response) => {
// //       if (response.didCancel) {
// //         console.log('User cancelled image picker');
// //       } else if (response.error) {
// //         console.log('ImagePicker Error: ', response.error);
// //       } else {
// //         setDulhaImage(response.assets[0].uri); // Use the URI of the selected image
// //       }
// //     });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.label}>Select Event Type:</Text>
// //       <Picker
// //         selectedValue={eventType}
// //         onValueChange={(itemValue) => {
// //           setEventType(itemValue);
// //           // Reset fields when changing event types
// //           setChildrenName('');
// //           setDulhaName('');
// //           setChildrenImage(null);
// //           setDulhaImage(null);
// //         }}
// //         style={styles.picker}
// //       >
// //         <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
// //         <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
// //         <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
// //         <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
// //       </Picker>

// //       {/* Conditional rendering for رسمِ آمین */}
// //       {eventType === 'رسمِ آمین' && (
// //         <View style={styles.inputContainer}>
// //           <Text style={styles.inputLabel}>Add Children Name:</Text>
// //           <TextInput
// //             style={styles.input}
// //             value={childrenName}
// //             onChangeText={setChildrenName}
// //             placeholder="Enter children name"
// //           />
// //           <Button title="Add Children Image" onPress={selectChildrenImage} />
// //           {childrenImage && (
// //             <Image source={{ uri: childrenImage }} style={styles.image} />
// //           )}
// //         </View>
// //       )}

// //       {/* Conditional rendering for شادی خانہ آبادی */}
// //       {eventType === 'شادی خانہ آبادی' && (
// //         <View style={styles.inputContainer}>
// //           <Text style={styles.inputLabel}>Enter Dulha Name:</Text>
// //           <TextInput
// //             style={styles.input}
// //             value={dulhaName}
// //             onChangeText={setDulhaName}
// //             placeholder="Enter dulha name"
// //           />
// //           <Button title="Add Dulha Image" onPress={selectDulhaImage} style={styles.button}/>
// //           {dulhaImage && (
// //             <Image source={{ uri: dulhaImage }} style={styles.image} />
// //           )}
// //         </View>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   // container: {
// //   //   padding: 15,
// //   //   backgroundColor: '#f9f9f9',
// //   //   borderRadius: 10,
// //   //   margin: 10,
// //   //   shadowColor: '#000',
// //   //   shadowOffset: { width: 0, height: 2 },
// //   //   shadowOpacity: 0.1,
// //   //   shadowRadius: 4,
// //   //   elevation: 3,
// //   // },
// //   // label: {
// //   //   fontSize: 16,
// //   //   fontWeight: 'bold',
// //   //   color: '#555',
// //   //   marginBottom: 10,
// //   // },
// //   // picker: {
// //   //   height: 50,
// //   //   borderColor: '#ddd',
// //   //   borderWidth: 1,
// //   //   borderRadius: 5,
// //   //   backgroundColor: '#fff',
// //   //   color: '#000',
// //   // },
// //   container: {
// //     padding: 15,
// //     backgroundColor: '#f9f9f9',
// //     borderRadius: 10,
// //     margin: 10,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 3,
// //   },
// //   label: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#555',
// //     marginBottom: 10,
// //   },
// //   picker: {
// //     height: 50,
// //     borderColor: '#ddd',
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     backgroundColor: '#fff',
// //     color: '#000',
// //   },
// //   inputContainer: {
// //     marginTop: 20,
// //     padding: 15,
// //     backgroundColor: '#F0F0F0', // Light grey background for contrast
// //     borderRadius: 15,
// //     borderWidth: 1,
// //     borderColor: '#A5A5A5', // Light silver border for elegance
// //     shadowColor: '#A5A5A5',
// //     shadowOffset: { width: 0, height: 5 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 10,
// //     elevation: 5,
// //   },
// //   inputLabel: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#555',
// //     marginBottom: 5,
// //   },
// //   textInput: {
// //     height: 40,
// //     borderColor: '#ddd',
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     paddingLeft: 10,
// //     marginBottom: 10,
// //     backgroundColor: '#EAEAEA', // Light background for input field
// //     color: '#333333', // Darker grey text for better readability
// //   },
// //   button: {
// //     marginTop: 10,
// //     backgroundColor: '#4CAF50', // Soft green button for a fresh look
// //     color: '#FFFFFF', // White text on buttons
// //   },
// //   image: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 10,
// //     marginTop: 10,
// //   },
// // });

// // export default EventTypePicker;



// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { launchImageLibrary } from 'react-native-image-picker';

// const EventTypePicker = ({ eventType, setEventType }) => {
//   const [childrenName, setChildrenName] = useState('');
//   const [dulhaName, setDulhaName] = useState('');
//   const [childrenImage, setChildrenImage] = useState(null);
//   const [dulhaImage, setDulhaImage] = useState(null);

//   const selectChildrenImage = () => {
//     launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         setChildrenImage(response.assets[0].uri);
//       }
//     });
//   };

//   const selectDulhaImage = () => {
//     launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         setDulhaImage(response.assets[0].uri);
//       }
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Select Event Type:</Text>
//       <Picker
//         selectedValue={eventType}
//         onValueChange={(itemValue) => {
//           setEventType(itemValue);
//           setChildrenName('');
//           setDulhaName('');
//           setChildrenImage(null);
//           setDulhaImage(null);
//         }}
//         style={styles.picker}
//       >
//         <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
//         <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
//         <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
//         <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
//       </Picker>

//       {eventType === 'رسمِ آمین' && (
//         <View style={styles.inputContainer}>
//           <Text style={styles.inputLabel}>Add Children Name:</Text>
//           <TextInput
//             style={styles.textInput}
//             value={childrenName}
//             onChangeText={setChildrenName}
//             placeholder="Enter children name"
//           />
//           <Button title="Add Children Image" onPress={selectChildrenImage} color="#4CAF50" style={{
//             marginTop: 10,
//             backgroundColor: '#4CAF50', // Soft green button for a fresh look
//             color: '#FFFFFF', // White text on buttons
//             borderRadius:50
//           }} />
//           {childrenImage && <Image source={{ uri: childrenImage }} style={styles.image} />}
//         </View>
//       )}

//       {eventType === 'شادی خانہ آبادی' && (
//         <View style={styles.inputContainer}>
//           <Text style={styles.inputLabel}>Enter Dulha Name:</Text>
//           <TextInput
//             style={styles.textInput}
//             value={dulhaName}
//             onChangeText={setDulhaName}
//             placeholder="Enter dulha name"
//           />
//           <Button title="Add Dulha Image" onPress={selectDulhaImage} color="#4CAF50" />
//           {dulhaImage && <Image source={{ uri: dulhaImage }} style={styles.image} />}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     margin: 10,
//     padding: 15,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#A5A5A5',
//     shadowColor: '#A5A5A5',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#555',
//     marginBottom: 10,
//   },
//   picker: {
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//     color: '#000',
//   },
//   inputContainer: {
//     marginTop: 20,
//   },
//   inputLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#555',
//     marginBottom: 5,
//   },
//   textInput: {
//     marginBottom: 10,
//     backgroundColor: '#EAEAEA',
//     borderWidth: 1,
//     borderColor: '#DADADA',
//     borderRadius: 10,
//     padding: 10,
//     color: '#333333',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginTop: 10,
//   },
// });

// export default EventTypePicker;




import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';

const EventTypePicker = ({ eventType, setEventType, setChildrenName, setDulhaName, setChildrenImage, setDulhaImage }) => {
  const [childrenNameInput, setChildrenNameInput] = useState('');
  const [dulhaNameInput, setDulhaNameInput] = useState('');
  const [childrenImageInput, setChildrenImageInput] = useState(null);
  const [dulhaImageInput, setDulhaImageInput] = useState(null);

  const selectChildrenImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.error) {
        setChildrenImageInput(response.assets[0].uri);
        setChildrenImage(response.assets[0].uri); // Pass the image to the parent
      }
    });
  };

  const selectDulhaImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.error) {
        setDulhaImageInput(response.assets[0].uri);
        setDulhaImage(response.assets[0].uri); // Pass the image to the parent
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Event Type:</Text>
      <Picker
        selectedValue={eventType}
        onValueChange={(itemValue) => {
          setEventType(itemValue);
          setChildrenNameInput('');
          setDulhaNameInput('');
          setChildrenImageInput(null);
          setDulhaImageInput(null);
        }}
        style={styles.picker}
      >
        <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
        <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
        <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
        <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
      </Picker>

      {eventType === 'رسمِ آمین' && (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Add Children Name:</Text>
          <TextInput
            style={styles.textInput}
            value={childrenNameInput}
            onChangeText={(text) => {
              setChildrenNameInput(text);
              setChildrenName(text); // Pass the name to the parent
            }}
            placeholder="Enter children name"
            backgroundColor="#EAEAEA"
          />
          <TouchableOpacity onPress={selectChildrenImage} style={styles.customButton}>
            <Text style={styles.buttonText}>Add Children Image</Text>
          </TouchableOpacity>
          {childrenImageInput && <Image source={{ uri: childrenImageInput }} style={styles.image} />}
        </View>
      )}

      {eventType === 'شادی خانہ آبادی' && (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter Dulha Name:</Text>
          <TextInput
            style={styles.textInput}
            value={dulhaNameInput}
            onChangeText={(text) => {
              setDulhaNameInput(text);
              setDulhaName(text); // Pass the name to the parent
            }}
            placeholder="Enter dulha name"
            backgroundColor="#EAEAEA"
          />
          <TouchableOpacity onPress={selectDulhaImage} style={styles.customButton}>
            <Text style={styles.buttonText}>Add Dulha Image</Text>
          </TouchableOpacity>
          {dulhaImageInput && <Image source={{ uri: dulhaImageInput }} style={styles.image} />}
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#A5A5A5',
    shadowColor: '#A5A5A5',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000',
  },
  inputContainer: {
    marginTop: 20,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:19,
    color: '#333333', // Darker grey text for better readability

  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: '#EAEAEA',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    padding: 10,
    color: '#333333',
  },
  customButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50', // Soft green button for a fresh look
    borderRadius: 50, // Rounded corners
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderColor: '#FFFFFF', // White border color
    borderWidth: 2, // Width of the border
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: '#FFFFFF', // White text on buttons
    fontSize: 16, // Font size for the button text
    fontWeight: 'bold', // Bold text
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default EventTypePicker;
