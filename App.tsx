// // // import React, { useState } from 'react';
// // // import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid, Platform, ActivityIndicator } from 'react-native';
// // // import { TextInput, Button, Checkbox } from 'react-native-paper';
// // // import RNHTMLtoPDF from 'react-native-html-to-pdf';
// // // import RNFS from 'react-native-fs'; // For file system operations
// // // import FileViewer from 'react-native-file-viewer'; // For opening the downloaded PDF

// // // const MehfilApp = () => {
// // //   const [day, setDay] = useState('');
// // //   const [date, setDate] = useState('');
// // //   const [time, setTime] = useState('');
// // //   const [naatKhuan, setNaatKhuan] = useState('');
// // //   const [khatib, setKhatib] = useState('');
// // //   const [address, setAddress] = useState('');
// // //   const [showPoster, setShowPoster] = useState(false);
// // //   const [pdfFilePath, setPdfFilePath] = useState('');
// // //   const [showOpenButton, setShowOpenButton] = useState(false); // For showing the "Open PDF" button
// // //   const [loading, setLoading] = useState(false); // Loader state
// // //   const [isLangerChecked, setIsLangerChecked] = useState(false); // State for the checkbox

// // //   // Function to request storage permissions on Android
// // //   const requestStoragePermission = async () => {
// // //     try {
// // //       const granted = await PermissionsAndroid.request(
// // //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
// // //         {
// // //           title: 'Storage Permission',
// // //           message: 'App needs access to your storage to download the PDF.',
// // //           buttonNeutral: 'Ask Me Later',
// // //           buttonNegative: 'Cancel',
// // //           buttonPositive: 'OK',
// // //         },
// // //       );
// // //       if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
// // //         Alert.alert('Permission Denied', 'Storage permission is required to download the PDF.');
// // //         return false;
// // //       }
// // //       return true;
// // //     } catch (err) {
// // //       console.warn(err);
// // //       return false;
// // //     }
// // //   };

// // //   // Function to generate the PDF
// // //   const generatePDF = async () => {
// // //     setLoading(true); // Start loader
// // //     let langerContent = isLangerChecked ? `<div class="footer">لنگرِ میلاد کا بھی اہتمام ہے</div>` : '';
// // //     let htmlContent = `
// // //       <html>
// // //         <head>
// // //           <style>
// // //             body {
// // //               font-family: 'Georgia', serif;
// // //               background-color: #F3F4F6;
// // //               margin: 0;
// // //               padding: 20px;
// // //             }
// // //             .poster {
// // //               max-width: 800px;
// // //               margin: 0 auto;
// // //               padding: 40px;
// // //               border-radius: 20px;
// // //               background: linear-gradient(145deg, #ffffff, #f0f0f0);
// // //               box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
// // //               text-align: center;
// // //               border: 2px solid #e3e3e3;
// // //               transition: transform 0.3s ease;
// // //             }
// // //             .poster:hover {
// // //               transform: scale(1.03);
// // //             }
// // //             .title h1 {
// // //               color: #09796a;
// // //               font-size: 42px;
// // //               margin: 10px 0;
// // //               text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
// // //               font-family: 'Cursive', sans-serif;
// // //               letter-spacing: 2px;
// // //             }
// // //             .title {
// // //               font-size: 28px;
// // //               color: #2A9E7E;
// // //               margin: 15px 0;
// // //               font-family: 'Serif', serif;
// // //             }
// // //             .subtitle {
// // //               font-size: 22px;
// // //               color: #333;
// // //               margin: 10px 0;
// // //               font-weight: 600;
// // //             }
// // //             .divider {
// // //               width: 80%;
// // //               height: 3px;
// // //               background-color: #09796a;
// // //               margin: 30px auto;
// // //               border-radius: 2px;
// // //             }
// // //             .date-time, .location {
// // //               font-size: 20px;
// // //               margin: 15px 0;
// // //               color: #444;
// // //               font-weight: bold;
// // //             }
// // //             .highlight {
// // //               font-weight: bold;
// // //               color: #09796a;
// // //               font-size: 22px;
// // //             }
// // //             .footer {
// // //               margin-top: 30px;
// // //               font-size: 20px;
// // //               color: #777;
// // //               text-align: center;
// // //               font-style: italic;
// // //             }
// // //             .button {
// // //               background-color: #09796a;
// // //               color: #FFFFFF;
// // //               padding: 12px 25px;
// // //               border: none;
// // //               border-radius: 8px;
// // //               cursor: pointer;
// // //               margin-top: 25px;
// // //               display: inline-block;
// // //               text-align: center;
// // //               font-size: 18px;
// // //               font-weight: bold;
// // //               text-decoration: none;
// // //               box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
// // //               transition: background-color 0.3s ease, transform 0.2s ease;
// // //             }
// // //             .button:hover {
// // //               background-color: #065f4d;
// // //               transform: translateY(-3px);
// // //             }
// // //           </style>
// // //         </head>
// // //         <body>
// // //           <div class="poster">
// // //             <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
// // //             <div class="title">🌙 Mehfil-e-Milad 🌙</div>
// // //             <div class="subtitle">Event Details</div>
// // //             <div class="divider"></div>
// // //             <div class="date-time"><h2>Day: <span class="highlight">${day}</span></h2></div>
// // //             <div class="date-time"><h2>Date: <span class="highlight">${date}</span></h2></div>
// // //             <div class="date-time"><h2>Time: <span class="highlight">${time}</span></h2></div>
// // //             <div class="divider"></div>
// // //             <div class="location">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
// // //             <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
// // //             <div class="location">Address: <span class="highlight">${address}</span></div>
// // //             ${langerContent}
// // //             <div class="footer">Join Us for an Inspiring Evening!</div>
// // //           </div>
// // //         </body>
// // //       </html>
// // //     `;

// // //     try {
// // //       const pdf = await RNHTMLtoPDF.convert({
// // //         html: htmlContent,
// // //         fileName: 'Mehfil-e-Milad-Poster',
// // //         directory: 'Documents',
// // //       });

// // //       setPdfFilePath(pdf.filePath);
// // //       Alert.alert('PDF Created', 'PDF has been generated successfully.');
// // //     } catch (error) {
// // //       Alert.alert('Error', 'Failed to create PDF. Please try again.');
// // //     } finally {
// // //       setLoading(false); // Stop loader
// // //     }
// // //   };

// // //   const handleDownloadPDF = async () => {
// // //     if (Platform.OS === 'android') {
// // //       const hasPermission = await requestStoragePermission();
// // //       if (!hasPermission) {
// // //         return;
// // //       }
// // //     }

// // //     const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;

// // //     try {
// // //       await RNFS.copyFile(pdfFilePath, destinationPath);
// // //       Alert.alert('Download Complete', `PDF has been saved successfully to: ${destinationPath}`);
// // //       setShowOpenButton(true);
// // //     } catch (error) {
// // //       console.log('Error during file download: ', error);
// // //       Alert.alert('Error', 'Failed to download PDF. Please try again.');
// // //     }
// // //   };

// // //   const openPDF = async () => {
// // //     try {
// // //       const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
// // //       await FileViewer.open(destinationPath); // Opens the PDF using the destination path
// // //     } catch (error) {
// // //       console.log('Error opening file: ', error);
// // //       Alert.alert('Error', 'Failed to open the PDF file. Please make sure the file exists.');
// // //     }
// // //   };

// // //   const handleSubmit = () => {
// // //     setShowPoster(true);
// // //     generatePDF(); // Generate the PDF after showing the poster
// // //   };

  

// // // return (
// // //   <ImageBackground
// // //     source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
// // //     style={styles.background}
// // //   >
// // //     <ScrollView contentContainerStyle={styles.container}>
// // //       <Text style={styles.header}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
// // //       <Text style={styles.header}>🌙 Mehfil-e-Milad Poster 🌙</Text>
// // //         <TextInput
// // //           label="Day"
// // //           value={day}
// // //           onChangeText={(text) => setDay(text)}
// // //           style={styles.input}
// // //         />
// // //         <TextInput
// // //           label="Date"
// // //           value={date}
// // //           onChangeText={(text) => setDate(text)}
// // //           style={styles.input}
// // //         />
// // //         <TextInput
// // //           label="Time"
// // //           value={time}
// // //           onChangeText={(text) => setTime(text)}
// // //           style={styles.input}
// // //         />
// // //         <TextInput
// // //           label="Naat Khuwan"
// // //           value={naatKhuan}
// // //           onChangeText={(text) => setNaatKhuan(text)}
// // //           style={styles.input}
// // //         />
// // //         <TextInput
// // //           label="Khatib"
// // //           value={khatib}
// // //           onChangeText={(text) => setKhatib(text)}
// // //           style={styles.input}
// // //         />
// // //         <TextInput
// // //           label="Address"
// // //           value={address}
// // //           onChangeText={(text) => setAddress(text)}
// // //           style={styles.input}
// // //         />
// // //         <View style={styles.checkboxContainer}>
// // //           <Checkbox
// // //             status={isLangerChecked ? 'checked' : 'unchecked'}
// // //             onPress={() => setIsLangerChecked(!isLangerChecked)}
// // //           />
// // //           <Text style={styles.checkboxLabel}>Include Langer Announcement</Text>
// // //         </View>
// // //         <Button mode="contained" onPress={handleSubmit} style={styles.button}>
// // //           Generate Poster
// // //         </Button>

// // //         {loading && <ActivityIndicator size="large" color="#0000ff" />}

// // //         {showPoster && (
// // //           <View style={styles.posterContainer}>
// // //             <Text style={styles.posterHeader}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
// // //             <Text style={styles.posterHeader}>Mehfil-E-Milad Poster</Text>
// // //             <Text style={styles.posterText}>Day: {day}</Text>
// // //             <Text style={styles.posterText}>Date: {date}</Text>
// // //             <Text style={styles.posterText}>Time: {time}</Text>
// // //             <Text style={styles.posterText}>Naat Khuwan: {naatKhuan}</Text>
// // //             <Text style={styles.posterText}>Khatib: {khatib}</Text>
// // //             <Text style={styles.posterText}>Address: {address}</Text>
// // //             {isLangerChecked && <Text style={styles.posterText}>لنگرِ میلاد کا بھی اہتمام ہے</Text>}
// // //           </View>
// // //         )}

// // //     {pdfFilePath !== '' && !showOpenButton && (
// // //           <Button mode="contained" onPress={handleDownloadPDF} style={styles.button}>
// // //             Download PDF
// // //           </Button>
// // //         )}

// // //         {showOpenButton && (
// // //           <Button mode="contained" onPress={openPDF} style={styles.button}>
// // //             Open PDF
// // //           </Button>
// // //         )}
// // //     </ScrollView>
// // //   </ImageBackground>
// // // );
// // // };


// // // const styles = StyleSheet.create({
// // //   checkboxContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     marginVertical: 15,
// // //     backgroundColor:'white',
// // //     padding:10,
// // //   },
// // //   checkboxLabel: {
// // //     marginLeft: 8,
// // //     fontSize: 16,
// // //     color:'#000',
// // //   },

// // //   background: {
// // //         flex: 1,
// // //         resizeMode: 'cover',
// // //       },
// // //       container: {
// // //         padding: 20,
// // //         alignItems: 'center',
// // //       },
// // //       header: {
// // //         fontSize: 28,
// // //         fontWeight: 'bold',
// // //         marginBottom: 20,
// // //         textAlign: 'center',
// // //       },
// // //       input: {
// // //         width: '100%',
// // //         marginBottom: 10,
// // //       },
// // //       button: {
// // //         width: '100%',
// // //         marginVertical: 10,
// // //       },
// // //       posterContainer: {
// // //         backgroundColor:'#1687b9',
// // //         marginTop: 20,
// // //         alignItems: 'center',
// // //         padding:10,
// // //         borderRadius:20,
// // //       },
// // //       posterHeader: {
// // //         fontSize: 24,
// // //         fontWeight: 'bold',
// // //         marginBottom: 10,
// // //       },
// // //       loader: {
// // //         marginTop: 10,
// // //         backgroundColor:'#000',
// // //         borderRadius: 50,
// // //         padding: 10,
// // //         color:'#fff',
// // //       },
    
// // //       poster: {
// // //             marginVertical: 20,
// // //             padding: 20,
// // //             borderRadius: 15,
// // //             backgroundColor: '#007B5F', // VIP Green
// // //             shadowColor: '#000',
// // //             shadowOffset: {
// // //               width: 0,
// // //               height: 2,
// // //             },
// // //             shadowOpacity: 0.5,
// // //             shadowRadius: 4,
// // //             elevation: 4, // For Android shadow
// // //           },
// // //           posterTitle: {
// // //             fontSize: 34,
// // //             fontWeight: 'bold',
// // //             textAlign: 'center',
// // //             marginBottom: 15,
// // //             color: '#FFDD59', // Gold color for the title
// // //             textShadowColor: '#000', // Adding shadow to the text
// // //             textShadowOffset: { width: 1, height: 1 },
// // //             textShadowRadius: 5,
// // //           },
// // //           posterSubtitle: {
// // //             fontSize: 28,
// // //             fontWeight: 'bold',
// // //             textAlign: 'center',
// // //             marginBottom: 10,
// // //             color: '#FFDD59',
// // //             textShadowColor: '#000',
// // //             textShadowOffset: { width: 1, height: 1 },
// // //             textShadowRadius: 5,
// // //           },
// // //           posterText: {
// // //             fontSize: 20,
// // //             marginVertical: 10,
// // //             textAlign: 'center',
// // //             color: '#FFFFFF', // White text for better contrast
// // //             padding: 10,
// // //             borderRadius: 10,
// // //             backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background for text
// // //           },
// // //           highlight: {
// // //             color: '#FFDD59', // Gold highlight
// // //             fontWeight: 'bold',
// // //             fontSize: 22,
// // //           },
// // // });

// // // export default MehfilApp;













// import React, { useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid, Platform, ActivityIndicator, Image } from 'react-native';
// import { TextInput, Button, Checkbox } from 'react-native-paper';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import RNFS from 'react-native-fs'; // For file system operations
// import FileViewer from 'react-native-file-viewer'; // For opening the downloaded PDF
// import { launchImageLibrary } from 'react-native-image-picker'; // For selecting images

// const MehfilApp = () => {
//   const [day, setDay] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [naatKhuan, setNaatKhuan] = useState('');
//   const [khatib, setKhatib] = useState('');
//   const [address, setAddress] = useState('');
//   const [showPoster, setShowPoster] = useState(false);
//   const [pdfFilePath, setPdfFilePath] = useState('');
//   const [showOpenButton, setShowOpenButton] = useState(false); // For showing the "Open PDF" button
//   const [loading, setLoading] = useState(false); // Loader state
//   const [isLangerChecked, setIsLangerChecked] = useState(false); // State for the checkbox
//   const [naatImage, setNaatImage] = useState(null); // For Naat Khuwan image
//   const [khatibImage, setKhatibImage] = useState(null); // For Khatib image

//   // Function to pick an image
//   const selectImage = (setImage) => {
//     const options = {
//       mediaType: 'photo',
//     };

//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.assets && response.assets.length > 0) {
//         setImage(response.assets[0].uri); // Set the selected image URI to the state
//       }
//     });
//   };

//   // Function to request storage permissions on Android
//       const requestStoragePermission = async () => {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//             {
//               title: 'Storage Permission',
//               message: 'App needs access to your storage to download the PDF.',
//               buttonNeutral: 'Ask Me Later',
//               buttonNegative: 'Cancel',
//               buttonPositive: 'OK',
//             },
//           );
//           if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//             Alert.alert('Permission Denied', 'Storage permission is required to download the PDF.');
//             return false;
//           }
//           return true;
//         } catch (err) {
//           console.warn(err);
//           return false;
//         }
//       };

//   // Function to generate the PDF
//   const generatePDF = async () => {
//     setLoading(true); // Start loader

//     let langerContent = isLangerChecked ? `<div class="footer">لنگرِ میلاد کا بھی اہتمام ہے</div>` : '';
//     let naatImageHTML = naatImage ? `<img src="${naatImage}" alt="Naat Khuwan Image" style="width:150px; height:150px; border-radius:10px;" />` : '';
//     let khatibImageHTML = khatibImage ? `<img src="${khatibImage}" alt="Khatib Image" style="width:150px; height:150px; border-radius:10px;" />` : '';

//     let htmlContent = `
//       <html>
//         <head>
//           <style>
//             body {
//               font-family: 'Georgia', serif;
//               background-color: #F3F4F6;
//               margin: 0;
//               padding: 20px;
//             }
//             .poster {
//               max-width: 800px;
//               margin: 0 auto;
//               padding: 40px;
//               border-radius: 20px;
//               background: linear-gradient(145deg, #ffffff, #f0f0f0);
//               box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//               text-align: center;
//               border: 2px solid #e3e3e3;
//               transition: transform 0.3s ease;
//             }
//             .poster:hover {
//               transform: scale(1.03);
//             }
//             .title h1 {
//               color: #09796a;
//               font-size: 42px;
//               margin: 10px 0;
//               text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
//               font-family: 'Cursive', sans-serif;
//               letter-spacing: 2px;
//             }
//             .title {
//               font-size: 28px;
//               color: #2A9E7E;
//               margin: 15px 0;
//               font-family: 'Serif', serif;
//             }
//             .subtitle {
//               font-size: 22px;
//               color: #333;
//               margin: 10px 0;
//               font-weight: 600;
//             }
//             .divider {
//               width: 80%;
//               height: 3px;
//               background-color: #09796a;
//               margin: 30px auto;
//               border-radius: 2px;
//             }
//             .date-time, .location {
//               font-size: 20px;
//               margin: 15px 0;
//               color: #444;
//               font-weight: bold;
//             }
//             .highlight {
//               font-weight: bold;
//               color: #09796a;
//               font-size: 22px;
//             }
//             .footer {
//               margin-top: 30px;
//               font-size: 20px;
//               color: #777;
//               text-align: center;
//               font-style: italic;
//             }
//             .button {
//               background-color: #09796a;
//               color: #FFFFFF;
//               padding: 12px 25px;
//               border: none;
//               border-radius: 8px;
//               cursor: pointer;
//               margin-top: 25px;
//               display: inline-block;
//               text-align: center;
//               font-size: 18px;
//               font-weight: bold;
//               text-decoration: none;
//               box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//               transition: background-color 0.3s ease, transform 0.2s ease;
//             }
//             .button:hover {
//               background-color: #065f4d;
//               transform: translateY(-3px);
//             }
//           </style>
//         </head>
//         <body>
//           <div class="poster">
//             <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
//             <div class="title">🌙 Mehfil-e-Milad 🌙</div>
//             <div class="subtitle">Event Details</div>
//             <div class="divider"></div>
//             <div class="date-time"><h2>Day: <span class="highlight">${day}</span></h2></div>
//             <div class="date-time"><h2>Date: <span class="highlight">${date}</span></h2></div>
//             <div class="date-time"><h2>Time: <span class="highlight">${time}</span></h2></div>
//             <div class="divider"></div>
//             <div class="location">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
//             ${naatImageHTML} <!-- Naat Khuwan Image -->
//             <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
//             ${khatibImageHTML} <!-- Khatib Image -->
//             <div class="location">Address: <span class="highlight">${address}</span></div>
//             ${langerContent}
//             <div class="footer">Join Us for an Inspiring Evening!</div>
//           </div>
//         </body>
//       </html>
//     `;

//     try {
//       const pdf = await RNHTMLtoPDF.convert({
//         html: htmlContent,
//         fileName: 'Mehfil-e-Milad-Poster',
//         directory: 'Documents',
//       });

//       setPdfFilePath(pdf.filePath);
//       Alert.alert('PDF Created', 'PDF has been generated successfully.');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to create PDF. Please try again.');
//     } finally {
//       setLoading(false); // Stop loader
//     }
//   };

//   const handleDownloadPDF = async () => {
//         if (Platform.OS === 'android') {
//           const hasPermission = await requestStoragePermission();
//           if (!hasPermission) {
//             return;
//           }
//         }
    
//         const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
    
//         try {
//           await RNFS.copyFile(pdfFilePath, destinationPath);
//           Alert.alert('Download Complete', `PDF has been saved successfully to: ${destinationPath}`);
//           setShowOpenButton(true);
//         } catch (error) {
//           console.log('Error during file download: ', error);
//           Alert.alert('Error', 'Failed to download PDF. Please try again.');
//         }
//       };
    
//       const openPDF = async () => {
//         try {
//           const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
//           await FileViewer.open(destinationPath); // Opens the PDF using the destination path
//         } catch (error) {
//           console.log('Error opening file: ', error);
//           Alert.alert('Error', 'Failed to open the PDF file. Please make sure the file exists.');
//         }
//       };


//       const handleSubmit = () => {
//         setShowPoster(true);
//         generatePDF(); // Generate the PDF after showing the poster
//       };

//   return (
//     <ImageBackground
//       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
//       style={styles.background}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.header}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
//         <TextInput
//           label="Day"
//           value={day}
//           onChangeText={(text) => setDay(text)}
//           style={styles.input}
//         />
//         <TextInput
//           label="Date"
//           value={date}
//           onChangeText={(text) => setDate(text)}
//           style={styles.input}
//         />
//         <TextInput
//           label="Time"
//           value={time}
//           onChangeText={(text) => setTime(text)}
//           style={styles.input}
//         />
//         <TextInput
//           label="Naat Khuwan Name"
//           value={naatKhuan}
//           onChangeText={(text) => setNaatKhuan(text)}
//           style={styles.input}
//         />
//         <Button onPress={() => selectImage(setNaatImage)} mode="contained" style={styles.imagePickerButton}>
//           Select Naat Khuwan Image
//         </Button>
//         {naatImage && <Image source={{ uri: naatImage }} style={styles.selectedImage} />}

//         <TextInput
//           label="Khatib Name"
//           value={khatib}
//           onChangeText={(text) => setKhatib(text)}
//           style={styles.input}
//         />
//         <Button onPress={() => selectImage(setKhatibImage)} mode="contained" style={styles.imagePickerButton}>
//           Select Khatib Image
//         </Button>
//         {khatibImage && <Image source={{ uri: khatibImage }} style={styles.selectedImage} />}

//         <TextInput
//           label="Address"
//           value={address}
//           onChangeText={(text) => setAddress(text)}
//           style={styles.input}
//         />
//         <View style={styles.checkboxContainer}>
//           <Checkbox
//             status={isLangerChecked ? 'checked' : 'unchecked'}
//             onPress={() => setIsLangerChecked(!isLangerChecked)}
//           />
//           <Text style={styles.checkboxLabel}>Include "Langer" text</Text>
//         </View>

//         <Button mode="contained" onPress={handleSubmit} style={styles.button} disabled={loading}>
//           {loading ? <ActivityIndicator animating={true} color="#ffffff" /> : 'Generate Poster PDF'}
//         </Button>

//         {showPoster && (
//           <View style={styles.posterContainer}>
//             <Text style={styles.posterHeader}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
//             <Text style={styles.posterHeader}>Mehfil-E-Milad Poster</Text>
//             <Text style={styles.posterText}>Day: {day}</Text>
//             <Text style={styles.posterText}>Date: {date}</Text>
//             <Text style={styles.posterText}>Time: {time}</Text>

//             {/* Naat Khuwan Section with Image */}
//             <View style={styles.personContainer}>
//               <Text style={styles.posterText}>Naat Khuwan: {naatKhuan}</Text>
//               {naatImage && <Image source={{ uri: naatImage }} style={styles.posterImage} />}
//             </View>

//             {/* Khatib Section with Image */}
//             <View style={styles.personContainer}>
//               <Text style={styles.posterText}>Khatib: {khatib}</Text>
//               {khatibImage && <Image source={{ uri: khatibImage }} style={styles.posterImage} />}
//             </View>

//             <Text style={styles.posterText}>Address: {address}</Text>
//             {isLangerChecked && <Text style={styles.posterText}>لنگرِ میلاد کا بھی اہتمام ہے</Text>}
//           </View>

//         )}

//           {pdfFilePath !== '' && !showOpenButton && (
//             <Button mode="contained" onPress={handleDownloadPDF} style={styles.button}>
//               Download PDF
//             </Button>
//           )}

//           {showOpenButton && (
//             <Button mode="contained" onPress={openPDF} style={styles.button}>
//               Open PDF
//             </Button>
//           )}

//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   container: {
//     padding: 20,
//   },

//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 15,
//     backgroundColor:'white',
//     padding:10,
//   },
//   checkboxLabel: {
//     marginLeft: 8,
//     fontSize: 16,
//     color:'#000',
//   },

//   header: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#ffffff',
//     fontWeight: 'bold',
//   },
//   input: {
//     marginBottom: 10,
//   },
//   imagePickerButton: {
//     marginVertical: 10,
//   },
//   selectedImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginVertical: 10,
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: '#09796a',
//   },
//   openButton: {
//     marginTop: 20,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   checkboxLabel: {
//     marginLeft: 8,
//   },

//   posterimage:{
//     height: 50,
//     width:50,
//   },

//   personContainer: {
//     flexDirection: 'row',
//     alignItems: 'center', // Align image and text vertically centered
//     marginVertical: 10,
//   },

//        posterContainer: {
//             backgroundColor:'#1687b9',
//             marginTop: 20,
//             alignItems: 'center',
//             padding:10,
//             borderRadius:20,
//           },
//           posterHeader: {
//             fontSize: 24,
//             fontWeight: 'bold',
//             marginBottom: 10,
//           },

//   poster: {
//     marginVertical: 20,
//     padding: 20,
//     borderRadius: 15,
//     backgroundColor: '#007B5F', // VIP Green
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.5,
//     shadowRadius: 4,
//     elevation: 4, // For Android shadow
//   },
//   posterTitle: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 15,
//     color: '#FFDD59', // Gold color for the title
//     textShadowColor: '#000', // Adding shadow to the text
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 5,
//   },
//   posterSubtitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//     color: '#FFDD59',
//     textShadowColor: '#000',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 5,
//   },
//   posterText: {
//     fontSize: 20,
//     marginVertical: 10,
//     textAlign: 'center',
//     color: '#FFFFFF', // White text for better contrast
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background for text
//   },
//   highlight: {
//     color: '#FFDD59', // Gold highlight
//     fontWeight: 'bold',
//     fontSize: 22,
//   },
// });

// export default MehfilApp;





















































import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid, Platform, ActivityIndicator, Image } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import { launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker

const MehfilApp = () => {
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [naatKhuan, setNaatKhuan] = useState('');
  const [khatib, setKhatib] = useState('');
  const [address, setAddress] = useState('');
  const [showPoster, setShowPoster] = useState(false);
  const [pdfFilePath, setPdfFilePath] = useState('');
  const [showOpenButton, setShowOpenButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLangerChecked, setIsLangerChecked] = useState(false);
  const [naatImage, setNaatImage] = useState(null);
  const [khatibImage, setKhatibImage] = useState(null);
  
  // New state for date picker
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle date change
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
    // Format the date to a readable string
    setDate(currentDate.toLocaleDateString('en-GB')); // Change the format as needed
  };


    // Function to pick an image
      const selectImage = (setImage) => {
        const options = {
          mediaType: 'photo',
        };

        launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.assets && response.assets.length > 0) {
            setImage(response.assets[0].uri); // Set the selected image URI to the state
          }
        });
      };

      // Function to request storage permissions on Android
          const requestStoragePermission = async () => {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                  title: 'Storage Permission',
                  message: 'App needs access to your storage to download the PDF.',
                  buttonNeutral: 'Ask Me Later',
                  buttonNegative: 'Cancel',
                  buttonPositive: 'OK',
                },
              );
              if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                Alert.alert('Permission Denied', 'Storage permission is required to download the PDF.');
                return false;
              }
              return true;
            } catch (err) {
              console.warn(err);
              return false;
            }
          };

      // Function to generate the PDF
      const generatePDF = async () => {
        setLoading(true); // Start loader

        let langerContent = isLangerChecked ? `<div class="footer">لنگرِ میلاد کا بھی اہتمام ہے</div>` : '';
        let naatImageHTML = naatImage ? `<img src="${naatImage}" alt="Naat Khuwan Image" style="width:150px; height:150px; border-radius:10px;" />` : '';
        let khatibImageHTML = khatibImage ? `<img src="${khatibImage}" alt="Khatib Image" style="width:150px; height:150px; border-radius:10px;" />` : '';

        let htmlContent = `
          <html>
            <head>
              <style>
                body {
                  font-family: 'Georgia', serif;
                  background-color: #F3F4F6;
                  margin: 0;
                  padding: 20px;
                }
                .poster {
                  max-width: 800px;
                  margin: 0 auto;
                  padding: 40px;
                  border-radius: 20px;
                  background: linear-gradient(145deg, #ffffff, #f0f0f0);
                  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                  text-align: center;
                  border: 2px solid #e3e3e3;
                  transition: transform 0.3s ease;
                }
                .poster:hover {
                  transform: scale(1.03);
                }
                .title h1 {
                  color: #09796a;
                  font-size: 42px;
                  margin: 10px 0;
                  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                  font-family: 'Cursive', sans-serif;
                  letter-spacing: 2px;
                }
                .title {
                  font-size: 28px;
                  color: #2A9E7E;
                  margin: 15px 0;
                  font-family: 'Serif', serif;
                }
                .subtitle {
                  font-size: 22px;
                  color: #333;
                  margin: 10px 0;
                  font-weight: 600;
                }
                .divider {
                  width: 80%;
                  height: 3px;
                  background-color: #09796a;
                  margin: 30px auto;
                  border-radius: 2px;
                }
                .date-time, .location {
                  font-size: 20px;
                  margin: 15px 0;
                  color: #444;
                  font-weight: bold;
                }
                .highlight {
                  font-weight: bold;
                  color: #09796a;
                  font-size: 22px;
                }
                .footer {
                  margin-top: 30px;
                  font-size: 20px;
                  color: #777;
                  text-align: center;
                  font-style: italic;
                }
                .button {
                  background-color: #09796a;
                  color: #FFFFFF;
                  padding: 12px 25px;
                  border: none;
                  border-radius: 8px;
                  cursor: pointer;
                  margin-top: 25px;
                  display: inline-block;
                  text-align: center;
                  font-size: 18px;
                  font-weight: bold;
                  text-decoration: none;
                  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                  transition: background-color 0.3s ease, transform 0.2s ease;
                }
                .button:hover {
                  background-color: #065f4d;
                  transform: translateY(-3px);
                }
              </style>
            </head>
            <body>
              <div class="poster">
                <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
                <div class="title">🌙 Mehfil-e-Milad 🌙</div>
                <div class="subtitle">Event Details</div>
                <div class="divider"></div>
                <div class="date-time"><h2>Day: <span class="highlight">${day}</span></h2></div>
                <div class="date-time"><h2>Date: <span class="highlight">${date}</span></h2></div>
                <div class="date-time"><h2>Time: <span class="highlight">${time}</span></h2></div>
                <div class="divider"></div>
                <div class="location">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
                ${naatImageHTML} <!-- Naat Khuwan Image -->
                <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
                ${khatibImageHTML} <!-- Khatib Image -->
                <div class="location">Address: <span class="highlight">${address}</span></div>
                ${langerContent}
                <div class="footer">Join Us for an Inspiring Evening!</div>
              </div>
            </body>
          </html>
        `;

        try {
          const pdf = await RNHTMLtoPDF.convert({
            html: htmlContent,
            fileName: 'Mehfil-e-Milad-Poster',
            directory: 'Documents',
          });

          setPdfFilePath(pdf.filePath);
          Alert.alert('PDF Created', 'PDF has been generated successfully.');
        } catch (error) {
          Alert.alert('Error', 'Failed to create PDF. Please try again.');
        } finally {
          setLoading(false); // Stop loader
        }
      };

      const handleDownloadPDF = async () => {
            if (Platform.OS === 'android') {
              const hasPermission = await requestStoragePermission();
              if (!hasPermission) {
                return;
              }
            }
        
            const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
        
            try {
              await RNFS.copyFile(pdfFilePath, destinationPath);
              Alert.alert('Download Complete', `PDF has been saved successfully to: ${destinationPath}`);
              setShowOpenButton(true);
            } catch (error) {
              console.log('Error during file download: ', error);
              Alert.alert('Error', 'Failed to download PDF. Please try again.');
            }
          };
        
          const openPDF = async () => {
            try {
              const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
              await FileViewer.open(destinationPath); // Opens the PDF using the destination path
            } catch (error) {
              console.log('Error opening file: ', error);
              Alert.alert('Error', 'Failed to open the PDF file. Please make sure the file exists.');
            }
          };


          const handleSubmit = () => {
            setShowPoster(true);
            generatePDF(); // Generate the PDF after showing the poster
          };



  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
        <TextInput
          label="Day"
          value={day}
          onChangeText={(text) => setDay(text)}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <TextInput
            label="Date"
            value={date}
            editable={false} // Prevent editing directly
            style={styles.input}
          />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        <TextInput
          label="Time"
          value={time}
          onChangeText={(text) => setTime(text)}
          style={styles.input}
        />
        <TextInput
          label="Naat Khuwan Name"
          value={naatKhuan}
          onChangeText={(text) => setNaatKhuan(text)}
          style={styles.input}
        />
        <Button onPress={() => selectImage(setNaatImage)} mode="contained" style={styles.imagePickerButton}>
          Select Naat Khuwan Image
        </Button>
        {naatImage && <Image source={{ uri: naatImage }} style={styles.selectedImage} />}

        <TextInput
          label="Khatib Name"
          value={khatib}
          onChangeText={(text) => setKhatib(text)}
          style={styles.input}
        />
        <Button onPress={() => selectImage(setKhatibImage)} mode="contained" style={styles.imagePickerButton}>
          Select Khatib Image
        </Button>
        {khatibImage && <Image source={{ uri: khatibImage }} style={styles.selectedImage} />}

        <TextInput
          label="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
        />
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={isLangerChecked ? 'checked' : 'unchecked'}
            onPress={() => setIsLangerChecked(!isLangerChecked)}
          />
          <Text style={styles.checkboxLabel}>Include "Langer" Announcment</Text>
        </View>

        <Button mode="contained" onPress={handleSubmit} style={styles.button} disabled={loading}>
          {loading ? <ActivityIndicator animating={true} color="#ffffff" /> : 'Generate Poster PDF'}
        </Button>

        {showPoster && (
          <View style={styles.posterContainer}>
            <Text style={styles.posterHeader}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
            <Text style={styles.posterHeader}>Mehfil-E-Milad Poster</Text>
            <Text style={styles.posterText}>Day: {day}</Text>
            <Text style={styles.posterText}>Date: {date}</Text>
            <Text style={styles.posterText}>Time: {time}</Text>

            {/* Naat Khuwan Section with Image */}
            <View style={styles.personContainer}>
              <Text style={styles.posterText}>Naat Khuwan: {naatKhuan}</Text>
              {naatImage && <Image source={{ uri: naatImage }} style={styles.posterImage} />}
            </View>

            {/* Khatib Section with Image */}
            <View style={styles.personContainer}>
              <Text style={styles.posterText}>Khatib: {khatib}</Text>
              {khatibImage && <Image source={{ uri: khatibImage }} style={styles.posterImage} />}
            </View>

            <Text style={styles.posterText}>Address: {address}</Text>
            {isLangerChecked && <Text style={styles.posterText}>لنگرِ میلاد کا بھی اہتمام ہے</Text>}
          </View>
        )}

        {pdfFilePath !== '' && !showOpenButton && (
          <Button mode="contained" onPress={handleDownloadPDF} style={styles.button}>
            Download PDF
          </Button>
        )}

        {showOpenButton && (
          <Button mode="contained" onPress={openPDF} style={styles.button}>
            Open PDF
          </Button>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
  },
  imagePickerButton: {
    marginVertical: 10,
  },
  selectedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#09796a',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor:'white',
    padding:10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    color:'#000',
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  posterImage:{
    height : 50,
    width: 50,
    margin:4,
  },
  posterContainer: {
    backgroundColor: '#1687b9',
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  posterHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  posterText: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default MehfilApp;
