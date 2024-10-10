// // import React, { useState } from 'react';
// // import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid, Platform, ActivityIndicator, Image } from 'react-native';
// // import { TextInput, Button, Checkbox } from 'react-native-paper';
// // import RNHTMLtoPDF from 'react-native-html-to-pdf';
// // import RNFS from 'react-native-fs';
// // import FileViewer from 'react-native-file-viewer';
// // import { launchImageLibrary } from 'react-native-image-picker';
// // import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker

// // const MehfilApp = () => {
// //   const [day, setDay] = useState('');
// //   const [date, setDate] = useState('');
// //   const [time, setTime] = useState('');
// //   const [naatKhuan, setNaatKhuan] = useState('');
// //   const [khatib, setKhatib] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [showPoster, setShowPoster] = useState(false);
// //   const [pdfFilePath, setPdfFilePath] = useState('');
// //   const [showOpenButton, setShowOpenButton] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [isLangerChecked, setIsLangerChecked] = useState(false);
// //   const [naatImage, setNaatImage] = useState(null);
// //   const [khatibImage, setKhatibImage] = useState(null);
  
// //   // New state for date picker
// //   const [showDatePicker, setShowDatePicker] = useState(false);
// //   const [selectedDate, setSelectedDate] = useState(new Date());

// //   // Function to handle date change
// //   const onChangeDate = (event, selectedDate) => {
// //     const currentDate = selectedDate || date;
// //     setShowDatePicker(false);
// //     setSelectedDate(currentDate);
// //     // Format the date to a readable string
// //     setDate(currentDate.toLocaleDateString('en-GB')); // Change the format as needed
// //   };


// //     // Function to pick an image
// //       const selectImage = (setImage) => {
// //         const options = {
// //           mediaType: 'photo',
// //         };

// //         launchImageLibrary(options, (response) => {
// //           if (response.didCancel) {
// //             console.log('User cancelled image picker');
// //           } else if (response.error) {
// //             console.log('ImagePicker Error: ', response.error);
// //           } else if (response.assets && response.assets.length > 0) {
// //             setImage(response.assets[0].uri); // Set the selected image URI to the state
// //           }
// //         });
// //       };

// //       // Function to request storage permissions on Android
// //           const requestStoragePermission = async () => {
// //             try {
// //               const granted = await PermissionsAndroid.request(
// //                 PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
// //                 {
// //                   title: 'Storage Permission',
// //                   message: 'App needs access to your storage to download the PDF.',
// //                   buttonNeutral: 'Ask Me Later',
// //                   buttonNegative: 'Cancel',
// //                   buttonPositive: 'OK',
// //                 },
// //               );
// //               if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
// //                 Alert.alert('Permission Denied', 'Storage permission is required to download the PDF.');
// //                 return false;
// //               }
// //               return true;
// //             } catch (err) {
// //               console.warn(err);
// //               return false;
// //             }
// //           };

// //       // Function to generate the PDF
// //       const generatePDF = async () => {
// //         setLoading(true); // Start loader

// //         let langerContent = isLangerChecked ? `<div class="footer">لنگرِ میلاد کا بھی اہتمام ہے</div>` : '';
// //         let naatImageHTML = naatImage ? `<img src="${naatImage}" alt="Naat Khuwan Image" style="width:150px; height:150px; border-radius:10px;" />` : '';
// //         let khatibImageHTML = khatibImage ? `<img src="${khatibImage}" alt="Khatib Image" style="width:150px; height:150px; border-radius:10px;" />` : '';

// //         let htmlContent = `
// //           <html>
// //             <head>
// //               <style>
// //                 body {
// //                   font-family: 'Georgia', serif;
// //                   background-color: #F3F4F6;
// //                   margin: 0;
// //                   padding: 20px;
// //                 }
// //                 .poster {
// //                   max-width: 800px;
// //                   margin: 0 auto;
// //                   padding: 40px;
// //                   border-radius: 20px;
// //                   background: linear-gradient(145deg, #ffffff, #f0f0f0);
// //                   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
// //                   text-align: center;
// //                   border: 2px solid #e3e3e3;
// //                   transition: transform 0.3s ease;
// //                 }
// //                 .poster:hover {
// //                   transform: scale(1.03);
// //                 }
// //                 .title h1 {
// //                   color: #09796a;
// //                   font-size: 42px;
// //                   margin: 10px 0;
// //                   text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
// //                   font-family: 'Cursive', sans-serif;
// //                   letter-spacing: 2px;
// //                 }
// //                 .title {
// //                   font-size: 28px;
// //                   color: #2A9E7E;
// //                   margin: 15px 0;
// //                   font-family: 'Serif', serif;
// //                 }
// //                 .subtitle {
// //                   font-size: 22px;
// //                   color: #333;
// //                   margin: 10px 0;
// //                   font-weight: 600;
// //                 }
// //                 .divider {
// //                   width: 80%;
// //                   height: 3px;
// //                   background-color: #09796a;
// //                   margin: 30px auto;
// //                   border-radius: 2px;
// //                 }
// //                 .date-time, .location {
// //                   font-size: 20px;
// //                   margin: 15px 0;
// //                   color: #444;
// //                   font-weight: bold;
// //                 }
// //                 .highlight {
// //                   font-weight: bold;
// //                   color: #09796a;
// //                   font-size: 22px;
// //                 }
// //                 .footer {
// //                   margin-top: 30px;
// //                   font-size: 20px;
// //                   color: #777;
// //                   text-align: center;
// //                   font-style: italic;
// //                 }
// //                 .button {
// //                   background-color: #09796a;
// //                   color: #FFFFFF;
// //                   padding: 12px 25px;
// //                   border: none;
// //                   border-radius: 8px;
// //                   cursor: pointer;
// //                   margin-top: 25px;
// //                   display: inline-block;
// //                   text-align: center;
// //                   font-size: 18px;
// //                   font-weight: bold;
// //                   text-decoration: none;
// //                   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
// //                   transition: background-color 0.3s ease, transform 0.2s ease;
// //                 }
// //                 .button:hover {
// //                   background-color: #065f4d;
// //                   transform: translateY(-3px);
// //                 }
// //               </style>
// //             </head>
// //             <body>
// //               <div class="poster">
// //                 <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
// //                 <div class="title">🌙 Mehfil-e-Milad 🌙</div>
// //                 <div class="subtitle">Event Details</div>
// //                 <div class="divider"></div>
// //                 <div class="date-time"><h2>Day: <span class="highlight">${day}</span></h2></div>
// //                 <div class="date-time"><h2>Date: <span class="highlight">${date}</span></h2></div>
// //                 <div class="date-time"><h2>Time: <span class="highlight">${time}</span></h2></div>
// //                 <div class="divider"></div>
// //                 <div class="location">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
// //                 ${naatImageHTML} <!-- Naat Khuwan Image -->
// //                 <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
// //                 ${khatibImageHTML} <!-- Khatib Image -->
// //                 <div class="location">Address: <span class="highlight">${address}</span></div>
// //                 ${langerContent}
// //                 <div class="footer">Join Us for an Inspiring Evening!</div>
// //               </div>
// //             </body>
// //           </html>
// //         `;

// //         try {
// //           const pdf = await RNHTMLtoPDF.convert({
// //             html: htmlContent,
// //             fileName: 'Mehfil-e-Milad-Poster',
// //             directory: 'Documents',
// //           });

// //           setPdfFilePath(pdf.filePath);
// //           Alert.alert('PDF Created', 'PDF has been generated successfully.');
// //         } catch (error) {
// //           Alert.alert('Error', 'Failed to create PDF. Please try again.');
// //         } finally {
// //           setLoading(false); // Stop loader
// //         }
// //       };

// //       const handleDownloadPDF = async () => {
// //             if (Platform.OS === 'android') {
// //               const hasPermission = await requestStoragePermission();
// //               if (!hasPermission) {
// //                 return;
// //               }
// //             }
        
// //             const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
        
// //             try {
// //               await RNFS.copyFile(pdfFilePath, destinationPath);
// //               Alert.alert('Download Complete', `PDF has been saved successfully to: ${destinationPath}`);
// //               setShowOpenButton(true);
// //             } catch (error) {
// //               console.log('Error during file download: ', error);
// //               Alert.alert('Error', 'Failed to download PDF. Please try again.');
// //             }
// //           };
        
// //           const openPDF = async () => {
// //             try {
// //               const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
// //               await FileViewer.open(destinationPath); // Opens the PDF using the destination path
// //             } catch (error) {
// //               console.log('Error opening file: ', error);
// //               Alert.alert('Error', 'Failed to open the PDF file. Please make sure the file exists.');
// //             }
// //           };


// //           const handleSubmit = () => {
// //             setShowPoster(true);
// //             generatePDF(); // Generate the PDF after showing the poster
// //           };



// //   return (
// //     <ImageBackground
// //       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
// //       style={styles.background}
// //     >
// //       <ScrollView contentContainerStyle={styles.container}>
// //         <Text style={styles.header}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
// //         <TextInput
// //           label="Day"
// //           value={day}
// //           onChangeText={(text) => setDay(text)}
// //           style={styles.input}
// //         />
// //         <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
// //           <TextInput
// //             label="Date"
// //             value={date}
// //             editable={false} // Prevent editing directly
// //             style={styles.input}
// //           />
// //         </TouchableOpacity>

// //         {showDatePicker && (
// //           <DateTimePicker
// //             testID="dateTimePicker"
// //             value={selectedDate}
// //             mode="date"
// //             display="default"
// //             onChange={onChangeDate}
// //           />
// //         )}

// //         <TextInput
// //           label="Time"
// //           value={time}
// //           onChangeText={(text) => setTime(text)}
// //           style={styles.input}
// //         />
// //         <TextInput
// //           label="Naat Khuwan Name"
// //           value={naatKhuan}
// //           onChangeText={(text) => setNaatKhuan(text)}
// //           style={styles.input}
// //         />
// //         <Button onPress={() => selectImage(setNaatImage)} mode="contained" style={styles.imagePickerButton}>
// //           Select Naat Khuwan Image
// //         </Button>
// //         {naatImage && <Image source={{ uri: naatImage }} style={styles.selectedImage} />}

// //         <TextInput
// //           label="Khatib Name"
// //           value={khatib}
// //           onChangeText={(text) => setKhatib(text)}
// //           style={styles.input}
// //         />
// //         <Button onPress={() => selectImage(setKhatibImage)} mode="contained" style={styles.imagePickerButton}>
// //           Select Khatib Image
// //         </Button>
// //         {khatibImage && <Image source={{ uri: khatibImage }} style={styles.selectedImage} />}

// //         <TextInput
// //           label="Address"
// //           value={address}
// //           onChangeText={(text) => setAddress(text)}
// //           style={styles.input}
// //         />
// //         <View style={styles.checkboxContainer}>
// //           <Checkbox
// //             status={isLangerChecked ? 'checked' : 'unchecked'}
// //             onPress={() => setIsLangerChecked(!isLangerChecked)}
// //           />
// //           <Text style={styles.checkboxLabel}>Include "Langer" Announcment</Text>
// //         </View>

// //         <Button mode="contained" onPress={handleSubmit} style={styles.button} disabled={loading}>
// //           {loading ? <ActivityIndicator animating={true} color="#ffffff" /> : 'Generate Poster PDF'}
// //         </Button>

// //         {showPoster && (
// //           <View style={styles.posterContainer}>
// //             <Text style={styles.posterHeader}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
// //             <Text style={styles.posterHeader}>Mehfil-E-Milad Poster</Text>
// //             <Text style={styles.posterText}>Day: {day}</Text>
// //             <Text style={styles.posterText}>Date: {date}</Text>
// //             <Text style={styles.posterText}>Time: {time}</Text>

// //             {/* Naat Khuwan Section with Image */}
// //             <View style={styles.personContainer}>
// //               <Text style={styles.posterText}>Naat Khuwan: {naatKhuan}</Text>
// //               {naatImage && <Image source={{ uri: naatImage }} style={styles.posterImage} />}
// //             </View>

// //             {/* Khatib Section with Image */}
// //             <View style={styles.personContainer}>
// //               <Text style={styles.posterText}>Khatib: {khatib}</Text>
// //               {khatibImage && <Image source={{ uri: khatibImage }} style={styles.posterImage} />}
// //             </View>

// //             <Text style={styles.posterText}>Address: {address}</Text>
// //             {isLangerChecked && <Text style={styles.posterText}>لنگرِ میلاد کا بھی اہتمام ہے</Text>}
// //           </View>
// //         )}

// //         {pdfFilePath !== '' && !showOpenButton && (
// //           <Button mode="contained" onPress={handleDownloadPDF} style={styles.button}>
// //             Download PDF
// //           </Button>
// //         )}

// //         {showOpenButton && (
// //           <Button mode="contained" onPress={openPDF} style={styles.button}>
// //             Open PDF
// //           </Button>
// //         )}
// //       </ScrollView>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //     resizeMode: 'cover',
// //   },
// //   container: {
// //     padding: 20,
// //   },
// //   header: {
// //     fontSize: 24,
// //     textAlign: 'center',
// //     marginBottom: 20,
// //     color: '#ffffff',
// //     fontWeight: 'bold',
// //   },
// //   input: {
// //     marginBottom: 10,
// //   },
// //   imagePickerButton: {
// //     marginVertical: 10,
// //   },
// //   selectedImage: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 10,
// //     marginVertical: 10,
// //   },
// //   button: {
// //     marginTop: 20,
// //     backgroundColor: '#09796a',
// //   },
// //   checkboxContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginVertical: 15,
// //     backgroundColor:'white',
// //     padding:10,
// //   },
// //   checkboxLabel: {
// //     marginLeft: 8,
// //     fontSize: 16,
// //     color:'#000',
// //   },
// //   personContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginVertical: 10,
// //   },
// //   posterImage:{
// //     height : 50,
// //     width: 50,
// //     margin:4,
// //   },
// //   posterContainer: {
// //     backgroundColor: '#1687b9',
// //     marginTop: 20,
// //     alignItems: 'center',
// //     padding: 10,
// //     borderRadius: 20,
// //   },
// //   posterHeader: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   posterText: {
// //     fontSize: 20,
// //     marginVertical: 10,
// //     textAlign: 'center',
// //     color: '#FFFFFF',
// //     padding: 10,
// //     borderRadius: 10,
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// // });

// // export default MehfilApp;










// // import React, { useState } from 'react';
// // import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid, Platform, ActivityIndicator, Image } from 'react-native';
// // import { TextInput, Button } from 'react-native-paper';
// // import RNHTMLtoPDF from 'react-native-html-to-pdf';
// // import RNFS from 'react-native-fs';
// // import FileViewer from 'react-native-file-viewer';
// // import { launchImageLibrary } from 'react-native-image-picker';
// // import DateTimePicker from '@react-native-community/datetimepicker';
// // import { Picker } from '@react-native-picker/picker'; // Import the Picker component
// // import BouncyCheckbox from "react-native-bouncy-checkbox";


// // const MehfilApp = () => {
// //   const [day, setDay] = useState('');
// //   const [date, setDate] = useState('');
// //   const [time, setTime] = useState('');
// //   const [khatib, setKhatib] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [showPoster, setShowPoster] = useState(false);
// //   const [pdfFilePath, setPdfFilePath] = useState('');
// //   const [showOpenButton, setShowOpenButton] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [isLangerChecked, setIsLangerChecked] = useState(false);
// //   const [khatibImage, setKhatibImage] = useState(null);

// //   const [eventType, setEventType] = useState(''); // New state for event type
// //   const [organization, setOrganization] = useState(''); // State for Organization Mehfil

  
// //   // State for multiple Naat Khuwans
// //   const [naatKhuans, setNaatKhuans] = useState([
// //     { name: '', image: null },
// //   ]);

// //   const [showDatePicker, setShowDatePicker] = useState(false);
// //   const [selectedDate, setSelectedDate] = useState(new Date());

// //   const onChangeDate = (event, selectedDate) => {
// //     const currentDate = selectedDate || date;
// //     setShowDatePicker(false);
// //     setSelectedDate(currentDate);
// //     setDate(currentDate.toLocaleDateString('en-GB')); // Format the date
// //   };

// //    // Function to handle Khatib image selection
// //    const selectKhatibImage = () => {
// //     console.log("Selecting image for Khatib");
// //     const options = { mediaType: 'photo' };
// //     launchImageLibrary(options, (response) => {
// //       if (!response.didCancel && response.assets) {
// //         const uri = response.assets[0].uri;
// //         setKhatibImage(uri);
// //       }
// //     });
// //   };

// //   // Function to handle Naat Khuwan image selection
// //   const selectNaatKhuanImage = (index) => {
// //     console.log("Selecting image for Naat Khuwan at index:", index);
// //     const options = { mediaType: 'photo' };
// //     launchImageLibrary(options, (response) => {
// //       if (!response.didCancel && response.assets) {
// //         const uri = response.assets[0].uri;
// //         handleNaatKhuanChange(index, 'image', uri);
// //       }
// //     });
// //   };

// //   // Function to handle Naat Khuwan changes (name or image)
// //   const handleNaatKhuanChange = (index, field, value) => {
// //     const updatedNaatKhuans = [...naatKhuans];
// //     updatedNaatKhuans[index][field] = value;
// //     setNaatKhuans(updatedNaatKhuans);
// //   };

// //   // Function to add a new Naat Khuwan input field
// //   const addNaatKhuan = () => {
// //     setNaatKhuans([...naatKhuans, { name: '', image: null }]);
// //   };

  

// //   const requestStoragePermission = async () => {
// //     try {
// //       const granted = await PermissionsAndroid.request(
// //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
// //         {
// //           title: 'Storage Permission',
// //           message: 'App needs access to your storage to download the PDF.',
// //           buttonNeutral: 'Ask Me Later',
// //           buttonNegative: 'Cancel',
// //           buttonPositive: 'OK',
// //         },
// //       );
// //       if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
// //         Alert.alert('Permission Denied', 'Storage permission is required to download the PDF.');
// //         return false;
// //       }
// //       return true;
// //     } catch (err) {
// //       console.warn(err);
// //       return false;
// //     }
// //   };

// //   const generatePDF = async () => {
// //     setLoading(true);
// //     let langerContent = isLangerChecked ? `<div class="footer">لنگرِ میلاد کا بھی اہتمام ہے</div>` : '';
    
// //     // Create Naat Khuwans HTML
// //     let naatKhuansHTML = naatKhuans.map((nk, index) => `<div class="naatKhuwanDisplay">
// //       <div class="location">Naat Khuwan: <span class="highlight">${nk.name}</span></div>
// //       ${nk.image ? `<img src="${nk.image}" alt="Naat Khuwan Image" style="width:150px; height:150px; border-radius:50%;" /></div>` : ''}
// //     `).join('');
  
// //     let khatibImageHTML = khatibImage ? `<img src="${khatibImage}" alt="Khatib Image" style="width:150px; height:150px; border-radius:50%;" />` : '';
  
// //     let htmlContent = `
// //       <html>
// //         <head>
// //           <style>
// //             body { font-family: 'Georgia', serif; background-color: #F3F4F6; padding: 20px; }
// //             .poster { max-width: 800px; margin: 0 auto; padding: 40px; border-radius: 20px; background: #fff; text-align: center; }
// //             .title h1 { color: #09796a; font-size: 42px; margin: 10px 0; }
// //             .date-time, .location { font-size: 20px; margin: 15px 0; }
// //             .highlight { font-weight: bold; color: #09796a; }
// //             .naatKhuwanDisplay{display:flex;justify-content: center; align-items: center}
// //           </style>
// //         </head>
// //         <body>
// //           <div class="poster">
// //             <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
// //             <div class="title"><h1>Mehfil-e-Milad</h1></div>
// //             <div class="title"><h1>${eventType}</h1></div>
// //             <div class="date-time">Day: <span class="highlight">${day}</span></div>
// //             <div class="date-time">Date: <span class="highlight">${date}</span></div>
// //             <div class="date-time">Time: <span class="highlight">${time}</span></div>
// //             ${naatKhuansHTML} <!-- Naat Khuwans with Images -->
// //             <div class="divider"></div>
// //             ${khatibImageHTML} <!-- Khatib Image -->
// //             <div class="location">Khatib: <span class="highlight">${khatib}</span></div> <!-- Khatib Name -->
// //             <div class="location">Address: <span class="highlight">${address}</span></div>
// //             ${langerContent}
// //           </div>
// //         </body>
// //       </html>
// //     `;
  
// //     try {
// //       const pdf = await RNHTMLtoPDF.convert({
// //         html: htmlContent,
// //         fileName: 'Mehfil-e-Milad-Poster',
// //         directory: 'Documents',
// //       });
  
// //       setPdfFilePath(pdf.filePath);
// //       Alert.alert('PDF Created', 'PDF has been generated successfully.');
// //     } catch (error) {
// //       Alert.alert('Error', 'Failed to create PDF. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// // };
 

// //         const handleDownloadPDF = async () => {
// //           if (Platform.OS === 'android') {
// //             const hasPermission = await requestStoragePermission();
// //             if (!hasPermission) {
// //               return;
// //             }
// //           }

// //           const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;

// //           try {
// //             await RNFS.copyFile(pdfFilePath, destinationPath);
// //             Alert.alert('Download Complete', `PDF has been saved successfully to: ${destinationPath}`);
// //             setShowOpenButton(true);
// //           } catch (error) {
// //             console.log('Error during file download: ', error);
// //             Alert.alert('Error', 'Failed to download PDF. Please try again.');
// //           }
// //         };

// //         const openPDF = async () => {
// //           try {
// //             const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
// //             await FileViewer.open(destinationPath); // Opens the PDF using the destination path
// //           } catch (error) {
// //             console.log('Error opening file: ', error);
// //             Alert.alert('Error', 'Failed to open the PDF file. Please make sure the file exists.');
// //           }
// //         };


// //   const handleSubmit = () => {
// //     setShowPoster(true);
// //     generatePDF();
// //   };

// //   return (
// //     <ImageBackground
// //       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
// //       style={styles.background}
// //     >
// //       <ScrollView contentContainerStyle={styles.container}>
// //         <Text style={styles.header}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
// //         <TextInput label="Day" value={day} onChangeText={(text) => setDay(text)} style={styles.input} />
// //         <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
// //           <TextInput label="Date" value={date} editable={false} style={styles.input} />
// //         </TouchableOpacity>

// //         {showDatePicker && (
// //           <DateTimePicker testID="dateTimePicker" value={selectedDate} mode="date" display="default" onChange={onChangeDate} />
// //         )}

// //         <TextInput label="Time" value={time} onChangeText={(text) => setTime(text)} style={styles.input} />
        
// //           {/* Naat Khuwan Section */}
// //             <Text style={{ fontSize: 18, marginTop: 10,marginBottom:10, }}>نعت خواں:</Text>
// //             {naatKhuans.map((naatKhuan, index) => (
// //               <View key={index} style={{ marginBottom: 1 }}>
// //                 <TextInput 
// //                   value={naatKhuan.name} // Ensure this links to a state variable
// //                   onChangeText={(text) => {
// //                     const updatedNaatKhuans = [...naatKhuans];
// //                     updatedNaatKhuans[index].name = text; // Update the name in the array
// //                     setNaatKhuans(updatedNaatKhuans); // Update the state
// //                   }}
// //                   placeholder={`Naat Khuwan ${index + 1} Name`} // Add a placeholder for clarity
// //                 />
// //                 <Button onPress={() => selectNaatKhuanImage(index)} mode="contained" style={styles.button}>
// //                   {`Select Naat Khuwan ${index + 1} Image`}                
// //                 </Button>
// //                 {naatKhuan.image && (
// //                   <Image
// //                     source={{ uri: naatKhuan.image }}
// //                     style={{ width: 100, height: 100, marginTop: 10,marginBottom:10, }}
// //                   />
// //                 )}
// //               </View>
// //             ))}

// //             {/* Button to add a new Naat Khuwan */}
// //             <Button onPress={addNaatKhuan} mode="contained" style={styles.button}>
// //               Add Another Naat Khuwan
// //             </Button>

// //             {/* Khatib Section */}
// //             <TextInput 
// //               label="Khatib Name" 
// //               value={khatib} // Ensure this links to the state variable
// //               onChangeText={(text) => setKhatib(text)} // Update the state on change
// //               style={styles.input} 
// //             />           
// //             <Button onPress={selectKhatibImage} mode="contained" style={styles.button}>
// //               Select Khatib Image
// //             </Button>
// //             {khatibImage && (
// //               <Image
// //                 source={{ uri: khatibImage }}
// //                 style={{ width: 100, height: 100, marginTop: 10,marginBottom:10, }}
// //               />
// //             )}


// //              {/* Dropdown for Event Type */}
// //               <Text style={{ fontSize: 18, marginTop: 10 }}>Select Event Type:</Text>
// //                 <Picker
// //                   selectedValue={eventType}
// //                   onValueChange={(itemValue) => setEventType(itemValue)} // Set the selected value
// //                   style={styles.eventTypeText}
// //                 >
// //                   <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
// //                   <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
// //                   <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
// //                   <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
// //                 </Picker>

// //                 { /* Add Organization Mehfil Input */ }
// //             <TextInput 
// //                 label="Mehfil Organizar" 
// //                 value={organization} // Ensure this links to the state variable
// //                 onChangeText={(text) => setOrganization(text)} // Update the state on change
// //                 style={styles.input} 
// //             />

// //         <TextInput label="Address" value={address} onChangeText={(text) => setAddress(text)} style={styles.input} />
        
// //         <View style={styles.checkboxContainer}>
        
// //             <BouncyCheckbox
// //               isChecked={isLangerChecked}
// //               text="Include Langer Information"
// //               onPress={(isChecked) => setIsLangerChecked(isChecked)}
// //               fillColor="green"
// //             />
// //         </View>

// //         <Button mode="contained" onPress={handleSubmit} style={styles.button} disabled={loading}>
// //           {loading ? <ActivityIndicator animating={true} color="#ffffff" /> : 'Generate Poster PDF'}
// //         </Button>

// //         {/* {loading && <ActivityIndicator size="large" color="#0000ff" />} */}

// //         {showPoster && (
// //           <View style={styles.posterContainer}>
// //             <Text style={styles.posterHeader}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
// //             <Text style={styles.posterHeader}>Mehfil-E-Milad Poster</Text>
// //             <Text style={styles.posterHeader}>{eventType}</Text>
// //             <Text style={styles.posterText}>Day: {day}</Text>
// //             <Text style={styles.posterText}>Date: {date}</Text>
// //             <Text style={styles.posterText}>Time: {time}</Text>

// //             {/* Naat Khuwan Section with Image */}
// //               <View style={styles.naatKhuanContainer}>
// //                 {naatKhuans.map((naatKhuan, index) => (
// //                   <View key={index} style={styles.personContainer}>
// //                     {naatKhuan.image && (
// //                       <Image source={{ uri: naatKhuan.image }} style={styles.posterImage} />
// //                     )}
// //                     <Text style={styles.naatKhuanName}>نعت خواں: {naatKhuan.name}</Text>
// //                   </View>
// //                 ))}
// //               </View>

// //               <View style={styles.khatibContainer}>
// //                   {khatibImage && (
// //                       <Image source={{ uri: khatibImage }} style={styles.posterImage} />
// //                   )}
// //                   <Text style={styles.khatibName}>خطیب: {khatib}</Text>
// //               </View>

// //               <Text style={styles.posterText}>Address: {address}</Text>

// //               <Text style={styles.posterText}>Mehfil Organizar: {organization}</Text>

// //                  {/* Langer Information based on Event Type */}
// //             {isLangerChecked && eventType === 'محفل بارھویں' && (
// //               <Text style={styles.posterText}>لنگرِ میلاد کا اہتمام ہے</Text>
// //             )}
// //             {isLangerChecked && eventType === 'محفل گیارہویں' && (
// //               <Text style={styles.posterText}>لنگرِ غوثیہ کا اہتمام ہے۔</Text>
// //             )}
// //           </View>
// //         )}

// //         {pdfFilePath !== '' && !showOpenButton && (
// //           <Button mode="contained" onPress={handleDownloadPDF} style={styles.button}>
// //             Download PDF
// //           </Button>
// //         )}

// //         {showOpenButton && (
// //           <Button mode="contained" onPress={openPDF} style={styles.button}>
// //             Open PDF
// //           </Button>
// //         )}
// //       </ScrollView>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //         background: {
// //           flex: 1,
// //           resizeMode: 'cover',
// //         },
// //         container: {
// //           padding: 20,
// //         },
// //         header: {
// //           fontSize: 24,
// //           textAlign: 'center',
// //           marginBottom: 20,
// //           color: '#ffffff',
// //           fontWeight: 'bold',
// //         },
// //         input: {
// //           marginBottom: 10,
// //         },
// //         imagePickerButton: {
// //           marginVertical: 10,
// //         },
// //         selectedImage: {
// //           width: 100,
// //           height: 100,
// //           borderRadius: 10,
// //           marginVertical: 10,
// //           marginHorizontal:10,
// //         },
// //         button: {
// //           marginTop: 10,
// //           backgroundColor: '#09796a',
// //           marginBottom:10,
// //         },
// //         checkboxContainer: {
// //           flexDirection: 'row',
// //           alignItems: 'center',
// //           marginVertical: 15,
// //           backgroundColor:'white',
// //           padding:10,
// //         },
// //         checkboxLabel: {
// //           marginLeft: 8,
// //           fontSize: 16,
// //           color:'#000',
// //         },

// //         posterContainer: {
// //           flexGrow: 1,
// //           padding: 20,
// //           backgroundColor: '#f5f5f5',  // Light background for poster
// //           alignItems: 'center',
// //         },
// //         posterHeader: {
// //           fontSize: 26,
// //           color: '#ffd700',  // Golden color for premium look
// //           fontWeight: '700',
// //           textAlign: 'center',
// //           marginVertical: 10,
// //           textShadowColor: '#000', // Adding shadow for depth
// //           textShadowOffset: { width: 1, height: 1 },
// //           textShadowRadius: 1,
// //         },
// //         eventTypeText: {
// //           fontSize: 22,
// //           color: '#006400',  // Dark green for event type
// //           backgroundColor:'#f5f5f5',
// //           textAlign: 'center',
// //           fontWeight: '600',
// //           marginVertical: 10,
// //         },
// //         dateTimeContainer: {
// //           marginVertical: 15,
// //           alignItems: 'center',
// //         },
// //         posterText: {
// //           fontSize: 18,
// //           color: '#333',  // Neutral black for text
// //           textAlign: 'center',
// //           marginVertical: 5,
          
// //         },
// //         naatKhuanContainer: {
// //           marginTop: 20,
// //           alignItems: 'center',
// //         },
// //         personContainer: {
// //           alignItems: 'center',
// //           marginBottom: 20,
// //         },
// //         posterImage: {
// //           width: 100,
// //           height: 100,
// //           borderRadius: 60,  // Circular image
// //           borderWidth: 2,
// //           borderColor: '#ffd700',  // Golden border
// //           marginBottom: 10,
// //           shadowColor: '#000',
// //           shadowOffset: { width: 0, height: 2 },
// //           shadowOpacity: 0.8,
// //           shadowRadius: 2,
// //         },
// //         naatKhuanName: {
// //           fontSize: 18,
// //           color: '#444',  // Darker text for names
// //           textAlign: 'center',
// //           fontWeight: '500',
// //         },
// //         khatibContainer: {
// //           marginTop: 10,
// //           alignItems: 'center',
// //         },
// //         khatibName: {
// //           fontSize: 18,
// //           color: '#444',
// //           textAlign: 'center',
// //           marginTop: 10,
// //           fontWeight: '500',
// //         },
// //         langerText: {
// //           fontSize: 18,
// //           color: '#8B0000',  // Dark red for langer info
// //           textAlign: 'center',
// //           marginTop: 15,
// //           fontWeight: '600',
// //         },
// // });

// // export default MehfilApp;


















// // import React, { useState } from 'react';
// // import { ScrollView, StyleSheet, Alert, ActivityIndicator, PermissionsAndroid, Platform } from 'react-native';
// // import { Button, TextInput } from 'react-native-paper';
// // import RNHTMLtoPDF from 'react-native-html-to-pdf';
// // import RNFS from 'react-native-fs';
// // import FileViewer from 'react-native-file-viewer';
// // import { launchImageLibrary } from 'react-native-image-picker';


// // import DatePickerComponent from './components/DatePickerComponent';
// // import DayComponent from './components/DayComponent';
// // import TimeComponent from './components/TimeComponent';
// // import EventTypePicker from './components/EventTypePicker';
// // import NaatKhuanComponent from './components/NaatKhuanComponent';
// // import KhatibComponent from './components/KhatibComponent';
// // import LangerCheckbox from './components/LangerCheckbox';
// // import PosterPreview from './components/PosterPreview';
// // import AddressComponent from './components/AddressComponent';
// // import OrganizerComponent from './components/OrganizerComponent';
// // import PDFGenerator from './components/PDFGenerator';


// // const MehfilApp = () => {
// //   const [day, setDay] = useState('');
// //   const [date, setDate] = useState('');
// //   const [time, setTime] = useState('');
// //   const [khatib, setKhatib] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [showPoster, setShowPoster] = useState(false);
// //   const [pdfFilePath, setPdfFilePath] = useState('');
// //   const [showOpenButton, setShowOpenButton] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [isLangerChecked, setIsLangerChecked] = useState(false);
// //   const [eventType, setEventType] = useState('محفل بارھویں');
// //   const [organization, setOrganization] = useState('');
// //   const [khatibImage, setKhatibImage] = useState(null);
// //   const [naatKhuans, setNaatKhuans] = useState([{ name: '', image: null }]);

// //   const selectKhatibImage = async () => {
// //     const result = await launchImageLibrary();
// //     if (result && !result.didCancel && result.assets) {
// //       const uri = result.assets[0].uri;
// //       setKhatibImage(uri);
// //     }
// //   };

// //   const selectNaatKhuanImage = async (index) => {
// //     const result = await launchImageLibrary();
// //     if (result && !result.didCancel && result.assets) {
// //       const uri = result.assets[0].uri;
// //       const updatedNaatKhuans = [...naatKhuans];
// //       updatedNaatKhuans[index].image = uri;
// //       setNaatKhuans(updatedNaatKhuans);
// //     }
// //   };

// //   // const handleSubmit = () => {
// //   //   setShowPoster(true);
// //   //   generatePDF();
// //   // };

// //   // const generatePDF = async () => {
// //   //   setLoading(true);
// //   const htmlContent = `
// //     <html>
// //       <head>
// //         <style>
// //           /* VIP Theme with optimized layout for single page */
// //           body {
// //             font-family: 'Georgia', serif;
// //             color: #333;
// //             background-color: #f5f5f5;
// //           }

// //           .poster {
// //             background-color: #fff;
// //             padding: 20px;
// //             margin: 10px auto;
// //             border: 3px solid #daa520; /* VIP gold border */
// //             max-width: 750px;
// //             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //             border-radius: 10px;
// //           }

// //           h1, h2, h3 {
// //             font-family: 'Palatino', serif;
// //             text-align: center;
// //             color: #2c3e50;
// //             font-weight: bold;
// //             margin: 5px 0;
// //           }

// //           .title h1 {
// //             color: #b8860b; /* VIP gold title */
// //             font-size: 32px;
// //             letter-spacing: 1px;
// //             text-transform: uppercase;
// //             border-bottom: 1px solid #b8860b;
// //             padding-bottom: 5px;
// //           }

// //           .highlight {
// //             color: #d4af37; /* VIP gold color */
// //             font-weight: bold;
// //           }

// //           .date-time {
// //             text-align: center;
// //             font-size: 18px;
// //             margin: 5px 0;
// //           }

// //           .divider {
// //             height: 2px;
// //             background-color: #d4af37; /* VIP gold divider */
// //             margin: 15px 0;
// //             border-radius: 5px;
// //           }

// //           .location {
// //             font-size: 18px;
// //             color: #2c3e50;
// //             text-align: center;
// //             margin-bottom: 5px;
// //           }

// //           .naatkhwan-section {
// //             display: flex;
// //             flex-wrap: wrap;
// //             justify-content: center;
// //             margin: 10px 0;
// //           }

// //           .naatkhwan-card {
// //             width: 150px;
// //             margin: 5px;
// //             text-align: center;
// //           }

// //           .naatkhwan-card img {
// //             width: 100px;
// //             height: auto;
// //             border-radius: 50px;
// //             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// //           }

// //           .khatib-section img {
// //             display: block;
// //             margin: 0 auto;
// //             width: 100px;
// //             height: 100px;
// //             border-radius: 50%;
// //             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //           }

// //           .khatib-section {
// //             text-align: center;
// //             margin-bottom: 10px;
// //           }

// //           .langer-content {
// //             font-size: 18px;
// //             color: #27ae60;
// //             text-align: center;
// //             font-weight: bold;
// //             margin-top: 5px;
// //           }

// //         </style>
// //       </head>
// //       <body>
// //         <div class="poster">
// //           <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
// //           <div class="title"><h1>Mehfil-e-Milad</h1></div>
// //           <div class="title"><h1>${eventType}</h1></div>

// //           <!-- Date, Time, and Day -->
// //           <div class="date-time">Day: <span class="highlight">${day}</span></div>
// //           <div class="date-time">Date: <span class="highlight">${date}</span></div>
// //           <div class="date-time">Time: <span class="highlight">${time}</span></div>

// //           <div class="divider"></div>

// //           <!-- Naat Khuwans with Images -->
// //           <div class="naatkhwan-section">
// //             ${naatKhuans
// //               .map(
// //                 (naatkhwan) => `
// //                 <div class="naatkhwan-card">
// //                   <img src="${naatkhwan.image}" alt="${naatkhwan.name}">
// //                   <p class="highlight">${naatkhwan.name}</p>
// //                 </div>
// //               `
// //               )
// //               .join('')}
// //           </div>

// //           <div class="divider"></div>

// //           <!-- Khatib Image and Details -->
// //           <div class="khatib-section">
// //             ${khatibImage ? `<img src="${khatibImage}" alt="Khatib">` : ''}
// //             <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
// //           </div>

// //           <!-- Address -->
// //           <div class="location">Address: <span class="highlight">${address}</span></div>

// //           <!-- Langer Section -->
// //           ${isLangerChecked ? `<div class="langer-content">Langer will be served</div>` : ''}
// //         </div>
// //       </body>
// //     </html>
// //   `;

// //   //   try {
// //   //     const options = {
// //   //       html: htmlContent,
// //   //       fileName: 'Mehfil_E_Milad_Poster',
// //   //       directory: 'Documents',
// //   //     };
// //   //     const file = await RNHTMLtoPDF.convert(options);
// //   //     setPdfFilePath(file.filePath);
// //   //     Alert.alert('Success', 'PDF Created Successfully');
// //   //   } catch (error) {
// //   //     Alert.alert('Error', 'Failed to generate PDF');
// //   //   } finally {
// //   //     setLoading(false);
// //   //   }
// //   // };

// //   // const requestStoragePermission = async () => {
// //   //   try {
// //   //     const granted = await PermissionsAndroid.request(
// //   //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
// //   //       {
// //   //         title: 'Storage Permission',
// //   //         message: 'App needs access to your storage to download the PDF.',
// //   //         buttonNeutral: 'Ask Me Later',
// //   //         buttonNegative: 'Cancel',
// //   //         buttonPositive: 'OK',
// //   //       },
// //   //     );
// //   //     if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
// //   //       Alert.alert('Permission Denied', 'Storage permission is required to download the PDF.');
// //   //       return false;
// //   //     }
// //   //     return true;
// //   //   } catch (err) {
// //   //     console.warn(err);
// //   //     return false;
// //   //   }
// //   // };

// //   // const handleDownloadPDF = async () => {
// //   //   if (Platform.OS === 'android') {
// //   //     const hasPermission = await requestStoragePermission();
// //   //     if (!hasPermission) {
// //   //       return;
// //   //     }
// //   //   }

// //   //   const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;

// //   //   try {
// //   //     await RNFS.copyFile(pdfFilePath, destinationPath);
// //   //     Alert.alert('Download Complete', `PDF has been saved successfully to: ${destinationPath}`);
// //   //     setShowOpenButton(true);
// //   //   } catch (error) {
// //   //     console.log('Error during file download: ', error);
// //   //     Alert.alert('Error', 'Failed to download PDF. Please try again.');
// //   //   }
// //   // };

// //   // const openPDF = async () => {
// //   //   try {
// //   //     const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
// //   //     await FileViewer.open(destinationPath); // Opens the PDF using the destination path
// //   //   } catch (error) {
// //   //     console.log('Error opening file: ', error);
// //   //     Alert.alert('Error', 'Failed to open the PDF file. Please make sure the file exists.');
// //   //   }
// //   // };

// //   return (
// //     <ScrollView style={styles.container}>
// //       <DatePickerComponent date={date} setDate={setDate} />
// //       <DayComponent day={day} setDay={setDay} />
// //       <TimeComponent time={time} setTime={setTime} />
// //       {/* <TextInput
// //         label="Day"
// //         value={day}
// //         onChangeText={setDay}
// //         style={styles.textInput}
// //         theme={{ 
// //           colors: { 
// //             primary: '#FFD700', // Golden color for label
// //             placeholder: '#FFD700', // Golden color for placeholder
// //             text: '#fff', // White text color for better contrast
// //             background: '#333', // Dark background for input
// //           } 
// //         }} 
// //       />
// //       <TextInput
// //         label="Time"
// //         value={time}
// //         onChangeText={setTime}
// //         style={styles.textInput}
// //         theme={{ 
// //           colors: { 
// //             primary: '#FFD700', // Golden color for label
// //             placeholder: '#FFD700', // Golden color for placeholder
// //             text: '#fff', // White text color for better contrast
// //             background: '#333', // Dark background for input
// //           } 
// //         }} 
// //       /> */}
// //       <EventTypePicker eventType={eventType} setEventType={setEventType} />
// //       <NaatKhuanComponent naatKhuans={naatKhuans} setNaatKhuans={setNaatKhuans} selectNaatKhuanImage={selectNaatKhuanImage} />
// //       <KhatibComponent khatib={khatib} setKhatib={setKhatib} selectKhatibImage={selectKhatibImage} khatibImage={khatibImage} />
// //       <AddressComponent address={address} setAddress={setAddress} />
// //       <OrganizerComponent organization={organization} setOrganization={setOrganization} />
// //       {/* <TextInput label="Address" value={address} onChangeText={setAddress} style={{ margin: 10 }} />
// //       <TextInput label="Organizer" value={organization} onChangeText={setOrganization} style={{ margin: 10 }} /> */}
// //       <LangerCheckbox isLangerChecked={isLangerChecked} setIsLangerChecked={setIsLangerChecked} />

// //       {/* <Button mode="contained" onPress={handleSubmit} style={{ marginTop: 10 }} disabled={loading}>
// //         {loading ? <ActivityIndicator animating={true} color="#ffffff" /> : 'Generate Poster PDF'}
// //       </Button> */}

// //       <PosterPreview
// //         showPoster={showPoster}
// //         eventType={eventType}
// //         day={day}
// //         date={date}
// //         time={time}
// //         naatKhuans={naatKhuans}
// //         khatibImage={khatibImage}
// //         khatib={khatib}
// //         address={address}
// //         organization={organization}
// //         isLangerChecked={isLangerChecked}
// //       />

// //     <PDFGenerator htmlContent={htmlContent} />


// //       {/* {pdfFilePath !== '' && !showOpenButton && (
// //         <Button mode="contained" onPress={handleDownloadPDF} style={{ marginTop: 10 ,marginBottom: 10 }}>
// //           Download PDF
// //         </Button>
// //       )}

// //       {showOpenButton && (
// //         <Button mode="contained" onPress={openPDF} style={{ marginTop: 10,marginBottom: 10 }}>
// //           Open PDF
// //         </Button>
// //       )} */}
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     // padding: 20,
// //     backgroundColor: '#f7f7f7', // Soft background color
// //     borderRadius: 15,
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 5,
// //     },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 10,
// //     elevation: 5,
// //     margin: 10,
// //   },
// //   title: {
// //     fontSize: 30,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     color: '#b8860b', // VIP gold color
// //     marginBottom: 20,
// //     textTransform: 'uppercase',
// //     letterSpacing: 2,
// //     textShadowColor: '#d4af37', // Light gold shadow for depth
// //     textShadowOffset: { width: 0, height: 2 },
// //     textShadowRadius: 3,
// //   },
// //   input: {
// //     marginBottom: 15,
// //     borderColor: '#daa520', // VIP gold border
// //     borderWidth: 1,
// //     borderRadius: 10,
// //     backgroundColor: '#ffffff', // White background for inputs
// //     padding: 10,
// //   },
// //   button: {
// //     marginTop: 10,
// //     marginBottom: 10,
// //     backgroundColor: '#b8860b', // VIP gold button
// //     borderRadius: 10,
// //   },
// //   divider: {
// //     height: 3,
// //     backgroundColor: '#d4af37', // VIP gold divider
// //     marginVertical: 20,
// //     borderRadius: 10,
// //   },
// //   naatKhuanCard: {
// //     backgroundColor: '#ffffff',
// //     borderRadius: 10,
// //     margin: 10,
// //     padding: 10,
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 5,
// //     elevation: 3,
// //   },
// //   khatibSection: {
// //     backgroundColor: '#ffffff',
// //     borderRadius: 10,
// //     padding: 10,
// //     marginBottom: 20,
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 5,
// //     elevation: 3,
// //   },
// //   highlight: {
// //     color: '#d4af37', // Highlighted text in VIP gold
// //     fontWeight: 'bold',
// //   },
// //   langerContent: {
// //     fontSize: 18,
// //     color: '#27ae60',
// //     textAlign: 'center',
// //     fontWeight: 'bold',
// //     marginTop: 10,
// //   },

// //   // container: {
// //   //   margin: 15,
// //   //   padding: 20,
// //   //   backgroundColor: '#1a1a1a', // Darker background for contrast
// //   //   borderRadius: 20,
// //   //   borderWidth: 1,
// //   //   borderColor: '#FFD700', // Golden border for elegance
// //   //   shadowColor: '#FFD700',
// //   //   shadowOffset: { width: 0, height: 8 },
// //   //   shadowOpacity: 0.5,
// //   //   shadowRadius: 15,
// //   //   elevation: 10,
    
// //   // },
// //   // textInput: {
// //   //   marginVertical: 10,
// //   //   backgroundColor: '#555', // Darker background for input fields
// //   //   borderWidth: 1,
// //   //   borderColor: '#FFD700', // Golden border for text input
// //   //   borderRadius: 10, // Rounded corners for input
// //   //   height: 55, // Consistent height for input fields
// //   // },
// // });


// // export default MehfilApp;














// // import React, { useState } from 'react';
// // import { ScrollView, StyleSheet, Alert } from 'react-native';
// // import { Button, ActivityIndicator } from 'react-native-paper';
// // import { launchImageLibrary } from 'react-native-image-picker';
// // import DatePickerComponent from './components/DatePickerComponent';
// // import DayComponent from './components/DayComponent';
// // import TimeComponent from './components/TimeComponent';
// // import EventTypePicker from './components/EventTypePicker';
// // import NaatKhuanComponent from './components/NaatKhuanComponent';
// // import KhatibComponent from './components/KhatibComponent';
// // import LangerCheckbox from './components/LangerCheckbox';
// // import PosterPreview from './components/PosterPreview';
// // import AddressComponent from './components/AddressComponent';
// // import OrganizerComponent from './components/OrganizerComponent';
// // import PDFGenerator from './components/PDFGenerator';
// // import NoteComponent from './components/NoteComponent'

// // const MehfilApp = () => {
// //     const [day, setDay] = useState('');
// //     const [date, setDate] = useState('');
// //     const [time, setTime] = useState('');
// //     const [khatib, setKhatib] = useState('');
// //     const [address, setAddress] = useState('');
// //     const [showPoster, setShowPoster] = useState(false);
// //     const [isLangerChecked, setIsLangerChecked] = useState(false);
// //     const [eventType, setEventType] = useState('محفل بارھویں');
// //     const [organization, setOrganization] = useState('');
// //     const [khatibImage, setKhatibImage] = useState(null);
// //     const [naatKhuans, setNaatKhuans] = useState([{ name: '', image: null }]);
// //     const [notes, setNotes] = useState(''); // State for notes


// //     const selectKhatibImage = async () => {
// //         const result = await launchImageLibrary();
// //         if (result && !result.didCancel && result.assets) {
// //             const uri = result.assets[0].uri;
// //             setKhatibImage(uri);
// //         }
// //     };

// //     const selectNaatKhuanImage = async (index) => {
// //         const result = await launchImageLibrary();
// //         if (result && !result.didCancel && result.assets) {
// //             const uri = result.assets[0].uri;
// //             const updatedNaatKhuans = [...naatKhuans];
// //             updatedNaatKhuans[index].image = uri;
// //             setNaatKhuans(updatedNaatKhuans);
// //         }
// //     };

// //     // Generate HTML content for the PDF
// //     const generateHtmlContent = () => {
// //         return `
// //              <html>
// //                 <head>
// //                   <style>
// //                     /* VIP Theme with optimized layout for single page */
// //                     body {
// //                       font-family: 'Georgia', serif;
// //                       color: #333;
// //                       background-color: #f5f5f5;
// //                     }

// //                     .poster {
// //                       background-color: #fff;
// //                       padding: 20px;
// //                       margin: 10px auto;
// //                       border: 3px solid #daa520; /* VIP gold border */
// //                       max-width: 750px;
// //                       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //                       border-radius: 10px;
// //                     }

// //                     h1, h2, h3 {
// //                       font-family: 'Palatino', serif;
// //                       text-align: center;
// //                       color: #2c3e50;
// //                       font-weight: bold;
// //                       margin: 5px 0;
// //                     }

// //                     .title h1 {
// //                       color: #b8860b; /* VIP gold title */
// //                       font-size: 32px;
// //                       letter-spacing: 1px;
// //                       text-transform: uppercase;
// //                       border-bottom: 1px solid #b8860b;
// //                       padding-bottom: 5px;
// //                     }

// //                     .highlight {
// //                       color: #d4af37; /* VIP gold color */
// //                       font-weight: bold;
// //                     }

// //                     .date-time {
// //                       text-align: center;
// //                       font-size: 18px;
// //                       margin: 5px 0;
// //                     }

// //                     .divider {
// //                       height: 2px;
// //                       background-color: #d4af37; /* VIP gold divider */
// //                       margin: 15px 0;
// //                       border-radius: 5px;
// //                     }

// //                     .location {
// //                       font-size: 18px;
// //                       color: #2c3e50;
// //                       text-align: center;
// //                       margin-bottom: 5px;
// //                     }

// //                     .naatkhwan-section {
// //                       display: flex;
// //                       flex-wrap: wrap;
// //                       justify-content: center;
// //                       margin: 10px 0;
// //                     }

// //                     .naatkhwan-card {
// //                       width: 150px;
// //                       margin: 5px;
// //                       text-align: center;
// //                     }

// //                     .naatkhwan-card img {
// //                       width: 100px;
// //                       border-radius: 50px;
// //                       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// //                     }

// //                     .khatib-section img {
// //                       display: block;
// //                       margin: 0 auto;
// //                       width: 100px;
// //                       height: 100px;
// //                       border-radius: 50%;
// //                       box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //                     }

// //                     .khatib-section {
// //                       text-align: center;
// //                       margin-bottom: 10px;
// //                     }

// //                     .langer-content {
// //                       font-size: 18px;
// //                       color: #27ae60;
// //                       text-align: center;
// //                       font-weight: bold;
// //                       margin-top: 5px;
// //                     }

// //                  .notes {
// //                         font-size: 16px;
// //                         color: #2c3e50;
// //                         margin: 10px 0;
// //                         padding: 10px;
// //                         border: 1px dashed #d4af37; /* Dashed border for notes */
// //                       }

// //                       </style>
// //                 </head>
// //                 <body>
//   //                 <div class="poster">
//   //                 <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
//   //                 <div class="title"><h1>Mehfil-e-Milad</h1></div>
//   //                 <div class="title"><h1>${eventType}</h1></div>

//   //                 <!-- Date, Time, and Day -->
//   //                 <div class="date-time">Day: <span class="highlight">${day}</span></div>
//   //                 <div class="date-time">Date: <span class="highlight">${date}</span></div>
//   //                 <div class="date-time">Time: <span class="highlight">${time}</span></div>

//   //                 <div class="divider"></div>

//   //                 <!-- Naat Khuwans with Images -->
//   //                 <div class="naatkhwan-section">
//   //                   ${naatKhuans
//   //                       .map(
//   //                           (naatkhwan) => `
//   //                               <div class="naatkhwan-card">
//   //                                   <img src="${naatkhwan.image}" alt="${naatkhwan.name}">
//   //                                   <p class="highlight">${naatkhwan.name}</p>
//   //                               </div>
//   //                           `
//   //                       )
//   //                       .join('')}
//   //                 </div>

//   //                 <div class="divider"></div>

//   //                 <!-- Khatib Image and Details -->
//   //                 <div class="khatib-section">
//   //                   ${khatibImage ? `<img src="${khatibImage}" alt="Khatib">` : ''}
//   //                   <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
//   //                 </div>

//   //                 <!-- Address -->
//   //                 <div class="location">Address: <span class="highlight">${address}</span></div>

//   //                 <!-- Langer Section -->
//   //                 ${isLangerChecked ? `<div class="langer-content">Langer will be served</div>` : ''}

//   //                 <!-- Notes Section -->
//   //                 <div class="notes">Notes: <span class="highlight">${notes}</span></div>
// //                 </div>
// // //         </body>
// //       </html>
    
// //         `;
// //     };

// //     const htmlContent = generateHtmlContent(); // Call the function to get the HTML content

// //     return (
// //         <ScrollView style={styles.container}>
// //             <DatePickerComponent date={date} setDate={setDate} />
// //             <DayComponent day={day} setDay={setDay} />
// //             <TimeComponent time={time} setTime={setTime} />
// //             <EventTypePicker eventType={eventType} setEventType={setEventType} />
// //             <NaatKhuanComponent 
// //                 naatKhuans={naatKhuans} 
// //                 setNaatKhuans={setNaatKhuans} 
// //                 selectNaatKhuanImage={selectNaatKhuanImage} 
// //             />
// //             <KhatibComponent 
// //                 khatib={khatib} 
// //                 setKhatib={setKhatib} 
// //                 selectKhatibImage={selectKhatibImage} 
// //                 khatibImage={khatibImage} 
// //             />
// //             <AddressComponent address={address} setAddress={setAddress} />
// //             <OrganizerComponent organization={organization} setOrganization={setOrganization} />
// //             <NoteComponent notes={notes} setNotes={setNotes} /> {/* Adding the NoteComponent */}
// //             <LangerCheckbox isLangerChecked={isLangerChecked} setIsLangerChecked={setIsLangerChecked} />

// //             <PosterPreview
// //                 showPoster={showPoster}
// //                 eventType={eventType}
// //                 day={day}
// //                 date={date}
// //                 time={time}
// //                 naatKhuans={naatKhuans}
// //                 khatibImage={khatibImage}
// //                 khatib={khatib}
// //                 address={address}
// //                 organization={organization}
// //                 // note={notes}
// //                 isLangerChecked={isLangerChecked}
// //             />

// //             <Button mode="contained" onPress={() => setShowPoster(!showPoster)}>
// //                 {showPoster ? 'Hide Poster' : 'Show Poster'}
// //             </Button>

// //             <PDFGenerator htmlContent={htmlContent} />
// //         </ScrollView>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: '#f7f7f7',
// //         borderRadius: 15,
// //         shadowColor: '#000',
// //         shadowOffset: { width: 0, height: 5 },
// //         shadowOpacity: 0.3,
// //         shadowRadius: 10,
// //         elevation: 5,
// //         margin: 10,
// //     },
// // });

// // export default MehfilApp;











// import React, { useState } from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import { Button } from 'react-native-paper';
// import { launchImageLibrary } from 'react-native-image-picker';


// import DatePickerComponent from './components/DatePickerComponent';
// import DayComponent from './components/DayComponent';
// import TimeComponent from './components/TimeComponent';
// import EventTypePicker from './components/EventTypePicker';
// import NaatKhuanComponent from './components/NaatKhuanComponent';
// import KhatibComponent from './components/KhatibComponent';
// import LangerCheckbox from './components/LangerCheckbox';
// import PosterPreview from './components/PosterPreview';
// import AddressComponent from './components/AddressComponent';
// import OrganizerComponent from './components/OrganizerComponent';
// import PDFGenerator from './components/PDFGenerator';
// import NoteComponent from './components/NoteComponent';

// const MehfilApp = () => {
//     const [day, setDay] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [khatib, setKhatib] = useState('');
//     const [address, setAddress] = useState('');
//     const [showPoster, setShowPoster] = useState(false);
//     const [isLangerChecked, setIsLangerChecked] = useState(false);
//     const [eventType, setEventType] = useState('محفل بارھویں');
//     const [organization, setOrganization] = useState('');
//     const [khatibImage, setKhatibImage] = useState(null);
//     const [naatKhuans, setNaatKhuans] = useState([{ name: '', image: null }]);
//     const [notes, setNotes] = useState(''); // State for notes

//     const selectKhatibImage = async () => {
//         const result = await launchImageLibrary();
//         if (result && !result.didCancel && result.assets) {
//             const uri = result.assets[0].uri;
//             setKhatibImage(uri);
//         }
//     };

//     const selectNaatKhuanImage = async (index) => {
//         const result = await launchImageLibrary();
//         if (result && !result.didCancel && result.assets) {
//             const uri = result.assets[0].uri;
//             const updatedNaatKhuans = [...naatKhuans];
//             updatedNaatKhuans[index].image = uri;
//             setNaatKhuans(updatedNaatKhuans);
//         }
//     };

//     // Generate HTML content for the PDF
//     const generateHtmlContent = () => {
//         return `
//             <html>
//                 <head>
//                     <style>
//                         /* VIP Theme with optimized layout for single page */
//                         body {
//                             font-family: 'Georgia', serif;
//                             color: #333;
//                             background-color: #f5f5f5;
//                         }

//                         .poster {
//                             background-color: #fff;
//                             padding: 20px;
//                             margin: 10px auto;
//                             border: 3px solid #daa520; /* VIP gold border */
//                             max-width: 750px;
//                             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//                             border-radius: 10px;
//                         }

//                         h1, h2, h3 {
//                             font-family: 'Palatino', serif;
//                             text-align: center;
//                             color: #2c3e50;
//                             font-weight: bold;
//                             margin: 5px 0;
//                         }

//                         .title h1 {
//                             color: #b8860b; /* VIP gold title */
//                             font-size: 32px;
//                             letter-spacing: 1px;
//                             text-transform: uppercase;
//                             border-bottom: 1px solid #b8860b;
//                             padding-bottom: 5px;
//                         }

//                         .highlight {
//                             color: #d4af37; /* VIP gold color */
//                             font-weight: bold;
//                         }

//                         .date-time {
//                             text-align: center;
//                             font-size: 18px;
//                             margin: 5px 0;
//                         }

//                         .divider {
//                             height: 2px;
//                             background-color: #d4af37; /* VIP gold divider */
//                             margin: 15px 0;
//                             border-radius: 5px;
//                         }

//                         .location {
//                             font-size: 18px;
//                             color: #2c3e50;
//                             text-align: center;
//                             margin-bottom: 5px;
//                         }

//                         .naatkhwan-section {
//                             display: flex;
//                             flex-wrap: wrap;
//                             justify-content: center;
//                             margin: 10px 0;
//                         }

//                         .naatkhwan-card {
//                             width: 150px;
//                             margin: 5px;
//                             text-align: center;
//                         }

//                         .naatkhwan-card img {
//                             width: 100px;
//                             border-radius: 50px;
//                             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//                         }

//                         .khatib-section img {
//                             display: block;
//                             margin: 0 auto;
//                             width: 100px;
//                             height: 100px;
//                             border-radius: 50%;
//                             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                         }

//                         .khatib-section {
//                             text-align: center;
//                             margin-bottom: 10px;
//                         }

//                         .langer-content {
//                             font-size: 18px;
//                             color: #27ae60;
//                             text-align: center;
//                             font-weight: bold;
//                             margin-top: 5px;
//                         }

//                         .notes {
//                             font-size: 16px;
//                             color: #2c3e50;
//                             margin: 10px 0;
//                             padding: 10px;
//                             border: 1px dashed #d4af37; /* Dashed border for notes */
//                         }

//                     </style>
//                 </head>
//                 <body>
//                     <div class="poster">
//                         <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
//                         <div class="title"><h1>Mehfil-e-Milad</h1></div>
//                         <div class="title"><h1>${eventType}</h1></div>

//                         <!-- Date, Time, and Day -->
//                         <div class="date-time">Day: <span class="highlight">${day}</span></div>
//                         <div class="date-time">Date: <span class="highlight">${date}</span></div>
//                         <div class="date-time">Time: <span class="highlight">${time}</span></div>

//                         <div class="divider"></div>

//                         <!-- Naat Khuwans with Images -->
//                         <div class="naatkhwan-section">
//                             ${naatKhuans
//                                 .map(
//                                     (naatkhwan) => `
//                                         <div class="naatkhwan-card">
//                                             <img src="${naatkhwan.image}" alt="${naatkhwan.name}">
//                                             <p class="highlight">${naatkhwan.name}</p>
//                                         </div>
//                                     `
//                                 )
//                                 .join('')}
//                         </div>

//                         <div class="divider"></div>

//                         <!-- Khatib Image and Details -->
//                         <div class="khatib-section">
//                             ${khatibImage ? `<img src="${khatibImage}" alt="Khatib">` : ''}
//                             <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
//                         </div>

//                         <!-- Address -->
//                         <div class="location">Address: <span class="highlight">${address}</span></div>

//                         <!-- Langer Section -->
//                         ${isLangerChecked ? `<div class="langer-content">Langer will be served</div>` : ''}

//                         <!-- Notes Section -->
//                         <div class="notes">Notes: <span class="highlight">${notes}</span></div>
//                     </div>
//                 </body>
//             </html>
//         `;
//     };

//     const htmlContent = generateHtmlContent(); // Call the function to get the HTML content

//     return (
//         <ScrollView style={styles.container}>
//             <DatePickerComponent date={date} setDate={setDate} />
//             <DayComponent day={day} setDay={setDay} />
//             <TimeComponent time={time} setTime={setTime} />
//             <EventTypePicker eventType={eventType} setEventType={setEventType} />
//             <NaatKhuanComponent 
//                 naatKhuans={naatKhuans} 
//                 setNaatKhuans={setNaatKhuans} 
//                 selectNaatKhuanImage={selectNaatKhuanImage} 
//             />
//             <KhatibComponent 
//                 khatib={khatib} 
//                 setKhatib={setKhatib} 
//                 selectKhatibImage={selectKhatibImage} 
//                 khatibImage={khatibImage} 
//             />
//             <AddressComponent address={address} setAddress={setAddress} />
//             <LangerCheckbox isLangerChecked={isLangerChecked} setIsLangerChecked={setIsLangerChecked} />
//             <OrganizerComponent organization={organization} setOrganization={setOrganization} />
//             <NoteComponent notes={notes} setNotes={setNotes} /> 

//             {/* <Button
//                 mode="contained"
//                 onPress={() => setShowPoster(true)}
//                 style={styles.button}
//             >
//                 Preview Poster
//             </Button> */}
//             {/* <Button
//                 mode="contained"
//                 onPress={() => PDFGenerator(htmlContent)}
//                 style={styles.button}
//             >
//                 Generate PDF
//             </Button> */}

//             {/* Display Poster Preview */}
//             <PosterPreview
//                 showPoster={showPoster}
//                 eventType={eventType}
//                 day={day}
//                 date={date}
//                 time={time}
//                 naatKhuans={naatKhuans}
//                 khatibImage={khatibImage}
//                 khatib={khatib}
//                 address={address}
//                 organization={organization}
//                 // note={notes}
//                 isLangerChecked={isLangerChecked}
//             />

//             <Button mode="contained" onPress={() => setShowPoster(!showPoster)}>
//                 {showPoster ? 'Hide Poster' : 'Show Poster'}
//             </Button>

//             <PDFGenerator htmlContent={htmlContent} />
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: '#f5f5f5',
//     },
//     button: {
//         marginVertical: 8,
//     },
// });

// export default MehfilApp;








// import React, { useState, useRef } from 'react';
// import { ScrollView, StyleSheet, View, Alert,ImageBackground,Text } from 'react-native';
// import { Button } from 'react-native-paper';
// import { launchImageLibrary } from 'react-native-image-picker';
// import ViewShot from 'react-native-view-shot'; // Import ViewShot
// import RNFS from 'react-native-fs';
// import FileViewer from 'react-native-file-viewer'; // Import FileViewer

// import DatePickerComponent from './components/DatePickerComponent';
// import DayComponent from './components/DayComponent';
// import TimeComponent from './components/TimeComponent';
// import EventTypePicker from './components/EventTypePicker';
// import NaatKhuanComponent from './components/NaatKhuanComponent';
// import KhatibComponent from './components/KhatibComponent';
// import LangerCheckbox from './components/LangerCheckbox';
// import PosterPreview from './components/PosterPreview';
// import AddressComponent from './components/AddressComponent';
// import OrganizerComponent from './components/OrganizerComponent';
// import PDFGenerator from './components/PDFGenerator';
// import NoteComponent from './components/NoteComponent';

// const MehfilApp = () => {
//     const [day, setDay] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [khatib, setKhatib] = useState('');
//     const [address, setAddress] = useState('');
//     const [showPoster, setShowPoster] = useState(false);
//     const [isLangerChecked, setIsLangerChecked] = useState(false);
//     const [eventType, setEventType] = useState('محفل بارھویں');
//     const [organization, setOrganization] = useState('');
//     const [khatibImage, setKhatibImage] = useState(null);
//     const [naatKhuans, setNaatKhuans] = useState([{ name: '', image: null }]);
//     const [notes, setNotes] = useState(''); // State for notes
//     const [childrenName, setChildrenName] = useState('');
//     const [childrenImage, setChildrenImage] = useState('');
//     const [dulhaName, setDulhaName] = useState('');
//     const [dulhaImage, setDulhaImage] = useState('');

//     const viewShotRef = useRef(); // Reference to ViewShot

//     const selectKhatibImage = async () => {
//         const result = await launchImageLibrary();
//         if (result && !result.didCancel && result.assets) {
//             const uri = result.assets[0].uri;
//             setKhatibImage(uri);
//         }
//     };

//     const selectNaatKhuanImage = async (index) => {
//         const result = await launchImageLibrary();
//         if (result && !result.didCancel && result.assets) {
//             const uri = result.assets[0].uri;
//             const updatedNaatKhuans = [...naatKhuans];
//             updatedNaatKhuans[index].image = uri;
//             setNaatKhuans(updatedNaatKhuans);
//         }
//     };

//     // Generate HTML content for the PDF
//     const generateHtmlContent = () => {
//         return `
//             <html>
//                 <head>
//                     <style>
//                         body {
//                             font-family: 'Georgia', serif;
//                             color: #333;
//                             background-color: #f5f5f5;
//                         }
//                         .poster {
//                             background-color: #fff;
//                             padding: 20px;
//                             margin: 10px auto;
//                             border: 3px solid #daa520;
//                             max-width: 750px;
//                             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//                             border-radius: 10px;
//                         }
//                         h1, h2, h3 {
//                             font-family: 'Palatino', serif;
//                             text-align: center;
//                             color: #2c3e50;
//                             font-weight: bold;
//                             margin: 5px 0;
//                         }
//                         .title h1 {
//                             color: #b8860b;
//                             font-size: 32px;
//                             letter-spacing: 1px;
//                             text-transform: uppercase;
//                             border-bottom: 1px solid #b8860b;
//                             padding-bottom: 5px;
//                         }
//                         .highlight {
//                             color: #d4af37;
//                             font-weight: bold;
//                         }
//                         .date-time {
//                             text-align: center;
//                             font-size: 18px;
//                             margin: 5px 0;
//                         }
//                         .divider {
//                             height: 2px;
//                             background-color: #d4af37;
//                             margin: 15px 0;
//                             border-radius: 5px;
//                         }
//                         .location {
//                             font-size: 18px;
//                             color: #2c3e50;
//                             text-align: center;
//                             margin-bottom: 5px;
//                         }
//                         .naatkhwan-section {
//                             display: flex;
//                             flex-wrap: wrap;
//                             justify-content: center;
//                             margin: 10px 0;
//                         }
//                         .naatkhwan-card {
//                             width: 150px;
//                             margin: 5px;
//                             text-align: center;
//                         }
//                         .naatkhwan-card img {
//                             width: 100px;
//                             border-radius: 50px;
//                             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//                         }
//                         .khatib-section img {
//                             display: block;
//                             margin: 0 auto;
//                             width: 100px;
//                             height: 100px;
//                             border-radius: 50%;
//                             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                         }
//                         .khatib-section {
//                             text-align: center;
//                             margin-bottom: 10px;
//                         }
//                         .langer-content {
//                             font-size: 18px;
//                             color: #27ae60;
//                             text-align: center;
//                             font-weight: bold;
//                             margin-top: 5px;
//                         }
//                         .notes {
//                             font-size: 16px;
//                             color: #2c3e50;
//                             margin: 10px 0;
//                             padding: 10px;
//                             border: 1px dashed #d4af37;
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <div class="poster">
//                         <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
//                         <div class="title"><h1>Mehfil-e-Milad</h1></div>
//                         <div class="title"><h1>${eventType}</h1></div>
//                         <div class="date-time">Day: <span class="highlight">${day}</span></div>
//                         <div class="date-time">Date: <span class="highlight">${date}</span></div>
//                         <div class="date-time">Time: <span class="highlight">${time}</span></div>
//                         <div class="divider"></div>
//                         <div class="naatkhwan-section">
//                             ${naatKhuans
//                                 .map(naatkhwan => 
//                                     `<div class="naatkhwan-card">
//                                         <img src="${naatkhwan.image}" alt="${naatkhwan.name}">
//                                         <p class="highlight">${naatkhwan.name}</p>
//                                     </div>`
//                                 )
//                                 .join('')}
//                         </div>
//                         <div class="divider"></div>
//                         <div class="khatib-section">
//                             ${khatibImage ? `<img src="${khatibImage}" alt="Khatib">` : ''}
//                             <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
//                         </div>
//                         <div class="location">Address: <span class="highlight">${address}</span></div>
//                         ${isLangerChecked ? `<div class="langer-content">Langer will be served</div>` : ''}
//                         <div class="notes">Notes: <span class="highlight">${notes}</span></div>
//                     </div>
//                 </body>
//             </html>
//         `;
//     };

//     const htmlContent = generateHtmlContent(); // Call the function to get the HTML content

//     const savePosterAsImage = async () => {
//         try {
//             const uri = await viewShotRef.current.capture();
            
//             // Define the path where the image will be saved
//             const imagePath = `${RNFS.DocumentDirectoryPath}/poster.png`; // Save as 'poster.png' in Document Directory

//             // Move the captured image to the desired location
//             await RNFS.moveFile(uri, imagePath);

//             Alert.alert(
//                 'Image saved!',
//                 `Your poster has been saved to: ${imagePath}`,
//                 [
//                     {
//                         text: 'Open Image',
//                         onPress: () => {
//                             // Open the saved image
//                             FileViewer.open(imagePath)
//                                 .then(() => {
//                                     // Success opening file
//                                 })
//                                 .catch(error => {
//                                     // Error opening file
//                                     console.error('Error opening image:', error);
//                                     Alert.alert('Error', 'Could not open the image. Please check the file and try again.');
//                                 });
//                         }
//                     },
//                     { text: 'OK', style: 'cancel' }
//                 ]
//             );
//         } catch (error) {
//             Alert.alert('Error', 'Failed to save the image. Please try again.');
//             console.error('Error saving image:', error);
//         }
//     };

//     return (

//     <ImageBackground
//         source={{ uri:'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
//         style={styles.background}
//     >
           
//         <ScrollView style={styles.container}>
//         <View style={styles.posterContainer}>
//             <Text style={styles.posterHeader}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
//             <Text style={styles.posterHeader}>Mehfil-E-Milad Poster</Text>
//         </View>
//             <DatePickerComponent date={date} setDate={setDate} />
//             <DayComponent day={day} setDay={setDay} />
//             <TimeComponent time={time} setTime={setTime} />
//             {/* <EventTypePicker eventType={eventType} setEventType={setEventType} /> */}
//             <EventTypePicker
//                 eventType={eventType}
//                 setEventType={setEventType}
//                 setChildrenName={setChildrenName}
//                 setDulhaName={setDulhaName}
//                 setChildrenImage={setChildrenImage}
//                 setDulhaImage={setDulhaImage}
//             />
//             <NaatKhuanComponent 
//                 naatKhuans={naatKhuans} 
//                 setNaatKhuans={setNaatKhuans} 
//                 selectNaatKhuanImage={selectNaatKhuanImage} 
//             />
//             <KhatibComponent 
//                 khatib={khatib} 
//                 setKhatib={setKhatib} 
//                 selectKhatibImage={selectKhatibImage} 
//                 khatibImage={khatibImage} 
//             />
//             <AddressComponent address={address} setAddress={setAddress} />
//             <LangerCheckbox isLangerChecked={isLangerChecked} setIsLangerChecked={setIsLangerChecked} />
//             <OrganizerComponent organization={organization} setOrganization={setOrganization} />
//             <NoteComponent notes={notes} setNotes={setNotes} />

//             <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 0.9 }}>
//             <PosterPreview
//                 showPoster={showPoster}
//                 eventType={eventType}
//                 day={day}
//                 date={date}
//                 time={time}
//                 naatKhuans={naatKhuans}
//                 khatib={khatib}
//                 address={address}
//                 isLangerChecked={isLangerChecked}
//                 khatibImage={khatibImage}
//                 organization={organization}
//                 notes={notes}
//                 childrenName={childrenName}
//                 childrenImage={childrenImage}
//                 dulhaName={dulhaName}
//                 dulhaImage={dulhaImage}     
//             />

//             </ViewShot>
//             <Button mode="contained" onPress={savePosterAsImage} style={styles.downloadButton}>
//                 Download Image
//             </Button>

//             <Button mode="contained" onPress={() => setShowPoster(!showPoster)}>
//                 {showPoster ? 'Hide Poster' : 'Show Poster'}
//             </Button>

//             <PDFGenerator htmlContent={htmlContent} />


//             {/* Other components like DatePickerComponent, DayComponent, etc. */}
//         </ScrollView>
//     </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         resizeMode: 'cover',
//     },
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: '#f5f5f5',
//     },
//     posterContainer: {
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     posterHeader: {
//         fontSize: 28,
//         textAlign: 'center',
//         marginBottom: 6,
//         color: '#5B3F8D', // Deep Plum
//         fontFamily: 'Arial',
//         // fontWeight: '600',
//         fontWeight: 'bold',

//     },
//     downloadButton: {
//         marginTop: 20,
//         backgroundColor: '#2196F3', // Customize your button color
//         marginBottom:20
//     },
// });

// export default MehfilApp;








import React, { useState, useRef } from 'react';
import { ScrollView, StyleSheet, View, Alert, ImageBackground, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';


import DatePickerComponent from './components/DatePickerComponent';
import DayComponent from './components/DayComponent';
import TimeComponent from './components/TimeComponent';
import EventTypePicker from './components/EventTypePicker';
import NaatKhuanComponent from './components/NaatKhuanComponent';
import KhatibComponent from './components/KhatibComponent';
import LangerCheckbox from './components/LangerCheckbox';
import PosterPreview from './components/PosterPreview';
import AddressComponent from './components/AddressComponent';
import OrganizerComponent from './components/OrganizerComponent';
import PDFGenerator from './components/PDFGenerator';
import NoteComponent from './components/NoteComponent';

const MehfilApp = () => {
    const [day, setDay] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [khatib, setKhatib] = useState('');
    const [address, setAddress] = useState('');
    const [showPoster, setShowPoster] = useState(false);
    const [isLangerChecked, setIsLangerChecked] = useState(false);
    const [eventType, setEventType] = useState('محفل بارھویں');
    const [organization, setOrganization] = useState('');
    const [khatibImage, setKhatibImage] = useState(null);
    const [naatKhuans, setNaatKhuans] = useState([{ name: '', image: null }]);
    const [notes, setNotes] = useState('');
    const [childrenName, setChildrenName] = useState('');
    const [childrenImage, setChildrenImage] = useState('');
    const [dulhaName, setDulhaName] = useState('');
    const [dulhaImage, setDulhaImage] = useState('');

    const viewShotRef = useRef();

    const selectImage = async (setter) => {
        const result = await launchImageLibrary();
        if (result?.assets && result.assets.length > 0) {
            setter(result.assets[0].uri);
        } else {
            Alert.alert('Image Selection Cancelled');
        }
    };

    const selectKhatibImage = () => selectImage(setKhatibImage);

    const selectNaatKhuanImage = async (index) => {
        const result = await launchImageLibrary();
        if (result?.assets && result.assets.length > 0) {
            const updatedNaatKhuans = [...naatKhuans];
            updatedNaatKhuans[index].image = result.assets[0].uri;
            setNaatKhuans(updatedNaatKhuans);
        } else {
            Alert.alert('Image Selection Cancelled');
        }
    };

    const generateHtmlContent = () => {
        return `
            <html>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
                <style>
                    body {
                        font-family: 'Roboto', sans-serif;
                        background-color: #F0F2F5; /* Soft light background */
                        margin: 0;
                        padding: 20px;
                        height: 100vh; /* Increased height for better visibility */
                    }
                    .container {
                        background-color: #FFFFFF;
                        border-radius: 20px; /* Rounded corners for elegance */
                        padding: 50px; /* Increased padding for a more spacious look */
                        box-shadow: 0 15px 60px rgba(0, 0, 0, 0.1);
                        border: 1px solid #C6C6C6; /* Subtle border */
                        transition: transform 0.2s;
                    }
                    .container:hover {
                        transform: translateY(-5px);
                    }
                    h1 {
                        font-size: 36px; /* Increased font size */
                        text-align: center;
                        margin-bottom: 15px;
                        color: #4A148C; /* Deep purple */
                        font-weight: 700;
                    }
                    h2 {
                        font-size: 32px; /* Increased font size */
                        text-align: center;
                        margin-bottom: 20px;
                        font-weight: bold;
                        color: #4A148C; /* Deep purple */
                    }
                    h3 {
                        font-size: 24px; /* Decreased font size */
                        text-align: center;
                        margin-bottom: 15px;
                        font-weight: 1000;
                        background-color: #6A1B9A; /* Rich purple */
                        color: #FFFFFF;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    .event-details {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 30px;
                    }
                    .event-details div {
                        text-align: center;
                        margin: 0 30px; /* Increased margin for spacing */
                    }
                    .event-details img {
                        width: 140px; /* Increased image size */
                        height: 140px; /* Increased image size */
                        border-radius: 50%;
                        margin-bottom: 5px;
                        border: 3px solid #D32F2F; /* Bold red border */
                    }
                    .info {
                        font-weight: bold;
                        font-size: 20px; /* Increased font size */
                        color: #4A148C; /* Deep purple */
                    }
                    .info span {
                        color: #555555; /* Dark gray for detail text */
                    }
                    hr {
                        border-top: 2px solid #6A1B9A; /* Elegant purple color */
                        margin: 30px 0; /* Increased margin for spacing */
                    }
                    .naat-khuans {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    .naat-khuans div {
                        text-align: center;
                        margin: 15px;
                    }
                    .naat-khuans img {
                        width: 100px; /* Increased image size */
                        height: 100px; /* Increased image size */
                        border-radius: 50%; /* Circular images */
                        margin-bottom: 5px;
                        border: 2px solid #6A1B9A; /* Elegant border */
                    }
                    .khatib {
                        text-align: center;
                        margin-bottom: 30px;
                    }
                    .khatib img {
                        width: 120px; /* Increased image size */
                        height: 120px; /* Increased image size */
                        border-radius: 50%; /* Circular image */
                        border: 3px solid #D32F2F; /* Bold red border */
                    }
                    .address {
                        text-align: center;
                    }
                    .address span {
                        color: #555555; /* Dark gray for detail text */
                    }
                    .notes {
                        border: 2px solid #D32F2F; /* Bold red border */
                        padding: 15px;
                        margin: 15px 0;
                        background-color: #FFEBEE; /* Light red background */
                        border-radius: 8px; /* Softer edges */
                        font-weight: bold;
                        color: #D32F2F; /* Bold red for emphasis */
                    }
                    .vip-banner {
                        background-color: #6A1B9A; /* Rich purple color */
                        color: #FFFFFF; /* White text */
                        padding: 15px;
                        border-radius: 5px;
                        text-align: center;
                        margin-bottom: 30px;
                        font-size: 20px; /* Increased font size for banner */
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1>
                    <h2>Mehfil-e-Milad</h2>
                    <div class="vip-banner">
                        <h3>${eventType}</h3>
                    </div>
                    <div class="event-details">
                        ${eventType === 'رسمِ آمین' ? 
                            `<div>
                                <img src="${childrenImage}" alt="Children">
                                <p class="info">Children: <span>${childrenName}</span></p>
                            </div>` : 
                            `<div>
                                <img src="${dulhaImage}" alt="Dulha">
                                <p class="info">Dulha: <span>${dulhaName}</span></p>
                            </div>` 
                        }
                        <div>
                            <p class="info">Day: <span>${day}</span></p>
                            <p class="info">Date: <span>${date}</span></p>
                            <p class="info">Time: <span>${time}</span></p>
                        </div>
                    </div>
                    <hr>
                    <div class="naat-khuans">
                        <h4 style="width: 100%; text-align: center; color: #4A148C;">Naat Khuans</h4>
                        ${naatKhuans.map(naatkhwan => `
                            <div>
                                <img src="${naatkhwan.image}" alt="${naatkhwan.name}">
                                <p style="font-weight: bold; color: #4A148C;">${naatkhwan.name}</p>
                            </div>
                        `).join('')}
                    </div>
                    <hr>
                    <div class="khatib">
                        ${khatibImage ? `<img src="${khatibImage}" alt="Khatib">` : ''}
                        <p class="info">Khatib: <span>${khatib}</span></p>
                    </div>
                    <div class="address">
                        <p class="info">Address: <span>${address}</span></p>
                        ${isLangerChecked ? `<p style="color: #4A148C; font-weight: bold;">Langer will be served</p>` : ''}
                        <div class="notes">Notes: <span style="color: #D32F2F;">${notes}</span></div>
                    </div>
                </div>
            </body>
            </html>
        `;
    };
    
    

    const savePosterAsImage = async () => {
        try {
            const uri = await viewShotRef.current.capture();
            const imagePath = `${RNFS.DocumentDirectoryPath}/poster.png`;

            await RNFS.moveFile(uri, imagePath);

            Alert.alert('Image saved!', `Your poster has been saved to: ${imagePath}`, [
                {
                    text: 'Open Image',
                    onPress: () => {
                        FileViewer.open(imagePath)
                            .catch(error => {
                                console.error('Error opening image:', error);
                                Alert.alert('Error', 'Could not open the image. Please check the file and try again.');
                            });
                    }
                },
                { text: 'OK', style: 'cancel' }
            ]);
        } catch (error) {
            Alert.alert('Error', 'Failed to save the image. Please try again.');
            console.error('Error saving image:', error);
        }
    };

    return (
        <ImageBackground
            source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }}
            style={styles.background}
        >
            <ScrollView style={styles.container}>
                <View style={styles.posterContainer}>
                    <Text style={styles.posterHeader}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
                    <Text style={styles.posterHeader}>Mehfil-E-Milad Poster</Text>
                </View>
                <DatePickerComponent date={date} setDate={setDate} />
                <DayComponent day={day} setDay={setDay} />
                <TimeComponent time={time} setTime={setTime} />
                <EventTypePicker
                    eventType={eventType}
                    setEventType={setEventType}
                    setChildrenName={setChildrenName}
                    setDulhaName={setDulhaName}
                    setChildrenImage={setChildrenImage}
                    setDulhaImage={setDulhaImage}
                />
                <NaatKhuanComponent naatKhuans={naatKhuans} setNaatKhuans={setNaatKhuans} selectNaatKhuanImage={selectNaatKhuanImage} />
                <KhatibComponent khatib={khatib} setKhatib={setKhatib} selectKhatibImage={selectKhatibImage} khatibImage={khatibImage} />
                <AddressComponent address={address} setAddress={setAddress} />
                <LangerCheckbox isLangerChecked={isLangerChecked} setIsLangerChecked={setIsLangerChecked} />
                <OrganizerComponent organization={organization} setOrganization={setOrganization} />
                <NoteComponent notes={notes} setNotes={setNotes} />

                <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 0.9 }}>
                    <PosterPreview
                        showPoster={showPoster}
                        eventType={eventType}
                        day={day}
                        date={date}
                        time={time}
                        naatKhuans={naatKhuans}
                        khatib={khatib}
                        address={address}
                        isLangerChecked={isLangerChecked}
                        khatibImage={khatibImage}
                        organization={organization}
                        notes={notes}
                        childrenName={childrenName}
                        childrenImage={childrenImage}
                        dulhaName={dulhaName}
                        dulhaImage={dulhaImage}
                    />
                </ViewShot>
                <Button mode="contained" onPress={savePosterAsImage} style={styles.downloadButton}>
                    Download Image
                </Button>

                <Button mode="contained" onPress={() => setShowPoster(!showPoster)}>
                    {showPoster ? 'Hide Poster' : 'Show Poster'}
                </Button>

                <PDFGenerator htmlContent={generateHtmlContent()} />
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        padding: 16,
    },
    posterContainer: {
        marginBottom: 20,
    },
    posterHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    downloadButton: {
        marginVertical: 10,
    },
});

export default MehfilApp;
