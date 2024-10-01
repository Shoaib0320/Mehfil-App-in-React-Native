// // // // // // // /**
// // // // // // //  * Sample React Native App
// // // // // // //  * https://github.com/facebook/react-native
// // // // // // //  *
// // // // // // //  * @format
// // // // // // //  */

// // // // // // // import React from 'react';
// // // // // // // import type {PropsWithChildren} from 'react';
// // // // // // // import {
// // // // // // //   SafeAreaView,
// // // // // // //   ScrollView,
// // // // // // //   StatusBar,
// // // // // // //   StyleSheet,
// // // // // // //   Text,
// // // // // // //   useColorScheme,
// // // // // // //   View,
// // // // // // // } from 'react-native';

// // // // // // // import {
// // // // // // //   Colors,
// // // // // // //   DebugInstructions,
// // // // // // //   Header,
// // // // // // //   LearnMoreLinks,
// // // // // // //   ReloadInstructions,
// // // // // // // } from 'react-native/Libraries/NewAppScreen';

// // // // // // // type SectionProps = PropsWithChildren<{
// // // // // // //   title: string;
// // // // // // // }>;

// // // // // // // function Section({children, title}: SectionProps): React.JSX.Element {
// // // // // // //   const isDarkMode = useColorScheme() === 'dark';
// // // // // // //   return (
// // // // // // //     <View style={styles.sectionContainer}>
// // // // // // //       <Text
// // // // // // //         style={[
// // // // // // //           styles.sectionTitle,
// // // // // // //           {
// // // // // // //             color: isDarkMode ? Colors.white : Colors.black,
// // // // // // //           },
// // // // // // //         ]}>
// // // // // // //         {title}
// // // // // // //       </Text>
// // // // // // //       <Text
// // // // // // //         style={[
// // // // // // //           styles.sectionDescription,
// // // // // // //           {
// // // // // // //             color: isDarkMode ? Colors.light : Colors.dark,
// // // // // // //           },
// // // // // // //         ]}>
// // // // // // //         {children}
// // // // // // //       </Text>
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // }

// // // // // // // function App(): React.JSX.Element {
// // // // // // //   const isDarkMode = useColorScheme() === 'dark';

// // // // // // //   const backgroundStyle = {
// // // // // // //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <SafeAreaView style={backgroundStyle}>
// // // // // // //       <StatusBar
// // // // // // //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
// // // // // // //         backgroundColor={backgroundStyle.backgroundColor}
// // // // // // //       />
// // // // // // //       <ScrollView
// // // // // // //         contentInsetAdjustmentBehavior="automatic"
// // // // // // //         style={backgroundStyle}>
// // // // // // //         <Header />
// // // // // // //         <View
// // // // // // //           style={{
// // // // // // //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// // // // // // //           }}>
// // // // // // //           <Section title="Step One">
// // // // // // //             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
// // // // // // //             screen and then come back to see your edits.
// // // // // // //           </Section>
// // // // // // //           <Section title="See Your Changes">
// // // // // // //             <ReloadInstructions />
// // // // // // //           </Section>
// // // // // // //           <Section title="Debug">
// // // // // // //             <DebugInstructions />
// // // // // // //           </Section>
// // // // // // //           <Section title="Learn More">
// // // // // // //             Read the docs to discover what to do next:
// // // // // // //           </Section>
// // // // // // //           <LearnMoreLinks />
// // // // // // //         </View>
// // // // // // //       </ScrollView>
// // // // // // //     </SafeAreaView>
// // // // // // //   );
// // // // // // // }

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   sectionContainer: {
// // // // // // //     marginTop: 32,
// // // // // // //     paddingHorizontal: 24,
// // // // // // //   },
// // // // // // //   sectionTitle: {
// // // // // // //     fontSize: 24,
// // // // // // //     fontWeight: '600',
// // // // // // //   },
// // // // // // //   sectionDescription: {
// // // // // // //     marginTop: 8,
// // // // // // //     fontSize: 18,
// // // // // // //     fontWeight: '400',
// // // // // // //   },
// // // // // // //   highlight: {
// // // // // // //     fontWeight: '700',
// // // // // // //   },
// // // // // // // });

// // // // // // // export default App;


// // // // // // import React, { useState } from 'react';
// // // // // // import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
// // // // // // import { TextInput, Button } from 'react-native-paper';

// // // // // // const MehfilApp = () => {
// // // // // //   const [day, setDay] = useState('');
// // // // // //   const [date, setDate] = useState('');
// // // // // //   const [time, setTime] = useState('');
// // // // // //   const [naatKhuan, setNaatKhuan] = useState('');
// // // // // //   const [khatib, setKhatib] = useState('');
// // // // // //   const [address, setAddress] = useState('');
// // // // // //   const [showPoster, setShowPoster] = useState(false);

// // // // // //   const handleSubmit = () => {
// // // // // //     setShowPoster(true);
// // // // // //   };

// // // // // //   return (
// // // // // //     <ImageBackground
// // // // // //       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} // Replace with your background image URL
// // // // // //       style={styles.background}
// // // // // //     >
// // // // // //       <ScrollView contentContainerStyle={styles.container}>
// // // // // //         <Text style={styles.header}>Mehfil Information</Text>
// // // // // //         <TextInput label="Day" value={day} onChangeText={setDay} style={styles.input} />
// // // // // //         <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
// // // // // //         <TextInput label="Time" value={time} onChangeText={setTime} style={styles.input} />
// // // // // //         <TextInput label="Naat Khuwan" value={naatKhuan} onChangeText={setNaatKhuan} style={styles.input} />
// // // // // //         <TextInput label="Khatib" value={khatib} onChangeText={setKhatib} style={styles.input} />
// // // // // //         <TextInput label="Address" value={address} onChangeText={setAddress} style={styles.input} />
// // // // // //         <Button mode="contained" onPress={handleSubmit} style={styles.button}>
// // // // // //           Create Poster
// // // // // //         </Button>

// // // // // //         {showPoster && (
// // // // // //           <View style={styles.poster}>
// // // // // //             <Text style={styles.posterTitle}>🌙 Mehfil-e-Milad 🌙</Text>
// // // // // //             <View style={styles.posterSection}>
// // // // // //               <Text style={styles.posterText}>Day: <Text style={styles.highlight}>{day}</Text></Text>
// // // // // //               <Text style={styles.posterText}>Date: <Text style={styles.highlight}>{date}</Text></Text>
// // // // // //               <Text style={styles.posterText}>Time: <Text style={styles.highlight}>{time}</Text></Text>
// // // // // //             </View>
// // // // // //             <View style={styles.posterSection}>
// // // // // //               <Text style={styles.posterText}>Naat Khuwan: <Text style={styles.highlight}>{naatKhuan}</Text></Text>
// // // // // //               <Text style={styles.posterText}>Khatib: <Text style={styles.highlight}>{khatib}</Text></Text>
// // // // // //             </View>
// // // // // //             <Text style={styles.posterText}>Address: <Text style={styles.highlight}>{address}</Text></Text>
// // // // // //             <Text style={styles.footer}>Join Us for an Inspiring Evening!</Text>
// // // // // //           </View>
// // // // // //         )}
// // // // // //       </ScrollView>
// // // // // //     </ImageBackground>
// // // // // //   );
// // // // // // };

// // // // // // const styles = StyleSheet.create({
// // // // // //   background: {
// // // // // //     flex: 1,
// // // // // //     justifyContent: 'center',
// // // // // //   },
// // // // // //   container: {
// // // // // //     flexGrow: 1,
// // // // // //     padding: 20,
// // // // // //     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white background
// // // // // //     borderRadius: 15,
// // // // // //     margin: 10,
// // // // // //   },
// // // // // //   header: {
// // // // // //     fontSize: 30,
// // // // // //     fontWeight: 'bold',
// // // // // //     textAlign: 'center',
// // // // // //     marginBottom: 20,
// // // // // //     color: '#007700',
// // // // // //     textShadowColor: '#FFD700',
// // // // // //     textShadowOffset: { width: 2, height: 2 },
// // // // // //     textShadowRadius: 5,
// // // // // //   },
// // // // // //   input: {
// // // // // //     marginBottom: 15,
// // // // // //     backgroundColor: '#FFF',
// // // // // //     borderRadius: 10,
// // // // // //   },
// // // // // //   button: {
// // // // // //     marginTop: 20,
// // // // // //     backgroundColor: '#007700',
// // // // // //     borderRadius: 10,
// // // // // //   },
// // // // // //   poster: {
// // // // // //     marginTop: 30,
// // // // // //     padding: 20,
// // // // // //     borderRadius: 15,
// // // // // //     backgroundColor: '#228B22',
// // // // // //     borderWidth: 3,
// // // // // //     borderColor: '#FFD700',
// // // // // //     elevation: 5, // Shadow effect
// // // // // //   },
// // // // // //   posterTitle: {
// // // // // //     fontSize: 32,
// // // // // //     fontWeight: 'bold',
// // // // // //     textAlign: 'center',
// // // // // //     marginBottom: 20,
// // // // // //     color: '#FFD700',
// // // // // //     textDecorationLine: 'underline',
// // // // // //     textShadowColor: '#555',
// // // // // //     textShadowOffset: { width: 3, height: 3 },
// // // // // //     textShadowRadius: 6,
// // // // // //   },
// // // // // //   posterSection: {
// // // // // //     marginBottom: 15,
// // // // // //     borderBottomColor: '#FFD700',
// // // // // //     borderBottomWidth: 2,
// // // // // //     paddingBottom: 10,
// // // // // //   },
// // // // // //   posterText: {
// // // // // //     fontSize: 22,
// // // // // //     textAlign: 'center',
// // // // // //     color: '#FFF',
// // // // // //     marginVertical: 5,
// // // // // //   },
// // // // // //   highlight: {
// // // // // //     color: '#FFD700',
// // // // // //     fontWeight: 'bold',
// // // // // //     fontSize: 24,
// // // // // //   },
// // // // // //   footer: {
// // // // // //     marginTop: 30,
// // // // // //     fontSize: 20,
// // // // // //     textAlign: 'center',
// // // // // //     color: '#FFD700',
// // // // // //     fontStyle: 'italic',
// // // // // //   },
// // // // // // });

// // // // // // export default MehfilApp;






// // // // // import React, { useState } from 'react';
// // // // // import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert } from 'react-native';
// // // // // import { TextInput, Button } from 'react-native-paper';
// // // // // import RNHTMLtoPDF from 'react-native-html-to-pdf';
// // // // // import RNFS from 'react-native-fs'; // For file system operations

// // // // // const MehfilApp = () => {
// // // // //   const [day, setDay] = useState('');
// // // // //   const [date, setDate] = useState('');
// // // // //   const [time, setTime] = useState('');
// // // // //   const [naatKhuan, setNaatKhuan] = useState('');
// // // // //   const [khatib, setKhatib] = useState('');
// // // // //   const [address, setAddress] = useState('');
// // // // //   const [showPoster, setShowPoster] = useState(false);

// // // // //   const generatePDF = async () => {
// // // // //     let htmlContent = `
// // // // //       <html>
// // // // //         <head>
// // // // //           <style>
// // // // //             body { font-family: Arial, sans-serif; text-align: center; background-color: #228B22; color: white; }
// // // // //             .poster-title { font-size: 32px; font-weight: bold; text-decoration: underline; margin-bottom: 20px; color: #FFD700; }
// // // // //             .poster-section { margin-bottom: 15px; border-bottom: 2px solid #FFD700; padding-bottom: 10px; }
// // // // //             .poster-text { font-size: 22px; margin: 5px 0; }
// // // // //             .highlight { color: #FFD700; font-weight: bold; font-size: 24px; }
// // // // //             .footer { margin-top: 30px; font-size: 20px; font-style: italic; }
// // // // //           </style>
// // // // //         </head>
// // // // //         <body>
// // // // //         <div class="poster-title">اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</div>
// // // // //           <div class="poster-title">🌙 Mehfil-e-Milad 🌙</div>
// // // // //           <div class="poster-section">
// // // // //             <div class="poster-text">Day: <span class="highlight">${day}</span></div>
// // // // //             <div class="poster-text">Date: <span class="highlight">${date}</span></div>
// // // // //             <div class="poster-text">Time: <span class="highlight">${time}</span></div>
// // // // //           </div>
// // // // //           <div class="poster-section">
// // // // //             <div class="poster-text">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
// // // // //             <div class="poster-text">Khatib: <span class="highlight">${khatib}</span></div>
// // // // //           </div>
// // // // //           <div class="poster-text">Address: <span class="highlight">${address}</span></div>
// // // // //           <div class="footer">Join Us for an Inspiring Evening!</div>
// // // // //         </body>
// // // // //       </html>
// // // // //     `;

// // // // //     try {
// // // // //       const pdf = await RNHTMLtoPDF.convert({
// // // // //         html: htmlContent,
// // // // //         fileName: 'Mehfil-e-Milad-Poster',
// // // // //         directory: 'Documents',
// // // // //       });

// // // // //       Alert.alert('PDF Created', `PDF has been saved to: ${pdf.filePath}`);
// // // // //     } catch (error) {
// // // // //       Alert.alert('Error', 'Failed to create PDF. Please try again.');
// // // // //     }
// // // // //   };

// // // // //   const handleSubmit = () => {
// // // // //     setShowPoster(true);
// // // // //     generatePDF(); // Generate the PDF after showing the poster
// // // // //   };

// // // // //   return (
// // // // //     <ImageBackground
// // // // //       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
// // // // //       style={styles.background}
// // // // //     >
// // // // //       <ScrollView contentContainerStyle={styles.container}>
// // // // //         <Text style={styles.header}>Mehfil Information</Text>
// // // // //         <TextInput label="Day" value={day} onChangeText={setDay} style={styles.input} />
// // // // //         <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
// // // // //         <TextInput label="Time" value={time} onChangeText={setTime} style={styles.input} />
// // // // //         <TextInput label="Naat Khuwan" value={naatKhuan} onChangeText={setNaatKhuan} style={styles.input} />
// // // // //         <TextInput label="Khatib" value={khatib} onChangeText={setKhatib} style={styles.input} />
// // // // //         <TextInput label="Address" value={address} onChangeText={setAddress} style={styles.input} />
// // // // //         <Button mode="contained" onPress={handleSubmit} style={styles.button}>
// // // // //           Create Poster
// // // // //         </Button>

// // // // //         {showPoster && (
// // // // //           <View style={styles.poster}>
// // // // //             <Text style={styles.posterTitle}>🌙 Mehfil-e-Milad 🌙</Text>
// // // // //             <View style={styles.posterSection}>
// // // // //               <Text style={styles.posterText}>Day: <Text style={styles.highlight}>{day}</Text></Text>
// // // // //               <Text style={styles.posterText}>Date: <Text style={styles.highlight}>{date}</Text></Text>
// // // // //               <Text style={styles.posterText}>Time: <Text style={styles.highlight}>{time}</Text></Text>
// // // // //             </View>
// // // // //             <View style={styles.posterSection}>
// // // // //               <Text style={styles.posterText}>Naat Khuwan: <Text style={styles.highlight}>{naatKhuan}</Text></Text>
// // // // //               <Text style={styles.posterText}>Khatib: <Text style={styles.highlight}>{khatib}</Text></Text>
// // // // //             </View>
// // // // //             <Text style={styles.posterText}>Address: <Text style={styles.highlight}>{address}</Text></Text>
// // // // //             <Text style={styles.footer}>Join Us for an Inspiring Evening!</Text>
// // // // //           </View>
// // // // //         )}
// // // // //       </ScrollView>
// // // // //     </ImageBackground>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   background: {
// // // // //     flex: 1,
// // // // //     justifyContent: 'center',
// // // // //   },
// // // // //   container: {
// // // // //     flexGrow: 1,
// // // // //     padding: 20,
// // // // //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// // // // //     borderRadius: 15,
// // // // //     margin: 10,
// // // // //   },
// // // // //   header: {
// // // // //     fontSize: 30,
// // // // //     fontWeight: 'bold',
// // // // //     textAlign: 'center',
// // // // //     marginBottom: 20,
// // // // //     color: '#007700',
// // // // //     textShadowColor: '#FFD700',
// // // // //     textShadowOffset: { width: 2, height: 2 },
// // // // //     textShadowRadius: 5,
// // // // //   },
// // // // //   input: {
// // // // //     marginBottom: 15,
// // // // //     backgroundColor: '#FFF',
// // // // //     borderRadius: 10,
// // // // //   },
// // // // //   button: {
// // // // //     marginTop: 20,
// // // // //     backgroundColor: '#007700',
// // // // //     borderRadius: 10,
// // // // //   },
// // // // //   poster: {
// // // // //     marginTop: 30,
// // // // //     padding: 20,
// // // // //     borderRadius: 15,
// // // // //     backgroundColor: '#228B22',
// // // // //     borderWidth: 3,
// // // // //     borderColor: '#FFD700',
// // // // //     elevation: 5,
// // // // //   },
// // // // //   posterTitle: {
// // // // //     fontSize: 32,
// // // // //     fontWeight: 'bold',
// // // // //     textAlign: 'center',
// // // // //     marginBottom: 20,
// // // // //     color: '#FFD700',
// // // // //     textDecorationLine: 'underline',
// // // // //     textShadowColor: '#555',
// // // // //     textShadowOffset: { width: 3, height: 3 },
// // // // //     textShadowRadius: 6,
// // // // //   },
// // // // //   posterSection: {
// // // // //     marginBottom: 15,
// // // // //     borderBottomColor: '#FFD700',
// // // // //     borderBottomWidth: 2,
// // // // //     paddingBottom: 10,
// // // // //   },
// // // // //   posterText: {
// // // // //     fontSize: 22,
// // // // //     textAlign: 'center',
// // // // //     color: '#FFF',
// // // // //     marginVertical: 5,
// // // // //   },
// // // // //   highlight: {
// // // // //     color: '#FFD700',
// // // // //     fontWeight: 'bold',
// // // // //     fontSize: 24,
// // // // //   },
// // // // //   footer: {
// // // // //     marginTop: 30,
// // // // //     fontSize: 20,
// // // // //     textAlign: 'center',
// // // // //     color: '#FFD700',
// // // // //     fontStyle: 'italic',
// // // // //   },
// // // // // });

// // // // // export default MehfilApp;









// // import React, { useState } from 'react';
// // import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity } from 'react-native';
// // import { TextInput, Button } from 'react-native-paper';
// // import RNHTMLtoPDF from 'react-native-html-to-pdf';
// // import RNFS from 'react-native-fs'; // For file system operations

// // const MehfilApp = () => {
// //   const [day, setDay] = useState('');
// //   const [date, setDate] = useState('');
// //   const [time, setTime] = useState('');
// //   const [naatKhuan, setNaatKhuan] = useState('');
// //   const [khatib, setKhatib] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [showPoster, setShowPoster] = useState(false);
// //   const [pdfFilePath, setPdfFilePath] = useState(''); // State to store the PDF file path

// //   const generatePDF = async () => {
// //     let htmlContent = `
// //       <html>
// //         <head>
// //           <style>
// //             body { font-family: Arial, sans-serif; text-align: center; background-color: #228B22; color: white; }
// //             .poster-title { font-size: 32px; font-weight: bold; text-decoration: underline; margin-bottom: 20px; color: #FFD700; }
// //             .poster-section { margin-bottom: 15px; border-bottom: 2px solid #FFD700; padding-bottom: 10px; }
// //             .poster-text { font-size: 22px; margin: 5px 0; }
// //             .highlight { color: #FFD700; font-weight: bold; font-size: 24px; }
// //             .footer { margin-top: 30px; font-size: 20px; font-style: italic; }
// //           </style>
// //         </head>
// //         <body>
// //         <div class="poster-title">اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</div>
// //           <div class="poster-title">🌙 Mehfil-e-Milad 🌙</div>
// //           <div class="poster-section">
// //             <div class="poster-text">Day: <span class="highlight">${day}</span></div>
// //             <div class="poster-text">Date: <span class="highlight">${date}</span></div>
// //             <div class="poster-text">Time: <span class="highlight">${time}</span></div>
// //           </div>
// //           <div class="poster-section">
// //             <div class="poster-text">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
// //             <div class="poster-text">Khatib: <span class="highlight">${khatib}</span></div>
// //           </div>
// //           <div class="poster-text">Address: <span class="highlight">${address}</span></div>
// //           <div class="footer">Join Us for an Inspiring Evening!</div>
// //         </body>
// //       </html>
// //     `;

// //     try {
// //       const pdf = await RNHTMLtoPDF.convert({
// //         html: htmlContent,
// //         fileName: 'Mehfil-e-Milad-Poster',
// //         directory: 'Documents',
// //       });

// //       setPdfFilePath(pdf.filePath); // Save the PDF file path in the state
// //       Alert.alert('PDF Created', 'PDF has been generated successfully.');
// //     } catch (error) {
// //       Alert.alert('Error', 'Failed to create PDF. Please try again.');
// //     }
// //   };

// //   const handleDownloadPDF = () => {
// //     const destinationPath = `${RNFS.DownloadDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;

// //     RNFS.copyFile(pdfFilePath, destinationPath)
// //       .then(() => {
// //         Alert.alert('Download Complete', 'PDF has been downloaded successfully.');
// //       })
// //       .catch((error) => {
// //         Alert.alert('Error', 'Failed to download PDF. Please try again.');
// //       });
// //   };

// //   const handleSubmit = () => {
// //     setShowPoster(true);
// //     generatePDF(); // Generate the PDF after showing the poster
// //   };

// //   return (
// //     <ImageBackground
// //       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
// //       style={styles.background}
// //     >
// //       <ScrollView contentContainerStyle={styles.container}>
// //         <Text style={styles.header}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
// //         <TextInput label="Day" value={day} onChangeText={setDay} style={styles.input} />
// //         <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
// //         <TextInput label="Time" value={time} onChangeText={setTime} style={styles.input} />
// //         <TextInput label="Naat Khuwan" value={naatKhuan} onChangeText={setNaatKhuan} style={styles.input} />
// //         <TextInput label="Khatib" value={khatib} onChangeText={setKhatib} style={styles.input} />
// //         <TextInput label="Address" value={address} onChangeText={setAddress} style={styles.input} />
// //         <Button mode="contained" onPress={handleSubmit} style={styles.button}>
// //           Create Poster
// //         </Button>

// //         {showPoster && (
// //           <View style={styles.poster}>
// //             <Text style={styles.posterTitle}>🌙 Mehfil-e-Milad 🌙</Text>
// //             <View style={styles.posterSection}>
// //               <Text style={styles.posterText}>Day: <Text style={styles.highlight}>{day}</Text></Text>
// //               <Text style={styles.posterText}>Date: <Text style={styles.highlight}>{date}</Text></Text>
// //               <Text style={styles.posterText}>Time: <Text style={styles.highlight}>{time}</Text></Text>
// //             </View>
// //             <View style={styles.posterSection}>
// //               <Text style={styles.posterText}>Naat Khuwan: <Text style={styles.highlight}>{naatKhuan}</Text></Text>
// //               <Text style={styles.posterText}>Khatib: <Text style={styles.highlight}>{khatib}</Text></Text>
// //             </View>
// //             <Text style={styles.posterText}>Address: <Text style={styles.highlight}>{address}</Text></Text>
// //             <Text style={styles.footer}>Join Us for an Inspiring Evening!</Text>
// //           </View>
// //         )}

// //         {pdfFilePath ? (
// //           <TouchableOpacity onPress={handleDownloadPDF} style={styles.downloadButton}>
// //             <Text style={styles.downloadButtonText}>Download PDF</Text>
// //           </TouchableOpacity>
// //         ) : null}
// //       </ScrollView>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //     justifyContent: 'center',
// //   },
// //   container: {
// //     flexGrow: 1,
// //     padding: 20,
// //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// //     borderRadius: 15,
// //     margin: 10,
// //   },
// //   header: {
// //     fontSize: 30,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginBottom: 20,
// //     color: '#007700',
// //     textShadowColor: '#FFD700',
// //     textShadowOffset: { width: 2, height: 2 },
// //     textShadowRadius: 5,
// //   },
// //   input: {
// //     marginBottom: 15,
// //     backgroundColor: '#FFF',
// //     borderRadius: 10,
// //   },
// //   button: {
// //     marginTop: 20,
// //     backgroundColor: '#007700',
// //     borderRadius: 10,
// //   },
// //   poster: {
// //     marginTop: 30,
// //     padding: 20,
// //     borderRadius: 15,
// //     backgroundColor: '#228B22',
// //     borderWidth: 3,
// //     borderColor: '#FFD700',
// //     elevation: 5,
// //   },
// //   posterTitle: {
// //     fontSize: 32,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginBottom: 20,
// //     color: '#FFD700',
// //     textDecorationLine: 'underline',
// //     textShadowColor: '#555',
// //     textShadowOffset: { width: 3, height: 3 },
// //     textShadowRadius: 6,
// //   },
// //   posterSection: {
// //     marginBottom: 15,
// //     borderBottomColor: '#FFD700',
// //     borderBottomWidth: 2,
// //     paddingBottom: 10,
// //   },
// //   posterText: {
// //     fontSize: 22,
// //     textAlign: 'center',
// //     color: '#FFF',
// //     marginVertical: 5,
// //   },
// //   highlight: {
// //     color: '#FFD700',
// //     fontWeight: 'bold',
// //   },
// //   footer: {
// //     marginTop: 20,
// //     fontSize: 20,
// //     textAlign: 'center',
// //     fontStyle: 'italic',
// //     color: '#FFD700',
// //   },
// //   downloadButton: {
// //     marginTop: 30,
// //     backgroundColor: '#FFD700',
// //     padding: 15,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //   },
// //   downloadButtonText: {
// //     color: '#228B22',
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default MehfilApp;








// // import React, { useState } from 'react';
// // import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid } from 'react-native';
// // import { TextInput, Button } from 'react-native-paper';
// // import RNHTMLtoPDF from 'react-native-html-to-pdf';
// // import RNFS from 'react-native-fs'; // For file system operations

// // const MehfilApp = () => {
// //   const [day, setDay] = useState('');
// //   const [date, setDate] = useState('');
// //   const [time, setTime] = useState('');
// //   const [naatKhuan, setNaatKhuan] = useState('');
// //   const [khatib, setKhatib] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [showPoster, setShowPoster] = useState(false);
// //   const [pdfFilePath, setPdfFilePath] = useState('');

// //   // Function to request storage permissions on Android
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
// //     let htmlContent = `
// //       <html>
// //         <head>
// //           <style>
// //             body { font-family: Arial, sans-serif; text-align: center; background-color: #228B22; color: white; }
// //             .poster-title { font-size: 32px; font-weight: bold; text-decoration: underline; margin-bottom: 20px; color: #FFD700; }
// //             .poster-section { margin-bottom: 15px; border-bottom: 2px solid #FFD700; padding-bottom: 10px; }
// //             .poster-text { font-size: 22px; margin: 5px 0; }
// //             .highlight { color: #FFD700; font-weight: bold; font-size: 24px; }
// //             .footer { margin-top: 30px; font-size: 20px; font-style: italic; }
// //           </style>
// //         </head>
// //         <body>
// //         <div class="poster-title">اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</div>
// //           <div class="poster-title">🌙 Mehfil-e-Milad 🌙</div>
// //           <div class="poster-section">
// //             <div class="poster-text">Day: <span class="highlight">${day}</span></div>
// //             <div class="poster-text">Date: <span class="highlight">${date}</span></div>
// //             <div class="poster-text">Time: <span class="highlight">${time}</span></div>
// //           </div>
// //           <div class="poster-section">
// //             <div class="poster-text">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
// //             <div class="poster-text">Khatib: <span class="highlight">${khatib}</span></div>
// //           </div>
// //           <div class="poster-text">Address: <span class="highlight">${address}</span></div>
// //           <div class="footer">Join Us for an Inspiring Evening!</div>
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
// //     }
// //   };

// //   const handleDownloadPDF = async () => {
// //     if (Platform.OS === 'android') {
// //       const hasPermission = await requestStoragePermission();
// //       if (!hasPermission) {
// //         return;
// //       }
// //     }

// //     const destinationPath = `${RNFS.DownloadDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;

// //     try {
// //       // Ensure directory exists
// //       await RNFS.mkdir(RNFS.DownloadDirectoryPath);
      
// //       // Copy the file
// //       await RNFS.copyFile(pdfFilePath, destinationPath);
      
// //       Alert.alert('Download Complete', 'PDF has been downloaded successfully.');
// //     } catch (error) {
// //       console.log('Error during file download: ', error);
// //       Alert.alert('Error', 'Failed to download PDF. Please try again.');
// //     }
// //   };

// //   const handleSubmit = () => {
// //     setShowPoster(true);
// //     generatePDF(); // Generate the PDF after showing the poster
// //   };

// //   return (
// //     <ImageBackground
// //       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
// //       style={styles.background}
// //     >
// //       <ScrollView contentContainerStyle={styles.container}>
// //         <Text style={styles.header}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
// //         <TextInput label="Day" value={day} onChangeText={setDay} style={styles.input} />
// //         <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
// //         <TextInput label="Time" value={time} onChangeText={setTime} style={styles.input} />
// //         <TextInput label="Naat Khuwan" value={naatKhuan} onChangeText={setNaatKhuan} style={styles.input} />
// //         <TextInput label="Khatib" value={khatib} onChangeText={setKhatib} style={styles.input} />
// //         <TextInput label="Address" value={address} onChangeText={setAddress} style={styles.input} />
// //         <Button mode="contained" onPress={handleSubmit} style={styles.button}>
// //           Create Poster
// //         </Button>

// //         {showPoster && (
// //           <View style={styles.poster}>
// //             <Text style={styles.posterTitle}>🌙 Mehfil-e-Milad 🌙</Text>
// //             <View style={styles.posterSection}>
// //               <Text style={styles.posterText}>Day: <Text style={styles.highlight}>{day}</Text></Text>
// //               <Text style={styles.posterText}>Date: <Text style={styles.highlight}>{date}</Text></Text>
// //               <Text style={styles.posterText}>Time: <Text style={styles.highlight}>{time}</Text></Text>
// //             </View>
// //             <View style={styles.posterSection}>
// //               <Text style={styles.posterText}>Naat Khuwan: <Text style={styles.highlight}>{naatKhuan}</Text></Text>
// //               <Text style={styles.posterText}>Khatib: <Text style={styles.highlight}>{khatib}</Text></Text>
// //             </View>
// //             <Text style={styles.posterText}>Address: <Text style={styles.highlight}>{address}</Text></Text>
// //           </View>
// //         )}

// //         <TouchableOpacity onPress={handleDownloadPDF} style={styles.downloadButton}>
// //           <Text style={styles.downloadButtonText}>Download Poster PDF</Text>
// //         </TouchableOpacity>
// //       </ScrollView>
// //     </ImageBackground>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   background: {
// //     flex: 1,
// //   },
// //   container: {
// //     padding: 20,
// //     justifyContent: 'center',
// //   },
// //   header: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginBottom: 20,
// //     color: '#FFD700',
// //   },
// //   input: {
// //     marginBottom: 10,
// //   },
// //   button: {
// //     marginTop: 20,
// //     backgroundColor: '#FFD700',
// //   },
// //   poster: {
// //     marginTop: 20,
// //     padding: 20,
// //     backgroundColor: '#228B22',
// //     borderRadius: 10,
// //   },
// //   posterTitle: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     color: '#FFD700',
// //   },
// //   posterSection: {
// //     marginBottom: 10,
// //   },
// //   posterText: {
// //     fontSize: 18,
// //     color: 'white',
// //   },
// //   highlight: {
// //     color: '#FFD700',
// //   },
// //   downloadButton: {
// //     marginTop: 20,
// //     padding: 15,
// //     backgroundColor: '#FFD700',
// //     borderRadius: 10,
// //     alignItems: 'center',
// //   },
// //   downloadButtonText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default MehfilApp;

















import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs'; // For file system operations
import FileViewer from 'react-native-file-viewer'; // For opening the downloaded PDF

const MehfilApp = () => {
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [naatKhuan, setNaatKhuan] = useState('');
  const [khatib, setKhatib] = useState('');
  const [address, setAddress] = useState('');
  const [showPoster, setShowPoster] = useState(false);
  const [pdfFilePath, setPdfFilePath] = useState('');
  const [showOpenButton, setShowOpenButton] = useState(false); // For showing the "Open PDF" button

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
    let htmlContent = `
       <html>
    <head>
      <style>
        body {
          background-color: #f0f4f8; /* Light background color */
          font-family: 'Arial', sans-serif; 
        }
        .poster {
          background: linear-gradient(135deg, #6c5ce7, #00b894); /* Gradient background */
          color: #fff; 
          border-radius: 15px; 
          padding: 30px; 
          max-width: 600px; 
          margin: 0 auto; 
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3); 
          text-align: center; 
          position: relative; 
        }
        .title {
          font-size: 3em; 
          margin-bottom: 0.5em; 
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); 
        }
        .subtitle {
          font-size: 2em; 
          margin-bottom: 1em; 
          font-weight: bold; 
        }
        .date-time, .location {
          font-size: 1.5em; 
          margin: 10px 0; 
        }
        .footer { 
          margin-top: 20px; 
          font-size: 1.2em; 
          font-style: italic; 
        }
        .highlight { 
          color: #ffdd59; /* Light yellow */ 
          font-weight: bold; 
        }
        .divider {
          height: 4px; 
          background-color: #ffdd59; /* Light yellow */ 
          width: 60%; 
          margin: 15px auto; 
          border-radius: 5px; 
        }
        @media print {
          body {
            margin: 0; 
            padding: 0; 
          }
          .poster {
            box-shadow: none; 
          }
        }
        @media (max-width: 600px) {
          .poster {
            padding: 20px; 
          }
          .title {
            font-size: 2.5em; 
          }
          .subtitle {
            font-size: 1.8em; 
          }
          .date-time, .location {
            font-size: 1.2em; 
          }
        }
      </style>
    </head>
    <body>
      <div class="poster">
        <div class="title">اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</div>
        <div class="title">🌙 Mehfil-e-Milad 🌙</div>
        <div class="subtitle">Event Details</div>
        <div class="date-time">Day: <span class="highlight">${day}</span></div>
        <div class="date-time">Date: <span class="highlight">${date}</span></div>
        <div class="date-time">Time: <span class="highlight">${time}</span></div>
        <div class="divider"></div>
        <div class="location">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
        <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
        <div class="location">Address: <span class="highlight">${address}</span></div>
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
        <TextInput label="Day" value={day} onChangeText={setDay} style={styles.input} />
        <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
        <TextInput label="Time" value={time} onChangeText={setTime} style={styles.input} />
        <TextInput label="Naat Khuwan" value={naatKhuan} onChangeText={setNaatKhuan} style={styles.input} />
        <TextInput label="Khatib" value={khatib} onChangeText={setKhatib} style={styles.input} />
        <TextInput label="Address" value={address} onChangeText={setAddress} style={styles.input} />
        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Create Poster
        </Button>

        {showPoster && (
          <View style={styles.poster}>
            <Text style={styles.posterTitle}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
            <Text style={styles.posterTitle}>🌙 Mehfil-e-Milad-e-Mustafa 🌙</Text>
            <Text style={styles.posterText}>Day: {day}</Text>
            <Text style={styles.posterText}>Date: {date}</Text>
            <Text style={styles.posterText}>Time: {time}</Text>
            <Text style={styles.posterText}>Naat Khuwan: {naatKhuan}</Text>
            <Text style={styles.posterText}>Khatib: {khatib}</Text>
            <Text style={styles.posterText}>Address: {address}</Text>
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
    padding: 20,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginVertical: 10,
  },
  poster: {
    marginVertical: 20,
    padding: 15,
    borderRadius: 10,
    // backgroundColor: 'rgba(25, 135, 25, 0.9)',
    backgroundColor:'#09796a',
    // backgroundColor: 'linear-gradient(135deg, #6c5ce7, #00b894)', /* Gradient background */
  },
  posterTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  
  posterText: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default MehfilApp;