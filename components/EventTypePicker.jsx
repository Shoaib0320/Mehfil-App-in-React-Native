// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
// // import { Picker } from '@react-native-picker/picker';
// // import { launchImageLibrary } from 'react-native-image-picker';

// // const EventTypePicker = ({ eventType, setEventType, setChildrenName, setDulhaName, setChildrenImage, setDulhaImage }) => {
// //   const [childrenNameInput, setChildrenNameInput] = useState('');
// //   const [dulhaNameInput, setDulhaNameInput] = useState('');
// //   const [childrenImageInput, setChildrenImageInput] = useState(null);
// //   const [dulhaImageInput, setDulhaImageInput] = useState(null);

// //   const selectChildrenImage = () => {
// //     launchImageLibrary({ mediaType: 'photo' }, (response) => {
// //       if (!response.didCancel && !response.error) {
// //         setChildrenImageInput(response.assets[0].uri);
// //         setChildrenImage(response.assets[0].uri); // Pass the image to the parent
// //       }
// //     });
// //   };

// //   const selectDulhaImage = () => {
// //     launchImageLibrary({ mediaType: 'photo' }, (response) => {
// //       if (!response.didCancel && !response.error) {
// //         setDulhaImageInput(response.assets[0].uri);
// //         setDulhaImage(response.assets[0].uri); // Pass the image to the parent
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
// //           setChildrenNameInput('');
// //           setDulhaNameInput('');
// //           setChildrenImageInput(null);
// //           setDulhaImageInput(null);
// //         }}
// //         style={styles.picker}
// //       >
// //         <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
// //         <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
// //         <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
// //         <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
// //       </Picker>

// //       {eventType === 'رسمِ آمین' && (
// //         <View style={styles.inputContainer}>
// //           <Text style={styles.inputLabel}>Add Children Name:</Text>
// //           <TextInput
// //             style={styles.textInput}
// //             value={childrenNameInput}
// //             onChangeText={(text) => {
// //               setChildrenNameInput(text);
// //               setChildrenName(text); // Pass the name to the parent
// //             }}
// //             placeholder="Enter children name"
// //             backgroundColor="#EAEAEA"
// //           />
// //           <TouchableOpacity onPress={selectChildrenImage} style={styles.customButton}>
// //             <Text style={styles.buttonText}>Add Children Image</Text>
// //           </TouchableOpacity>
// //           {childrenImageInput && <Image source={{ uri: childrenImageInput }} style={styles.image} />}
// //         </View>
// //       )}

// //       {eventType === 'شادی خانہ آبادی' && (
// //         <View style={styles.inputContainer}>
// //           <Text style={styles.inputLabel}>Enter Dulha Name:</Text>
// //           <TextInput
// //             style={styles.textInput}
// //             value={dulhaNameInput}
// //             onChangeText={(text) => {
// //               setDulhaNameInput(text);
// //               setDulhaName(text); // Pass the name to the parent
// //             }}
// //             placeholder="Enter dulha name"
// //             backgroundColor="#EAEAEA"
// //           />
// //           <TouchableOpacity onPress={selectDulhaImage} style={styles.customButton}>
// //             <Text style={styles.buttonText}>Add Dulha Image</Text>
// //           </TouchableOpacity>
// //           {dulhaImageInput && <Image source={{ uri: dulhaImageInput }} style={styles.image} />}
// //         </View>
// //       )}
// //     </View>
// //   );
// // };


// // const styles = StyleSheet.create({
// //   container: {
// //     margin: 10,
// //     padding: 15,
// //     backgroundColor: '#F0F0F0',
// //     borderRadius: 15,
// //     borderWidth: 1,
// //     borderColor: '#A5A5A5',
// //     shadowColor: '#A5A5A5',
// //     shadowOffset: { width: 0, height: 5 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 10,
// //     elevation: 5,
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
// //     backgroundColor:'#fff',
// //     padding:10,
// //     borderRadius:19,
// //     color: '#333333', // Darker grey text for better readability

// //   },
// //   inputLabel: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#555',
// //     marginBottom: 5,
// //   },
// //   textInput: {
// //     marginBottom: 10,
// //     backgroundColor: '#EAEAEA',
// //     borderWidth: 1,
// //     borderColor: '#DADADA',
// //     borderRadius: 10,
// //     padding: 10,
// //     color: '#333333',
// //   },
// //   customButton: {
// //     marginTop: 10,
// //     backgroundColor: '#4CAF50', // Soft green button for a fresh look
// //     borderRadius: 50, // Rounded corners
// //     paddingVertical: 10, // Vertical padding
// //     paddingHorizontal: 20, // Horizontal padding
// //     borderColor: '#FFFFFF', // White border color
// //     borderWidth: 2, // Width of the border
// //     alignItems: 'center', // Center text horizontally
// //   },
// //   buttonText: {
// //     color: '#FFFFFF', // White text on buttons
// //     fontSize: 16, // Font size for the button text
// //     fontWeight: 'bold', // Bold text
// //   },
// //   image: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 10,
// //     marginTop: 10,
// //   },
// // });

// // export default EventTypePicker;


// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
// // import { Picker } from '@react-native-picker/picker';
// // import { launchImageLibrary } from 'react-native-image-picker';

// // const EventTypePicker = ({ eventType, setEventType, setChildrenName, setDulhaName, setChildrenImage, setDulhaImage }) => {
// //   const [childrenInputs, setChildrenInputs] = useState([{ name: '', image: null }]);
// //   const [dulhaInputs, setDulhaInputs] = useState([{ name: '', image: null }]);

// //   const selectImage = (setInputs, index) => {
// //     launchImageLibrary({ mediaType: 'photo' }, (response) => {
// //       if (!response.didCancel && !response.error) {
// //         const newInputs = [...setInputs];
// //         newInputs[index].image = response.assets[0].uri;
// //         setInputs(newInputs);
// //       }
// //     });
// //   };

// //   const addAnotherInput = (setInputs, inputs) => {
// //     setInputs([...inputs, { name: '', image: null }]);
// //   };

// //   const handleInputChange = (text, index, setInputs, inputs) => {
// //     const newInputs = [...inputs];
// //     newInputs[index].name = text;
// //     setInputs(newInputs);
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       <Text style={styles.label}>Select Event Type:</Text>
// //       <Picker
// //         selectedValue={eventType}
// //         onValueChange={(itemValue) => {
// //           setEventType(itemValue);
// //           setChildrenInputs([{ name: '', image: null }]);
// //           setDulhaInputs([{ name: '', image: null }]);
// //         }}
// //         style={styles.picker}
// //       >
// //         <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
// //         <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
// //         <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
// //         <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
// //       </Picker>

// //       {eventType === 'رسمِ آمین' && (
// //         <View>
// //           {childrenInputs.map((input, index) => (
// //             <View key={index} style={styles.inputContainer}>
// //               <Text style={styles.inputLabel}>Add Children Name {index + 1}:</Text>
// //               <TextInput
// //                 style={styles.textInput}
// //                 value={input.name}
// //                 onChangeText={(text) => handleInputChange(text, index, setChildrenInputs, childrenInputs)}
// //                 placeholder="Enter children name"
// //                 backgroundColor="#EAEAEA"
// //               />
// //               <TouchableOpacity onPress={() => selectImage(setChildrenInputs, index)} style={styles.customButton}>
// //                 <Text style={styles.buttonText}>Add Children Image</Text>
// //               </TouchableOpacity>
// //               {input.image && <Image source={{ uri: input.image }} style={styles.image} />}
// //             </View>
// //           ))}
// //           <TouchableOpacity onPress={() => addAnotherInput(setChildrenInputs, childrenInputs)} style={styles.addButton}>
// //             <Text style={styles.buttonText}>Add Another Chidern Name</Text>
// //           </TouchableOpacity>
// //         </View>
// //       )}

// //       {eventType === 'شادی خانہ آبادی' && (
// //         <View>
// //           {dulhaInputs.map((input, index) => (
// //             <View key={index} style={styles.inputContainer}>
// //               <Text style={styles.inputLabel}>Enter Dulha Name {index + 1}:</Text>
// //               <TextInput
// //                 style={styles.textInput}
// //                 value={input.name}
// //                 onChangeText={(text) => handleInputChange(text, index, setDulhaInputs, dulhaInputs)}
// //                 placeholder="Enter dulha name"
// //                 backgroundColor="#EAEAEA"
// //               />
// //               <TouchableOpacity onPress={() => selectImage(setDulhaInputs, index)} style={styles.customButton}>
// //                 <Text style={styles.buttonText}>Add Dulha Image</Text>
// //               </TouchableOpacity>
// //               {input.image && <Image source={{ uri: input.image }} style={styles.image} />}
// //             </View>
// //           ))}
// //           <TouchableOpacity onPress={() => addAnotherInput(setDulhaInputs, dulhaInputs)} style={styles.addButton}>
// //             <Text style={styles.buttonText}>Add Another Dulha Name</Text>
// //           </TouchableOpacity>
// //         </View>
// //       )}
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     margin: 10,
// //     padding: 15,
// //     backgroundColor: '#F0F0F0',
// //     borderRadius: 15,
// //     borderWidth: 1,
// //     borderColor: '#A5A5A5',
// //     shadowColor: '#A5A5A5',
// //     shadowOffset: { width: 0, height: 5 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 10,
// //     elevation: 5,
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
// //     backgroundColor:'#fff',
// //     padding:10,
// //     borderRadius:19,
// //     color: '#333333',
// //   },
// //   inputLabel: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#555',
// //     marginBottom: 5,
// //   },
// //   textInput: {
// //     marginBottom: 10,
// //     backgroundColor: '#EAEAEA',
// //     borderWidth: 1,
// //     borderColor: '#DADADA',
// //     borderRadius: 10,
// //     padding: 10,
// //     color: '#333333',
// //   },
// //   customButton: {
// //     marginTop: 10,
// //     backgroundColor: '#4CAF50',
// //     borderRadius: 50,
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderColor: '#FFFFFF',
// //     borderWidth: 2,
// //     alignItems: 'center',
// //   },
// //   addButton: {
// //     marginTop: 15,
// //     borderRadius: 50,
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderColor: '#3BAFDA',
// //     borderWidth: 2,
// //     alignItems: 'center',
// //     backgroundColor: '#3BAFDA',
// //     color: '#FFFFFF',
// //   },
// //   buttonText: {
// //     color: '#FFFFFF',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   image: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 10,
// //     marginTop: 10,
// //   },
// // });

// // export default EventTypePicker;







// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
// // import { Picker } from '@react-native-picker/picker';
// // import { launchImageLibrary } from 'react-native-image-picker';

// // const EventTypePicker = ({ eventType, setEventType }) => {
// //   const [childrenInputs, setChildrenInputs] = useState([{ name: '', image: null }]);
// //   const [dulhaInputs, setDulhaInputs] = useState([{ name: '', image: null }]);

// //   const selectImage = (inputs, setInputs, index) => {
// //     launchImageLibrary({ mediaType: 'photo' }, (response) => {
// //       if (!response.didCancel && !response.error) {
// //         const newInputs = [...inputs];
// //         newInputs[index].image = response.assets[0].uri;
// //         setInputs(newInputs);
// //       }
// //     });
// //   };

// //   const addAnotherInput = (inputs, setInputs) => {
// //     setInputs([...inputs, { name: '', image: null }]);
// //   };

// //   const handleInputChange = (text, index, inputs, setInputs) => {
// //     const newInputs = [...inputs];
// //     newInputs[index].name = text;
// //     setInputs(newInputs);
// //   };

// //   const deleteInput = (index, inputs, setInputs) => {
// //     const newInputs = inputs.filter((_, i) => i !== index);
// //     setInputs(newInputs);
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       <Text style={styles.label}>Select Event Type:</Text>
// //       <Picker
// //         selectedValue={eventType}
// //         onValueChange={(itemValue) => {
// //           setEventType(itemValue);
// //           setChildrenInputs([{ name: '', image: null }]);
// //           setDulhaInputs([{ name: '', image: null }]);
// //         }}
// //         style={styles.picker}
// //       >
// //         <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
// //         <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
// //         <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
// //         <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
// //       </Picker>

// //       {eventType === 'رسمِ آمین' && (
// //         <View>
// //           {childrenInputs.map((input, index) => (
// //             <View key={index} style={styles.inputContainer}>
// //               <Text style={styles.inputLabel}>Add Children Name {index + 1}:</Text>
// //               <TextInput
// //                 style={styles.textInput}
// //                 value={input.name}
// //                 onChangeText={(text) => handleInputChange(text, index, childrenInputs, setChildrenInputs)}
// //                 placeholder="Enter children name"
// //               />
// //               <TouchableOpacity onPress={() => selectImage(childrenInputs, setChildrenInputs, index)} style={styles.customButton}>
// //                 <Text style={styles.buttonText}>Add Children Image</Text>
// //               </TouchableOpacity>
// //               {input.image && <Image source={{ uri: input.image }} style={styles.image} />}
// //               {childrenInputs.length > 1 && (
// //                 <TouchableOpacity onPress={() => deleteInput(index, childrenInputs, setChildrenInputs)} style={styles.deleteButton}>
// //                   <Text style={styles.buttonText}>Delete</Text>
// //                 </TouchableOpacity>
// //               )}
// //             </View>
// //           ))}
// //           <TouchableOpacity onPress={() => addAnotherInput(childrenInputs, setChildrenInputs)} style={styles.addButton}>
// //             <Text style={styles.buttonText}>Add Another Child Name</Text>
// //           </TouchableOpacity>
// //         </View>
// //       )}

// //       {eventType === 'شادی خانہ آبادی' && (
// //         <View>
// //           {dulhaInputs.map((input, index) => (
// //             <View key={index} style={styles.inputContainer}>
// //               <Text style={styles.inputLabel}>Enter Dulha Name {index + 1}:</Text>
// //               <TextInput
// //                 style={styles.textInput}
// //                 value={input.name}
// //                 onChangeText={(text) => handleInputChange(text, index, dulhaInputs, setDulhaInputs)}
// //                 placeholder="Enter dulha name"
// //               />
// //               <TouchableOpacity onPress={() => selectImage(dulhaInputs, setDulhaInputs, index)} style={styles.customButton}>
// //                 <Text style={styles.buttonText}>Add Dulha Image</Text>
// //               </TouchableOpacity>
// //               {input.image && <Image source={{ uri: input.image }} style={styles.image} />}
// //               {dulhaInputs.length > 1 && (
// //                 <TouchableOpacity onPress={() => deleteInput(index, dulhaInputs, setDulhaInputs)} style={styles.deleteButton}>
// //                   <Text style={styles.buttonText}>Delete</Text>
// //                 </TouchableOpacity>
// //               )}
// //             </View>
// //           ))}
// //           <TouchableOpacity onPress={() => addAnotherInput(dulhaInputs, setDulhaInputs)} style={styles.addButton}>
// //             <Text style={styles.buttonText}>Add Another Dulha Name</Text>
// //           </TouchableOpacity>
// //         </View>
// //       )}
// //     </ScrollView>
// //   );
// // };










// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { launchImageLibrary } from 'react-native-image-picker';

// const EventTypePicker = ({ eventType, setEventType, setChildrenData, setDulhaData }) => {
//   const [childrenInputs, setChildrenInputs] = useState([{ name: '', image: null }]);
//   const [dulhaInputs, setDulhaInputs] = useState([{ name: '', image: null }]);

//   const selectImage = (inputs, setInputs, index) => {
//     launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       if (!response.didCancel && !response.error) {
//         const newInputs = [...inputs];
//         newInputs[index].image = response.assets[0].uri;
//         setInputs(newInputs);
//         if (setChildrenData) {
//           setChildrenData(newInputs); // Send updated data to parent
//         }
//         if (setDulhaData) {
//           setDulhaData(newInputs); // Send updated data to parent
//         }
//       }
//     });
//   };

//   const addAnotherInput = (inputs, setInputs) => {
//     setInputs([...inputs, { name: '', image: null }]);
//   };

//   const handleInputChange = (text, index, inputs, setInputs) => {
//     const newInputs = [...inputs];
//     newInputs[index].name = text;
//     setInputs(newInputs);
//   };

//   const deleteInput = (index, inputs, setInputs) => {
//     const newInputs = inputs.filter((_, i) => i !== index);
//     setInputs(newInputs);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.label}>Select Event Type:</Text>
//       <Picker
//         selectedValue={eventType}
//         onValueChange={(itemValue) => {
//           setEventType(itemValue);
//           setChildrenInputs([{ name: '', image: null }]);
//           setDulhaInputs([{ name: '', image: null }]);
//         }}
//         style={styles.picker}
//       >
//         <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
//         <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
//         <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
//         <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
//       </Picker>

//       {eventType === 'رسمِ آمین' && (
//         <View>
//           {childrenInputs.map((input, index) => (
//             <View key={index} style={styles.inputContainer}>
//               <Text style={styles.inputLabel}>Add Children Name {index + 1}:</Text>
//               <TextInput
//                 style={styles.textInput}
//                 value={input.name}
//                 onChangeText={(text) => handleInputChange(text, index, childrenInputs, setChildrenInputs)}
//                 placeholder="Enter children name"
//               />
//               <TouchableOpacity onPress={() => selectImage(childrenInputs, setChildrenInputs, index)} style={styles.customButton}>
//                 <Text style={styles.buttonText}>Add Children Image</Text>
//               </TouchableOpacity>
//               {input.image && <Image source={{ uri: input.image }} style={styles.image} />}
//               {childrenInputs.length > 1 && (
//                 <TouchableOpacity onPress={() => deleteInput(index, childrenInputs, setChildrenInputs)} style={styles.deleteButton}>
//                   <Text style={styles.buttonText}>Delete</Text>
//                 </TouchableOpacity>
//               )}
//             </View>
//           ))}
//           <TouchableOpacity onPress={() => addAnotherInput(childrenInputs, setChildrenInputs)} style={styles.addButton}>
//             <Text style={styles.buttonText}>Add Another Child Name</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {eventType === 'شادی خانہ آبادی' && (
//         <View>
//           {dulhaInputs.map((input, index) => (
//             <View key={index} style={styles.inputContainer}>
//               <Text style={styles.inputLabel}>Enter Dulha Name {index + 1}:</Text>
//               <TextInput
//                 style={styles.textInput}
//                 value={input.name}
//                 onChangeText={(text) => handleInputChange(text, index, dulhaInputs, setDulhaInputs)}
//                 placeholder="Enter dulha name"
//               />
//               <TouchableOpacity onPress={() => selectImage(dulhaInputs, setDulhaInputs, index)} style={styles.customButton}>
//                 <Text style={styles.buttonText}>Add Dulha Image</Text>
//               </TouchableOpacity>
//               {input.image && <Image source={{ uri: input.image }} style={styles.image} />}
//               {dulhaInputs.length > 1 && (
//                 <TouchableOpacity onPress={() => deleteInput(index, dulhaInputs, setDulhaInputs)} style={styles.deleteButton}>
//                   <Text style={styles.buttonText}>Delete</Text>
//                 </TouchableOpacity>
//               )}
//             </View>
//           ))}
//           <TouchableOpacity onPress={() => addAnotherInput(dulhaInputs, setDulhaInputs)} style={styles.addButton}>
//             <Text style={styles.buttonText}>Add Another Dulha Name</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </ScrollView>
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
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 19,
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
//     color: '#555',
//   },
//   customButton: {
//     marginTop: 10,
//     backgroundColor: '#4CAF50',
//     borderRadius: 50,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   addButton: {
//     marginTop: 15,
//     borderRadius: 50,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderColor: '#3BAFDA',
//     borderWidth: 2,
//     alignItems: 'center',
//     backgroundColor: '#3BAFDA',
//     color: '#FFFFFF',
//   },
//   deleteButton: {
//     marginTop: 10,
//     backgroundColor: '#FF5252',
//     borderRadius: 50,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
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
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';

const EventTypePicker = ({ eventType, setEventType, setChildrenData, setDulhaData }) => {
  const [childrenInputs, setChildrenInputs] = useState([{ name: '', image: null }]);
  const [dulhaInputs, setDulhaInputs] = useState([{ name: '', image: null }]);

  const selectImage = (inputs, setInputs, index) => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.error) {
        const newInputs = [...inputs];
        newInputs[index].image = response.assets[0].uri;
        setInputs(newInputs);
        if (setChildrenData) {
          setChildrenData(newInputs); // Send updated data to parent
        }
        if (setDulhaData) {
          setDulhaData(newInputs); // Send updated data to parent
        }
      }
    });
  };

  const addAnotherInput = (inputs, setInputs) => {
    setInputs([...inputs, { name: '', image: null }]);
  };

  const handleInputChange = (text, index, inputs, setInputs) => {
    const newInputs = [...inputs];
    newInputs[index].name = text;
    setInputs(newInputs);
  };

  const deleteInput = (index, inputs, setInputs) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Select Event Type:</Text>
      <Picker
        selectedValue={eventType}
        onValueChange={(itemValue) => {
          setEventType(itemValue);
          setChildrenInputs([{ name: '', image: null }]);
          setDulhaInputs([{ name: '', image: null }]);
        }}
        style={styles.picker}
      >
        <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
        <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
        <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
        <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
      </Picker>

      {eventType === 'رسمِ آمین' && (
        <View>
          {childrenInputs.map((input, index) => (
            <View key={index} style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Add Children Name {index + 1}:</Text>
              <TextInput
                style={styles.textInput}
                value={input.name}
                onChangeText={(text) => handleInputChange(text, index, childrenInputs, setChildrenInputs)}
                placeholder="Enter children name"
              />
              <TouchableOpacity onPress={() => selectImage(childrenInputs, setChildrenInputs, index)} style={styles.customButton}>
                <Text style={styles.buttonText}>Add Children Image</Text>
              </TouchableOpacity>
              {input.image && <Image source={{ uri: input.image }} style={styles.image} />}
              {childrenInputs.length > 1 && (
                <TouchableOpacity onPress={() => deleteInput(index, childrenInputs, setChildrenInputs)} style={styles.deleteButton}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
          <TouchableOpacity
            onPress={() => addAnotherInput(childrenInputs, setChildrenInputs)}
            style={[styles.addButton, childrenInputs.length >= 2 && styles.disabledButton]} // Apply disabled style if needed
            disabled={childrenInputs.length >= 2} // Disable if inputs are 2 or more
          >
            <Text style={styles.buttonText}>Add Another Child Name</Text>
          </TouchableOpacity>
        </View>
      )}

      {eventType === 'شادی خانہ آبادی' && (
        <View>
          {dulhaInputs.map((input, index) => (
            <View key={index} style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Enter Dulha Name {index + 1}:</Text>
              <TextInput
                style={styles.textInput}
                value={input.name}
                onChangeText={(text) => handleInputChange(text, index, dulhaInputs, setDulhaInputs)}
                placeholder="Enter dulha name"
              />
              <TouchableOpacity onPress={() => selectImage(dulhaInputs, setDulhaInputs, index)} style={styles.customButton}>
                <Text style={styles.buttonText}>Add Dulha Image</Text>
              </TouchableOpacity>
              {input.image && <Image source={{ uri: input.image }} style={styles.image} />}
              {dulhaInputs.length > 1 && (
                <TouchableOpacity onPress={() => deleteInput(index, dulhaInputs, setDulhaInputs)} style={styles.deleteButton}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
          <TouchableOpacity
            onPress={() => addAnotherInput(dulhaInputs, setDulhaInputs)}
            style={[styles.addButton, dulhaInputs.length >= 2 && styles.disabledButton]} // Apply disabled style if needed
            disabled={dulhaInputs.length >= 2} // Disable if inputs are 2 or more
          >
            <Text style={styles.buttonText}>Add Another Dulha Name</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
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
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 19,
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
    color: '#555',
  },
  customButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  addButton: {
    marginTop: 15,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#3BAFDA',
    borderWidth: 2,
    alignItems: 'center',
    backgroundColor: '#3BAFDA',
    color: '#FFFFFF',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#FF5252',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },
  // New styles for disabled buttons
  disabledButton: {
    backgroundColor: '#D3D3D3', // Lighter background color for disabled state
    borderColor: '#A9A9A9', // Lighter border color for disabled state
    opacity: 0.6, // Add some transparency to indicate it's disabled
  },
});

export default EventTypePicker;
