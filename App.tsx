// // // // // // // // /**
// // // // // // // //  * Sample React Native App
// // // // // // // //  * https://github.com/facebook/react-native
// // // // // // // //  *
// // // // // // // //  * @format
// // // // // // // //  */

// // // // // // // // import React from 'react';
// // // // // // // // import type {PropsWithChildren} from 'react';
// // // // // // // // import {
// // // // // // // //   SafeAreaView,
// // // // // // // //   ScrollView,
// // // // // // // //   StatusBar,
// // // // // // // //   StyleSheet,
// // // // // // // //   Text,
// // // // // // // //   useColorScheme,
// // // // // // // //   View,
// // // // // // // // } from 'react-native';

// // // // // // // // import {
// // // // // // // //   Colors,
// // // // // // // //   DebugInstructions,
// // // // // // // //   Header,
// // // // // // // //   LearnMoreLinks,
// // // // // // // //   ReloadInstructions,
// // // // // // // // } from 'react-native/Libraries/NewAppScreen';

// // // // // // // // type SectionProps = PropsWithChildren<{
// // // // // // // //   title: string;
// // // // // // // // }>;

// // // // // // // // function Section({children, title}: SectionProps): React.JSX.Element {
// // // // // // // //   const isDarkMode = useColorScheme() === 'dark';
// // // // // // // //   return (
// // // // // // // //     <View style={styles.sectionContainer}>
// // // // // // // //       <Text
// // // // // // // //         style={[
// // // // // // // //           styles.sectionTitle,
// // // // // // // //           {
// // // // // // // //             color: isDarkMode ? Colors.white : Colors.black,
// // // // // // // //           },
// // // // // // // //         ]}>
// // // // // // // //         {title}
// // // // // // // //       </Text>
// // // // // // // //       <Text
// // // // // // // //         style={[
// // // // // // // //           styles.sectionDescription,
// // // // // // // //           {
// // // // // // // //             color: isDarkMode ? Colors.light : Colors.dark,
// // // // // // // //           },
// // // // // // // //         ]}>
// // // // // // // //         {children}
// // // // // // // //       </Text>
// // // // // // // //     </View>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // function App(): React.JSX.Element {
// // // // // // // //   const isDarkMode = useColorScheme() === 'dark';

// // // // // // // //   const backgroundStyle = {
// // // // // // // //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <SafeAreaView style={backgroundStyle}>
// // // // // // // //       <StatusBar
// // // // // // // //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
// // // // // // // //         backgroundColor={backgroundStyle.backgroundColor}
// // // // // // // //       />
// // // // // // // //       <ScrollView
// // // // // // // //         contentInsetAdjustmentBehavior="automatic"
// // // // // // // //         style={backgroundStyle}>
// // // // // // // //         <Header />
// // // // // // // //         <View
// // // // // // // //           style={{
// // // // // // // //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// // // // // // // //           }}>
// // // // // // // //           <Section title="Step One">
// // // // // // // //             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
// // // // // // // //             screen and then come back to see your edits.
// // // // // // // //           </Section>
// // // // // // // //           <Section title="See Your Changes">
// // // // // // // //             <ReloadInstructions />
// // // // // // // //           </Section>
// // // // // // // //           <Section title="Debug">
// // // // // // // //             <DebugInstructions />
// // // // // // // //           </Section>
// // // // // // // //           <Section title="Learn More">
// // // // // // // //             Read the docs to discover what to do next:
// // // // // // // //           </Section>
// // // // // // // //           <LearnMoreLinks />
// // // // // // // //         </View>
// // // // // // // //       </ScrollView>
// // // // // // // //     </SafeAreaView>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   sectionContainer: {
// // // // // // // //     marginTop: 32,
// // // // // // // //     paddingHorizontal: 24,
// // // // // // // //   },
// // // // // // // //   sectionTitle: {
// // // // // // // //     fontSize: 24,
// // // // // // // //     fontWeight: '600',
// // // // // // // //   },
// // // // // // // //   sectionDescription: {
// // // // // // // //     marginTop: 8,
// // // // // // // //     fontSize: 18,
// // // // // // // //     fontWeight: '400',
// // // // // // // //   },
// // // // // // // //   highlight: {
// // // // // // // //     fontWeight: '700',
// // // // // // // //   },
// // // // // // // // });

// // // // // // // // export default App;


// // // // // // // import React, { useState } from 'react';
// // // // // // // import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
// // // // // // // import { TextInput, Button } from 'react-native-paper';

// // // // // // // const MehfilApp = () => {
// // // // // // //   const [day, setDay] = useState('');
// // // // // // //   const [date, setDate] = useState('');
// // // // // // //   const [time, setTime] = useState('');
// // // // // // //   const [naatKhuan, setNaatKhuan] = useState('');
// // // // // // //   const [khatib, setKhatib] = useState('');
// // // // // // //   const [address, setAddress] = useState('');
// // // // // // //   const [showPoster, setShowPoster] = useState(false);

// // // // // // //   const handleSubmit = () => {
// // // // // // //     setShowPoster(true);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <ImageBackground
// // // // // // //       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} // Replace with your background image URL
// // // // // // //       style={styles.background}
// // // // // // //     >
// // // // // // //       <ScrollView contentContainerStyle={styles.container}>
// // // // // // //         <Text style={styles.header}>Mehfil Information</Text>
// // // // // // //         <TextInput label="Day" value={day} onChangeText={setDay} style={styles.input} />
// // // // // // //         <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
// // // // // // //         <TextInput label="Time" value={time} onChangeText={setTime} style={styles.input} />
// // // // // // //         <TextInput label="Naat Khuwan" value={naatKhuan} onChangeText={setNaatKhuan} style={styles.input} />
// // // // // // //         <TextInput label="Khatib" value={khatib} onChangeText={setKhatib} style={styles.input} />
// // // // // // //         <TextInput label="Address" value={address} onChangeText={setAddress} style={styles.input} />
// // // // // // //         <Button mode="contained" onPress={handleSubmit} style={styles.button}>
// // // // // // //           Create Poster
// // // // // // //         </Button>

// // // // // // //         {showPoster && (
// // // // // // //           <View style={styles.poster}>
// // // // // // //             <Text style={styles.posterTitle}>🌙 Mehfil-e-Milad 🌙</Text>
// // // // // // //             <View style={styles.posterSection}>
// // // // // // //               <Text style={styles.posterText}>Day: <Text style={styles.highlight}>{day}</Text></Text>
// // // // // // //               <Text style={styles.posterText}>Date: <Text style={styles.highlight}>{date}</Text></Text>
// // // // // // //               <Text style={styles.posterText}>Time: <Text style={styles.highlight}>{time}</Text></Text>
// // // // // // //             </View>
// // // // // // //             <View style={styles.posterSection}>
// // // // // // //               <Text style={styles.posterText}>Naat Khuwan: <Text style={styles.highlight}>{naatKhuan}</Text></Text>
// // // // // // //               <Text style={styles.posterText}>Khatib: <Text style={styles.highlight}>{khatib}</Text></Text>
// // // // // // //             </View>
// // // // // // //             <Text style={styles.posterText}>Address: <Text style={styles.highlight}>{address}</Text></Text>
// // // // // // //             <Text style={styles.footer}>Join Us for an Inspiring Evening!</Text>
// // // // // // //           </View>
// // // // // // //         )}
// // // // // // //       </ScrollView>
// // // // // // //     </ImageBackground>
// // // // // // //   );
// // // // // // // };

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   background: {
// // // // // // //     flex: 1,
// // // // // // //     justifyContent: 'center',
// // // // // // //   },
// // // // // // //   container: {
// // // // // // //     flexGrow: 1,
// // // // // // //     padding: 20,
// // // // // // //     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white background
// // // // // // //     borderRadius: 15,
// // // // // // //     margin: 10,
// // // // // // //   },
// // // // // // //   header: {
// // // // // // //     fontSize: 30,
// // // // // // //     fontWeight: 'bold',
// // // // // // //     textAlign: 'center',
// // // // // // //     marginBottom: 20,
// // // // // // //     color: '#007700',
// // // // // // //     textShadowColor: '#FFD700',
// // // // // // //     textShadowOffset: { width: 2, height: 2 },
// // // // // // //     textShadowRadius: 5,
// // // // // // //   },
// // // // // // //   input: {
// // // // // // //     marginBottom: 15,
// // // // // // //     backgroundColor: '#FFF',
// // // // // // //     borderRadius: 10,
// // // // // // //   },
// // // // // // //   button: {
// // // // // // //     marginTop: 20,
// // // // // // //     backgroundColor: '#007700',
// // // // // // //     borderRadius: 10,
// // // // // // //   },
// // // // // // //   poster: {
// // // // // // //     marginTop: 30,
// // // // // // //     padding: 20,
// // // // // // //     borderRadius: 15,
// // // // // // //     backgroundColor: '#228B22',
// // // // // // //     borderWidth: 3,
// // // // // // //     borderColor: '#FFD700',
// // // // // // //     elevation: 5, // Shadow effect
// // // // // // //   },
// // // // // // //   posterTitle: {
// // // // // // //     fontSize: 32,
// // // // // // //     fontWeight: 'bold',
// // // // // // //     textAlign: 'center',
// // // // // // //     marginBottom: 20,
// // // // // // //     color: '#FFD700',
// // // // // // //     textDecorationLine: 'underline',
// // // // // // //     textShadowColor: '#555',
// // // // // // //     textShadowOffset: { width: 3, height: 3 },
// // // // // // //     textShadowRadius: 6,
// // // // // // //   },
// // // // // // //   posterSection: {
// // // // // // //     marginBottom: 15,
// // // // // // //     borderBottomColor: '#FFD700',
// // // // // // //     borderBottomWidth: 2,
// // // // // // //     paddingBottom: 10,
// // // // // // //   },
// // // // // // //   posterText: {
// // // // // // //     fontSize: 22,
// // // // // // //     textAlign: 'center',
// // // // // // //     color: '#FFF',
// // // // // // //     marginVertical: 5,
// // // // // // //   },
// // // // // // //   highlight: {
// // // // // // //     color: '#FFD700',
// // // // // // //     fontWeight: 'bold',
// // // // // // //     fontSize: 24,
// // // // // // //   },
// // // // // // //   footer: {
// // // // // // //     marginTop: 30,
// // // // // // //     fontSize: 20,
// // // // // // //     textAlign: 'center',
// // // // // // //     color: '#FFD700',
// // // // // // //     fontStyle: 'italic',
// // // // // // //   },
// // // // // // // });

// // // // // // // export default MehfilApp;






// // // // // // import React, { useState } from 'react';
// // // // // // import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert } from 'react-native';
// // // // // // import { TextInput, Button } from 'react-native-paper';
// // // // // // import RNHTMLtoPDF from 'react-native-html-to-pdf';
// // // // // // import RNFS from 'react-native-fs'; // For file system operations

// // // // // // const MehfilApp = () => {
// // // // // //   const [day, setDay] = useState('');
// // // // // //   const [date, setDate] = useState('');
// // // // // //   const [time, setTime] = useState('');
// // // // // //   const [naatKhuan, setNaatKhuan] = useState('');
// // // // // //   const [khatib, setKhatib] = useState('');
// // // // // //   const [address, setAddress] = useState('');
// // // // // //   const [showPoster, setShowPoster] = useState(false);

// // // // // //   const generatePDF = async () => {
// // // // // //     let htmlContent = `
// // // // // //       <html>
// // // // // //         <head>
// // // // // //           <style>
// // // // // //             body { font-family: Arial, sans-serif; text-align: center; background-color: #228B22; color: white; }
// // // // // //             .poster-title { font-size: 32px; font-weight: bold; text-decoration: underline; margin-bottom: 20px; color: #FFD700; }
// // // // // //             .poster-section { margin-bottom: 15px; border-bottom: 2px solid #FFD700; padding-bottom: 10px; }
// // // // // //             .poster-text { font-size: 22px; margin: 5px 0; }
// // // // // //             .highlight { color: #FFD700; font-weight: bold; font-size: 24px; }
// // // // // //             .footer { margin-top: 30px; font-size: 20px; font-style: italic; }
// // // // // //           </style>
// // // // // //         </head>
// // // // // //         <body>
// // // // // //         <div class="poster-title">اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</div>
// // // // // //           <div class="poster-title">🌙 Mehfil-e-Milad 🌙</div>
// // // // // //           <div class="poster-section">
// // // // // //             <div class="poster-text">Day: <span class="highlight">${day}</span></div>
// // // // // //             <div class="poster-text">Date: <span class="highlight">${date}</span></div>
// // // // // //             <div class="poster-text">Time: <span class="highlight">${time}</span></div>
// // // // // //           </div>
// // // // // //           <div class="poster-section">
// // // // // //             <div class="poster-text">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
// // // // // //             <div class="poster-text">Khatib: <span class="highlight">${khatib}</span></div>
// // // // // //           </div>
// // // // // //           <div class="poster-text">Address: <span class="highlight">${address}</span></div>
// // // // // //           <div class="footer">Join Us for an Inspiring Evening!</div>
// // // // // //         </body>
// // // // // //       </html>
// // // // // //     `;

// // // // // //     try {
// // // // // //       const pdf = await RNHTMLtoPDF.convert({
// // // // // //         html: htmlContent,
// // // // // //         fileName: 'Mehfil-e-Milad-Poster',
// // // // // //         directory: 'Documents',
// // // // // //       });

// // // // // //       Alert.alert('PDF Created', `PDF has been saved to: ${pdf.filePath}`);
// // // // // //     } catch (error) {
// // // // // //       Alert.alert('Error', 'Failed to create PDF. Please try again.');
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSubmit = () => {
// // // // // //     setShowPoster(true);
// // // // // //     generatePDF(); // Generate the PDF after showing the poster
// // // // // //   };

// // // // // //   return (
// // // // // //     <ImageBackground
// // // // // //       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
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
// // // // // //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
// // // // // //     elevation: 5,
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









// // // import React, { useState } from 'react';
// // // import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity } from 'react-native';
// // // import { TextInput, Button } from 'react-native-paper';
// // // import RNHTMLtoPDF from 'react-native-html-to-pdf';
// // // import RNFS from 'react-native-fs'; // For file system operations

// // // const MehfilApp = () => {
// // //   const [day, setDay] = useState('');
// // //   const [date, setDate] = useState('');
// // //   const [time, setTime] = useState('');
// // //   const [naatKhuan, setNaatKhuan] = useState('');
// // //   const [khatib, setKhatib] = useState('');
// // //   const [address, setAddress] = useState('');
// // //   const [showPoster, setShowPoster] = useState(false);
// // //   const [pdfFilePath, setPdfFilePath] = useState(''); // State to store the PDF file path

// // //   const generatePDF = async () => {
// // //     let htmlContent = `
// // //       <html>
// // //         <head>
// // //           <style>
// // //             body { font-family: Arial, sans-serif; text-align: center; background-color: #228B22; color: white; }
// // //             .poster-title { font-size: 32px; font-weight: bold; text-decoration: underline; margin-bottom: 20px; color: #FFD700; }
// // //             .poster-section { margin-bottom: 15px; border-bottom: 2px solid #FFD700; padding-bottom: 10px; }
// // //             .poster-text { font-size: 22px; margin: 5px 0; }
// // //             .highlight { color: #FFD700; font-weight: bold; font-size: 24px; }
// // //             .footer { margin-top: 30px; font-size: 20px; font-style: italic; }
// // //           </style>
// // //         </head>
// // //         <body>
// // //         <div class="poster-title">اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</div>
// // //           <div class="poster-title">🌙 Mehfil-e-Milad 🌙</div>
// // //           <div class="poster-section">
// // //             <div class="poster-text">Day: <span class="highlight">${day}</span></div>
// // //             <div class="poster-text">Date: <span class="highlight">${date}</span></div>
// // //             <div class="poster-text">Time: <span class="highlight">${time}</span></div>
// // //           </div>
// // //           <div class="poster-section">
// // //             <div class="poster-text">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
// // //             <div class="poster-text">Khatib: <span class="highlight">${khatib}</span></div>
// // //           </div>
// // //           <div class="poster-text">Address: <span class="highlight">${address}</span></div>
// // //           <div class="footer">Join Us for an Inspiring Evening!</div>
// // //         </body>
// // //       </html>
// // //     `;

// // //     try {
// // //       const pdf = await RNHTMLtoPDF.convert({
// // //         html: htmlContent,
// // //         fileName: 'Mehfil-e-Milad-Poster',
// // //         directory: 'Documents',
// // //       });

// // //       setPdfFilePath(pdf.filePath); // Save the PDF file path in the state
// // //       Alert.alert('PDF Created', 'PDF has been generated successfully.');
// // //     } catch (error) {
// // //       Alert.alert('Error', 'Failed to create PDF. Please try again.');
// // //     }
// // //   };

// // //   const handleDownloadPDF = () => {
// // //     const destinationPath = `${RNFS.DownloadDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;

// // //     RNFS.copyFile(pdfFilePath, destinationPath)
// // //       .then(() => {
// // //         Alert.alert('Download Complete', 'PDF has been downloaded successfully.');
// // //       })
// // //       .catch((error) => {
// // //         Alert.alert('Error', 'Failed to download PDF. Please try again.');
// // //       });
// // //   };

// // //   const handleSubmit = () => {
// // //     setShowPoster(true);
// // //     generatePDF(); // Generate the PDF after showing the poster
// // //   };

// // //   return (
// // //     <ImageBackground
// // //       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
// // //       style={styles.background}
// // //     >
// // //       <ScrollView contentContainerStyle={styles.container}>
// // //         <Text style={styles.header}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
// // //         <TextInput label="Day" value={day} onChangeText={setDay} style={styles.input} />
// // //         <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
// // //         <TextInput label="Time" value={time} onChangeText={setTime} style={styles.input} />
// // //         <TextInput label="Naat Khuwan" value={naatKhuan} onChangeText={setNaatKhuan} style={styles.input} />
// // //         <TextInput label="Khatib" value={khatib} onChangeText={setKhatib} style={styles.input} />
// // //         <TextInput label="Address" value={address} onChangeText={setAddress} style={styles.input} />
// // //         <Button mode="contained" onPress={handleSubmit} style={styles.button}>
// // //           Create Poster
// // //         </Button>

// // //         {showPoster && (
// // //           <View style={styles.poster}>
// // //             <Text style={styles.posterTitle}>🌙 Mehfil-e-Milad 🌙</Text>
// // //             <View style={styles.posterSection}>
// // //               <Text style={styles.posterText}>Day: <Text style={styles.highlight}>{day}</Text></Text>
// // //               <Text style={styles.posterText}>Date: <Text style={styles.highlight}>{date}</Text></Text>
// // //               <Text style={styles.posterText}>Time: <Text style={styles.highlight}>{time}</Text></Text>
// // //             </View>
// // //             <View style={styles.posterSection}>
// // //               <Text style={styles.posterText}>Naat Khuwan: <Text style={styles.highlight}>{naatKhuan}</Text></Text>
// // //               <Text style={styles.posterText}>Khatib: <Text style={styles.highlight}>{khatib}</Text></Text>
// // //             </View>
// // //             <Text style={styles.posterText}>Address: <Text style={styles.highlight}>{address}</Text></Text>
// // //             <Text style={styles.footer}>Join Us for an Inspiring Evening!</Text>
// // //           </View>
// // //         )}

// // //         {pdfFilePath ? (
// // //           <TouchableOpacity onPress={handleDownloadPDF} style={styles.downloadButton}>
// // //             <Text style={styles.downloadButtonText}>Download PDF</Text>
// // //           </TouchableOpacity>
// // //         ) : null}
// // //       </ScrollView>
// // //     </ImageBackground>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   background: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //   },
// // //   container: {
// // //     flexGrow: 1,
// // //     padding: 20,
// // //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
// // //     borderRadius: 15,
// // //     margin: 10,
// // //   },
// // //   header: {
// // //     fontSize: 30,
// // //     fontWeight: 'bold',
// // //     textAlign: 'center',
// // //     marginBottom: 20,
// // //     color: '#007700',
// // //     textShadowColor: '#FFD700',
// // //     textShadowOffset: { width: 2, height: 2 },
// // //     textShadowRadius: 5,
// // //   },
// // //   input: {
// // //     marginBottom: 15,
// // //     backgroundColor: '#FFF',
// // //     borderRadius: 10,
// // //   },
// // //   button: {
// // //     marginTop: 20,
// // //     backgroundColor: '#007700',
// // //     borderRadius: 10,
// // //   },
// // //   poster: {
// // //     marginTop: 30,
// // //     padding: 20,
// // //     borderRadius: 15,
// // //     backgroundColor: '#228B22',
// // //     borderWidth: 3,
// // //     borderColor: '#FFD700',
// // //     elevation: 5,
// // //   },
// // //   posterTitle: {
// // //     fontSize: 32,
// // //     fontWeight: 'bold',
// // //     textAlign: 'center',
// // //     marginBottom: 20,
// // //     color: '#FFD700',
// // //     textDecorationLine: 'underline',
// // //     textShadowColor: '#555',
// // //     textShadowOffset: { width: 3, height: 3 },
// // //     textShadowRadius: 6,
// // //   },
// // //   posterSection: {
// // //     marginBottom: 15,
// // //     borderBottomColor: '#FFD700',
// // //     borderBottomWidth: 2,
// // //     paddingBottom: 10,
// // //   },
// // //   posterText: {
// // //     fontSize: 22,
// // //     textAlign: 'center',
// // //     color: '#FFF',
// // //     marginVertical: 5,
// // //   },
// // //   highlight: {
// // //     color: '#FFD700',
// // //     fontWeight: 'bold',
// // //   },
// // //   footer: {
// // //     marginTop: 20,
// // //     fontSize: 20,
// // //     textAlign: 'center',
// // //     fontStyle: 'italic',
// // //     color: '#FFD700',
// // //   },
// // //   downloadButton: {
// // //     marginTop: 30,
// // //     backgroundColor: '#FFD700',
// // //     padding: 15,
// // //     borderRadius: 10,
// // //     alignItems: 'center',
// // //   },
// // //   downloadButtonText: {
// // //     color: '#228B22',
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //   },
// // // });

// // // export default MehfilApp;








// // // import React, { useState } from 'react';
// // // import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid } from 'react-native';
// // // import { TextInput, Button } from 'react-native-paper';
// // // import RNHTMLtoPDF from 'react-native-html-to-pdf';
// // // import RNFS from 'react-native-fs'; // For file system operations

// // // const MehfilApp = () => {
// // //   const [day, setDay] = useState('');
// // //   const [date, setDate] = useState('');
// // //   const [time, setTime] = useState('');
// // //   const [naatKhuan, setNaatKhuan] = useState('');
// // //   const [khatib, setKhatib] = useState('');
// // //   const [address, setAddress] = useState('');
// // //   const [showPoster, setShowPoster] = useState(false);
// // //   const [pdfFilePath, setPdfFilePath] = useState('');

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

// // //   const generatePDF = async () => {
// // //     let htmlContent = `
// // //       <html>
// // //         <head>
// // //           <style>
// // //             body { font-family: Arial, sans-serif; text-align: center; background-color: #228B22; color: white; }
// // //             .poster-title { font-size: 32px; font-weight: bold; text-decoration: underline; margin-bottom: 20px; color: #FFD700; }
// // //             .poster-section { margin-bottom: 15px; border-bottom: 2px solid #FFD700; padding-bottom: 10px; }
// // //             .poster-text { font-size: 22px; margin: 5px 0; }
// // //             .highlight { color: #FFD700; font-weight: bold; font-size: 24px; }
// // //             .footer { margin-top: 30px; font-size: 20px; font-style: italic; }
// // //           </style>
// // //         </head>
// // //         <body>
// // //         <div class="poster-title">اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</div>
// // //           <div class="poster-title">🌙 Mehfil-e-Milad 🌙</div>
// // //           <div class="poster-section">
// // //             <div class="poster-text">Day: <span class="highlight">${day}</span></div>
// // //             <div class="poster-text">Date: <span class="highlight">${date}</span></div>
// // //             <div class="poster-text">Time: <span class="highlight">${time}</span></div>
// // //           </div>
// // //           <div class="poster-section">
// // //             <div class="poster-text">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
// // //             <div class="poster-text">Khatib: <span class="highlight">${khatib}</span></div>
// // //           </div>
// // //           <div class="poster-text">Address: <span class="highlight">${address}</span></div>
// // //           <div class="footer">Join Us for an Inspiring Evening!</div>
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
// // //     }
// // //   };

// // //   const handleDownloadPDF = async () => {
// // //     if (Platform.OS === 'android') {
// // //       const hasPermission = await requestStoragePermission();
// // //       if (!hasPermission) {
// // //         return;
// // //       }
// // //     }

// // //     const destinationPath = `${RNFS.DownloadDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;

// // //     try {
// // //       // Ensure directory exists
// // //       await RNFS.mkdir(RNFS.DownloadDirectoryPath);
      
// // //       // Copy the file
// // //       await RNFS.copyFile(pdfFilePath, destinationPath);
      
// // //       Alert.alert('Download Complete', 'PDF has been downloaded successfully.');
// // //     } catch (error) {
// // //       console.log('Error during file download: ', error);
// // //       Alert.alert('Error', 'Failed to download PDF. Please try again.');
// // //     }
// // //   };

// // //   const handleSubmit = () => {
// // //     setShowPoster(true);
// // //     generatePDF(); // Generate the PDF after showing the poster
// // //   };

// // //   return (
// // //     <ImageBackground
// // //       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
// // //       style={styles.background}
// // //     >
// // //       <ScrollView contentContainerStyle={styles.container}>
// // //         <Text style={styles.header}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
// // //         <TextInput label="Day" value={day} onChangeText={setDay} style={styles.input} />
// // //         <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
// // //         <TextInput label="Time" value={time} onChangeText={setTime} style={styles.input} />
// // //         <TextInput label="Naat Khuwan" value={naatKhuan} onChangeText={setNaatKhuan} style={styles.input} />
// // //         <TextInput label="Khatib" value={khatib} onChangeText={setKhatib} style={styles.input} />
// // //         <TextInput label="Address" value={address} onChangeText={setAddress} style={styles.input} />
// // //         <Button mode="contained" onPress={handleSubmit} style={styles.button}>
// // //           Create Poster
// // //         </Button>

// // //         {showPoster && (
// // //           <View style={styles.poster}>
// // //             <Text style={styles.posterTitle}>🌙 Mehfil-e-Milad 🌙</Text>
// // //             <View style={styles.posterSection}>
// // //               <Text style={styles.posterText}>Day: <Text style={styles.highlight}>{day}</Text></Text>
// // //               <Text style={styles.posterText}>Date: <Text style={styles.highlight}>{date}</Text></Text>
// // //               <Text style={styles.posterText}>Time: <Text style={styles.highlight}>{time}</Text></Text>
// // //             </View>
// // //             <View style={styles.posterSection}>
// // //               <Text style={styles.posterText}>Naat Khuwan: <Text style={styles.highlight}>{naatKhuan}</Text></Text>
// // //               <Text style={styles.posterText}>Khatib: <Text style={styles.highlight}>{khatib}</Text></Text>
// // //             </View>
// // //             <Text style={styles.posterText}>Address: <Text style={styles.highlight}>{address}</Text></Text>
// // //           </View>
// // //         )}

// // //         <TouchableOpacity onPress={handleDownloadPDF} style={styles.downloadButton}>
// // //           <Text style={styles.downloadButtonText}>Download Poster PDF</Text>
// // //         </TouchableOpacity>
// // //       </ScrollView>
// // //     </ImageBackground>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   background: {
// // //     flex: 1,
// // //   },
// // //   container: {
// // //     padding: 20,
// // //     justifyContent: 'center',
// // //   },
// // //   header: {
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
// // //     textAlign: 'center',
// // //     marginBottom: 20,
// // //     color: '#FFD700',
// // //   },
// // //   input: {
// // //     marginBottom: 10,
// // //   },
// // //   button: {
// // //     marginTop: 20,
// // //     backgroundColor: '#FFD700',
// // //   },
// // //   poster: {
// // //     marginTop: 20,
// // //     padding: 20,
// // //     backgroundColor: '#228B22',
// // //     borderRadius: 10,
// // //   },
// // //   posterTitle: {
// // //     fontSize: 28,
// // //     fontWeight: 'bold',
// // //     textAlign: 'center',
// // //     color: '#FFD700',
// // //   },
// // //   posterSection: {
// // //     marginBottom: 10,
// // //   },
// // //   posterText: {
// // //     fontSize: 18,
// // //     color: 'white',
// // //   },
// // //   highlight: {
// // //     color: '#FFD700',
// // //   },
// // //   downloadButton: {
// // //     marginTop: 20,
// // //     padding: 15,
// // //     backgroundColor: '#FFD700',
// // //     borderRadius: 10,
// // //     alignItems: 'center',
// // //   },
// // //   downloadButtonText: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //   },
// // // });

// // // export default MehfilApp;

















// // import React, { useState } from 'react';
// // import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
// // import { TextInput, Button } from 'react-native-paper';
// // import RNHTMLtoPDF from 'react-native-html-to-pdf';
// // import RNFS from 'react-native-fs'; // For file system operations
// // import FileViewer from 'react-native-file-viewer'; // For opening the downloaded PDF

// // const MehfilApp = () => {
// //   const [day, setDay] = useState('');
// //   const [date, setDate] = useState('');
// //   const [time, setTime] = useState('');
// //   const [naatKhuan, setNaatKhuan] = useState('');
// //   const [khatib, setKhatib] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [showPoster, setShowPoster] = useState(false);
// //   const [pdfFilePath, setPdfFilePath] = useState('');
// //   const [showOpenButton, setShowOpenButton] = useState(false); // For showing the "Open PDF" button

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

// //   // Function to generate the PDF
// //   const generatePDF = async () => {

// //       let htmlContent = `
// //       <html>
// //   <head>
// //     <style>
// //       body {
// //         font-family: 'Georgia', serif;
// //         background-color: #F3F4F6;
// //         margin: 0;
// //         padding: 20px;
// //       }

// //       .poster {
// //         max-width: 800px;
// //         margin: 0 auto;
// //         padding: 40px;
// //         border-radius: 20px;
// //         background: linear-gradient(145deg, #ffffff, #f0f0f0);
// //         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
// //         text-align: center;
// //         border: 2px solid #e3e3e3;
// //         transition: transform 0.3s ease;
// //       }

// //       .poster:hover {
// //         transform: scale(1.03);
// //       }

// //       .title h1 {
// //         color: #09796a;
// //         font-size: 42px;
// //         margin: 10px 0;
// //         text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
// //         font-family: 'Cursive', sans-serif;
// //         letter-spacing: 2px;
// //       }

// //       .title {
// //         font-size: 28px;
// //         color: #2A9E7E;
// //         margin: 15px 0;
// //         font-family: 'Serif', serif;
// //       }

// //       .subtitle {
// //         font-size: 22px;
// //         color: #333;
// //         margin: 10px 0;
// //         font-weight: 600;
// //       }

// //       .divider {
// //         width: 80%;
// //         height: 3px;
// //         background-color: #09796a;
// //         margin: 30px auto;
// //         border-radius: 2px;
// //       }

// //       .date-time, .location {
// //         font-size: 20px;
// //         margin: 15px 0;
// //         color: #444;
// //         font-weight: bold;
// //       }

// //       .highlight {
// //         font-weight: bold;
// //         color: #09796a;
// //         font-size: 22px;
// //       }

// //       .footer {
// //         margin-top: 30px;
// //         font-size: 20px;
// //         color: #777;
// //         text-align: center;
// //         font-style: italic;
// //       }

// //       .button {
// //         background-color: #09796a;
// //         color: #FFFFFF;
// //         padding: 12px 25px;
// //         border: none;
// //         border-radius: 8px;
// //         cursor: pointer;
// //         margin-top: 25px;
// //         display: inline-block;
// //         text-align: center;
// //         font-size: 18px;
// //         font-weight: bold;
// //         text-decoration: none;
// //         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
// //         transition: background-color 0.3s ease, transform 0.2s ease;
// //       }

// //       .button:hover {
// //         background-color: #065f4d;
// //         transform: translateY(-3px);
// //       }
// //     </style>
// //   </head>
// //   <body>
// //     <div class="poster">
// //       <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
// //       <div class="title">🌙 Mehfil-e-Milad 🌙</div>
// //       <div class="subtitle">Event Details</div>
// //       <div class="divider"></div>
// //       <div class="date-time"><h2>Day: <span class="highlight">${day}</span></h2></div>
// //       <div class="date-time"><h2>Date: <span class="highlight">${date}</span></h2></div>
// //       <div class="date-time"><h2>Time: <span class="highlight">${time}</span></h2></div>
// //       <div class="divider"></div>
// //       <div class="location">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
// //       <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
// //       <div class="location">Address: <span class="highlight">${address}</span></div>
// //       <div class="footer">Join Us for an Inspiring Evening!</div>
// //     </div>
// //   </body>
// // </html>

// //       `;   

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

// //     const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;

// //     try {
// //       await RNFS.copyFile(pdfFilePath, destinationPath);
// //       Alert.alert('Download Complete', `PDF has been saved successfully to: ${destinationPath}`);
// //       setShowOpenButton(true);
// //     } catch (error) {
// //       console.log('Error during file download: ', error);
// //       Alert.alert('Error', 'Failed to download PDF. Please try again.');
// //     }
// //   };

// //   const openPDF = async () => {
// //     try {
// //       const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
// //       await FileViewer.open(destinationPath); // Opens the PDF using the destination path
// //     } catch (error) {
// //       console.log('Error opening file: ', error);
// //       Alert.alert('Error', 'Failed to open the PDF file. Please make sure the file exists.');
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
// //             <Text style={styles.posterTitle}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
// //             <Text style={styles.posterTitle}>🌙 Mehfil-e-Milad-e-Mustafa 🌙</Text>
// //             <Text style={styles.posterText}>Day: {day}</Text>
// //             <Text style={styles.posterText}>Date: {date}</Text>
// //             <Text style={styles.posterText}>Time: {time}</Text>
// //             <Text style={styles.posterText}>Naat Khuwan: {naatKhuan}</Text>
// //             <Text style={styles.posterText}>Khatib: {khatib}</Text>
// //             <Text style={styles.posterText}>Address: {address}</Text>
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
// //     padding: 20,
// //   },
// //   container: {
// //     flexGrow: 1,
// //     justifyContent: 'center',
// //     paddingBottom: 20,
// //   },
// //   header: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginBottom: 20,
// //     color: 'white',
// //   },
// //   input: {
// //     marginBottom: 15,
// //     backgroundColor: '#f8f9fa', // Light background for inputs
// //   },
// //   button: {
// //     marginVertical: 10,
// //     backgroundColor: '#007B5F', // VIP Green for button background
// //     paddingVertical: 2, // Padding for better button height
// //     paddingHorizontal: 10, // Padding for better button width
// //     borderRadius: 10, // Rounded corners for the button
// //     elevation: 5, // Adding elevation for shadow effect
// //   },
// //   poster: {
// //     marginVertical: 20,
// //     padding: 20,
// //     borderRadius: 15,
// //     backgroundColor: '#007B5F', // VIP Green
// //     shadowColor: '#000',
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.5,
// //     shadowRadius: 4,
// //     elevation: 4, // For Android shadow
// //   },
// //   posterTitle: {
// //     fontSize: 34,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginBottom: 15,
// //     color: '#FFDD59', // Gold color for the title
// //     textShadowColor: '#000', // Adding shadow to the text
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 5,
// //   },
// //   posterSubtitle: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginBottom: 10,
// //     color: '#FFDD59',
// //     textShadowColor: '#000',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 5,
// //   },
// //   posterText: {
// //     fontSize: 20,
// //     marginVertical: 10,
// //     textAlign: 'center',
// //     color: '#FFFFFF', // White text for better contrast
// //     padding: 10,
// //     borderRadius: 10,
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background for text
// //   },
// //   highlight: {
// //     color: '#FFDD59', // Gold highlight
// //     fontWeight: 'bold',
// //     fontSize: 22,
// //   },
// // });

// // export default MehfilApp;








// import React, { useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid, Platform, ActivityIndicator } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import RNFS from 'react-native-fs'; // For file system operations
// import FileViewer from 'react-native-file-viewer'; // For opening the downloaded PDF

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

//   // Function to request storage permissions on Android
//   const requestStoragePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'Storage Permission',
//           message: 'App needs access to your storage to download the PDF.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//         Alert.alert('Permission Denied', 'Storage permission is required to download the PDF.');
//         return false;
//       }
//       return true;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   // Function to generate the PDF
//   const generatePDF = async () => {
//     setLoading(true); // Start loader
//     let htmlContent = `
//       <html>
//   <head>
//     <style>
//       body {
//         font-family: 'Georgia', serif;
//         background-color: #F3F4F6;
//         margin: 0;
//         padding: 20px;
//       }

//       .poster {
//         max-width: 800px;
//         margin: 0 auto;
//         padding: 40px;
//         border-radius: 20px;
//         background: linear-gradient(145deg, #ffffff, #f0f0f0);
//         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//         text-align: center;
//         border: 2px solid #e3e3e3;
//         transition: transform 0.3s ease;
//       }

//       .poster:hover {
//         transform: scale(1.03);
//       }

//       .title h1 {
//         color: #09796a;
//         font-size: 42px;
//         margin: 10px 0;
//         text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
//         font-family: 'Cursive', sans-serif;
//         letter-spacing: 2px;
//       }

//       .title {
//         font-size: 28px;
//         color: #2A9E7E;
//         margin: 15px 0;
//         font-family: 'Serif', serif;
//       }

//       .subtitle {
//         font-size: 22px;
//         color: #333;
//         margin: 10px 0;
//         font-weight: 600;
//       }

//       .divider {
//         width: 80%;
//         height: 3px;
//         background-color: #09796a;
//         margin: 30px auto;
//         border-radius: 2px;
//       }

//       .date-time, .location {
//         font-size: 20px;
//         margin: 15px 0;
//         color: #444;
//         font-weight: bold;
//       }

//       .highlight {
//         font-weight: bold;
//         color: #09796a;
//         font-size: 22px;
//       }

//       .footer {
//         margin-top: 30px;
//         font-size: 20px;
//         color: #777;
//         text-align: center;
//         font-style: italic;
//       }

//       .button {
//         background-color: #09796a;
//         color: #FFFFFF;
//         padding: 12px 25px;
//         border: none;
//         border-radius: 8px;
//         cursor: pointer;
//         margin-top: 25px;
//         display: inline-block;
//         text-align: center;
//         font-size: 18px;
//         font-weight: bold;
//         text-decoration: none;
//         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//         transition: background-color 0.3s ease, transform 0.2s ease;
//       }

//       .button:hover {
//         background-color: #065f4d;
//         transform: translateY(-3px);
//       }
//     </style>
//   </head>
//   <body>
//     <div class="poster">
//       <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
//       <div class="title">🌙 Mehfil-e-Milad 🌙</div>
//       <div class="subtitle">Event Details</div>
//       <div class="divider"></div>
//       <div class="date-time"><h2>Day: <span class="highlight">${day}</span></h2></div>
//       <div class="date-time"><h2>Date: <span class="highlight">${date}</span></h2></div>
//       <div class="date-time"><h2>Time: <span class="highlight">${time}</span></h2></div>
//       <div class="divider"></div>
//       <div class="location">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
//       <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
//       <div class="location">Address: <span class="highlight">${address}</span></div>
//       <div class="footer">Join Us for an Inspiring Evening!</div>
//     </div>
//   </body>
// </html>
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
//     if (Platform.OS === 'android') {
//       const hasPermission = await requestStoragePermission();
//       if (!hasPermission) {
//         return;
//       }
//     }

//     const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;

//     try {
//       await RNFS.copyFile(pdfFilePath, destinationPath);
//       Alert.alert('Download Complete', `PDF has been saved successfully to: ${destinationPath}`);
//       setShowOpenButton(true);
//     } catch (error) {
//       console.log('Error during file download: ', error);
//       Alert.alert('Error', 'Failed to download PDF. Please try again.');
//     }
//   };

//   const openPDF = async () => {
//     try {
//       const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
//       await FileViewer.open(destinationPath); // Opens the PDF using the destination path
//     } catch (error) {
//       console.log('Error opening file: ', error);
//       Alert.alert('Error', 'Failed to open the PDF file. Please make sure the file exists.');
//     }
//   };

//   const handleSubmit = () => {
//     setShowPoster(true);
//     generatePDF(); // Generate the PDF after showing the poster
//   };

//   return (
//     <ImageBackground
//       source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
//       style={styles.background}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.header}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
//         <TextInput label="Day" value={day} onChangeText={setDay} style={styles.input} />
//         <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
//         <TextInput label="Time" value={time} onChangeText={setTime} style={styles.input} />
//         <TextInput label="Naat Khuwan" value={naatKhuan} onChangeText={setNaatKhuan} style={styles.input} />
//         <TextInput label="Khatib" value={khatib} onChangeText={setKhatib} style={styles.input} />
//         <TextInput label="Address" value={address} onChangeText={setAddress} style={styles.input} />
//         <Button mode="contained" onPress={handleSubmit} style={styles.button}>Generate PDF</Button>

//         {showPoster && (
//           <View style={styles.poster}>
//             <Text style={styles.posterTitle}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
//             <Text style={styles.posterTitle}>🌙 Mehfil-e-Milad-e-Mustafa 🌙</Text>
//             <Text style={styles.posterText}>Day: {day}</Text>
//             <Text style={styles.posterText}>Date: {date}</Text>
//             <Text style={styles.posterText}>Time: {time}</Text>
//             <Text style={styles.posterText}>Naat Khuwan: {naatKhuan}</Text>
//             <Text style={styles.posterText}>Khatib: {khatib}</Text>
//             <Text style={styles.posterText}>Address: {address}</Text>
//           </View>
//         )}


//         {loading && (
//           <ActivityIndicator size="large" color="#09796a" style={styles.loader} />
//         )}

//         {showPoster && (
//           <View style={styles.posterContainer}>
//             <Text style={styles.posterHeader}>Your Poster</Text>

//             {pdfFilePath !== '' && !showOpenButton && (
//           <Button mode="contained" onPress={handleDownloadPDF} style={styles.button}>
//             Download PDF
//           </Button>
//         )}

//         {showOpenButton && (
//           <Button mode="contained" onPress={openPDF} style={styles.button}>
//             Open PDF
//           </Button>
//         )}

//             {/* Add your poster rendering code here if needed
//             {pdfFilePath && (
//               <Button mode="contained" onPress={handleDownloadPDF} style={styles.button}>
//                 Download PDF
//               </Button>
//             )}
//             {showOpenButton && (
//               <Button mode="contained" onPress={openPDF} style={styles.button}>
//                 Open PDF
//               </Button>
//             )} */}
//           </View>
//         )}
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
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     marginBottom: 10,
//   },
//   button: {
//     width: '100%',
//     marginVertical: 10,
//   },
//   posterContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   posterHeader: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   loader: {
//     marginTop: 10,
//     backgroundColor:'#000',
//     borderRadius: 50,
//     padding: 10,
//     color:'#fff',
//   },

//   poster: {
//         marginVertical: 20,
//         padding: 20,
//         borderRadius: 15,
//         backgroundColor: '#007B5F', // VIP Green
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.5,
//         shadowRadius: 4,
//         elevation: 4, // For Android shadow
//       },
//       posterTitle: {
//         fontSize: 34,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: 15,
//         color: '#FFDD59', // Gold color for the title
//         textShadowColor: '#000', // Adding shadow to the text
//         textShadowOffset: { width: 1, height: 1 },
//         textShadowRadius: 5,
//       },
//       posterSubtitle: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: 10,
//         color: '#FFDD59',
//         textShadowColor: '#000',
//         textShadowOffset: { width: 1, height: 1 },
//         textShadowRadius: 5,
//       },
//       posterText: {
//         fontSize: 20,
//         marginVertical: 10,
//         textAlign: 'center',
//         color: '#FFFFFF', // White text for better contrast
//         padding: 10,
//         borderRadius: 10,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background for text
//       },
//       highlight: {
//         color: '#FFDD59', // Gold highlight
//         fontWeight: 'bold',
//         fontSize: 22,
//       },
// });

// export default MehfilApp;
























import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid, Platform, ActivityIndicator } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';
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
  const [loading, setLoading] = useState(false); // Loader state
  const [isLangerChecked, setIsLangerChecked] = useState(false); // State for the checkbox

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
            <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
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
      <Text style={styles.header}>🌙 Mehfil-e-Milad Poster Generator 🌙</Text>
        <TextInput
          label="Day"
          value={day}
          onChangeText={(text) => setDay(text)}
          style={styles.input}
        />
        <TextInput
          label="Date"
          value={date}
          onChangeText={(text) => setDate(text)}
          style={styles.input}
        />
        <TextInput
          label="Time"
          value={time}
          onChangeText={(text) => setTime(text)}
          style={styles.input}
        />
        <TextInput
          label="Naat Khuwan"
          value={naatKhuan}
          onChangeText={(text) => setNaatKhuan(text)}
          style={styles.input}
        />
        <TextInput
          label="Khatib"
          value={khatib}
          onChangeText={(text) => setKhatib(text)}
          style={styles.input}
        />
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
          <Text style={styles.checkboxLabel}>Include Langer Announcement</Text>
        </View>
        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Generate Poster
        </Button>

        {loading && <ActivityIndicator size="large" color="#0000ff" />}

        {showPoster && (
          <View style={styles.posterContainer}>
            <Text style={styles.posterHeader}>Your Mehfil Poster</Text>
            <Text style={styles.posterText}>Day: {day}</Text>
            <Text style={styles.posterText}>Date: {date}</Text>
            <Text style={styles.posterText}>Time: {time}</Text>
            <Text style={styles.posterText}>Naat Khuwan: {naatKhuan}</Text>
            <Text style={styles.posterText}>Khatib: {khatib}</Text>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },

  background: {
        flex: 1,
        resizeMode: 'cover',
      },
      container: {
        padding: 20,
        alignItems: 'center',
      },
      header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      input: {
        width: '100%',
        marginBottom: 10,
      },
      button: {
        width: '100%',
        marginVertical: 10,
      },
      posterContainer: {
        backgroundColor:'#1687b9',
        marginTop: 20,
        alignItems: 'center',
        padding:10,
        borderRadius:20,
      },
      posterHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      loader: {
        marginTop: 10,
        backgroundColor:'#000',
        borderRadius: 50,
        padding: 10,
        color:'#fff',
      },
    
      poster: {
            marginVertical: 20,
            padding: 20,
            borderRadius: 15,
            backgroundColor: '#007B5F', // VIP Green
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 4, // For Android shadow
          },
          posterTitle: {
            fontSize: 34,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 15,
            color: '#FFDD59', // Gold color for the title
            textShadowColor: '#000', // Adding shadow to the text
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 5,
          },
          posterSubtitle: {
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10,
            color: '#FFDD59',
            textShadowColor: '#000',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 5,
          },
          posterText: {
            fontSize: 20,
            marginVertical: 10,
            textAlign: 'center',
            color: '#FFFFFF', // White text for better contrast
            padding: 10,
            borderRadius: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background for text
          },
          highlight: {
            color: '#FFDD59', // Gold highlight
            fontWeight: 'bold',
            fontSize: 22,
          },
});

export default MehfilApp;
