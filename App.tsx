// import React, { useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid, Platform, ActivityIndicator, Image } from 'react-native';
// import { TextInput, Button, Checkbox } from 'react-native-paper';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import RNFS from 'react-native-fs';
// import FileViewer from 'react-native-file-viewer';
// import { launchImageLibrary } from 'react-native-image-picker';
// import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker

// const MehfilApp = () => {
//   const [day, setDay] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [naatKhuan, setNaatKhuan] = useState('');
//   const [khatib, setKhatib] = useState('');
//   const [address, setAddress] = useState('');
//   const [showPoster, setShowPoster] = useState(false);
//   const [pdfFilePath, setPdfFilePath] = useState('');
//   const [showOpenButton, setShowOpenButton] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [isLangerChecked, setIsLangerChecked] = useState(false);
//   const [naatImage, setNaatImage] = useState(null);
//   const [khatibImage, setKhatibImage] = useState(null);
  
//   // New state for date picker
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   // Function to handle date change
//   const onChangeDate = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(false);
//     setSelectedDate(currentDate);
//     // Format the date to a readable string
//     setDate(currentDate.toLocaleDateString('en-GB')); // Change the format as needed
//   };


//     // Function to pick an image
//       const selectImage = (setImage) => {
//         const options = {
//           mediaType: 'photo',
//         };

//         launchImageLibrary(options, (response) => {
//           if (response.didCancel) {
//             console.log('User cancelled image picker');
//           } else if (response.error) {
//             console.log('ImagePicker Error: ', response.error);
//           } else if (response.assets && response.assets.length > 0) {
//             setImage(response.assets[0].uri); // Set the selected image URI to the state
//           }
//         });
//       };

//       // Function to request storage permissions on Android
//           const requestStoragePermission = async () => {
//             try {
//               const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//                 {
//                   title: 'Storage Permission',
//                   message: 'App needs access to your storage to download the PDF.',
//                   buttonNeutral: 'Ask Me Later',
//                   buttonNegative: 'Cancel',
//                   buttonPositive: 'OK',
//                 },
//               );
//               if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//                 Alert.alert('Permission Denied', 'Storage permission is required to download the PDF.');
//                 return false;
//               }
//               return true;
//             } catch (err) {
//               console.warn(err);
//               return false;
//             }
//           };

//       // Function to generate the PDF
//       const generatePDF = async () => {
//         setLoading(true); // Start loader

//         let langerContent = isLangerChecked ? `<div class="footer">لنگرِ میلاد کا بھی اہتمام ہے</div>` : '';
//         let naatImageHTML = naatImage ? `<img src="${naatImage}" alt="Naat Khuwan Image" style="width:150px; height:150px; border-radius:10px;" />` : '';
//         let khatibImageHTML = khatibImage ? `<img src="${khatibImage}" alt="Khatib Image" style="width:150px; height:150px; border-radius:10px;" />` : '';

//         let htmlContent = `
//           <html>
//             <head>
//               <style>
//                 body {
//                   font-family: 'Georgia', serif;
//                   background-color: #F3F4F6;
//                   margin: 0;
//                   padding: 20px;
//                 }
//                 .poster {
//                   max-width: 800px;
//                   margin: 0 auto;
//                   padding: 40px;
//                   border-radius: 20px;
//                   background: linear-gradient(145deg, #ffffff, #f0f0f0);
//                   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//                   text-align: center;
//                   border: 2px solid #e3e3e3;
//                   transition: transform 0.3s ease;
//                 }
//                 .poster:hover {
//                   transform: scale(1.03);
//                 }
//                 .title h1 {
//                   color: #09796a;
//                   font-size: 42px;
//                   margin: 10px 0;
//                   text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
//                   font-family: 'Cursive', sans-serif;
//                   letter-spacing: 2px;
//                 }
//                 .title {
//                   font-size: 28px;
//                   color: #2A9E7E;
//                   margin: 15px 0;
//                   font-family: 'Serif', serif;
//                 }
//                 .subtitle {
//                   font-size: 22px;
//                   color: #333;
//                   margin: 10px 0;
//                   font-weight: 600;
//                 }
//                 .divider {
//                   width: 80%;
//                   height: 3px;
//                   background-color: #09796a;
//                   margin: 30px auto;
//                   border-radius: 2px;
//                 }
//                 .date-time, .location {
//                   font-size: 20px;
//                   margin: 15px 0;
//                   color: #444;
//                   font-weight: bold;
//                 }
//                 .highlight {
//                   font-weight: bold;
//                   color: #09796a;
//                   font-size: 22px;
//                 }
//                 .footer {
//                   margin-top: 30px;
//                   font-size: 20px;
//                   color: #777;
//                   text-align: center;
//                   font-style: italic;
//                 }
//                 .button {
//                   background-color: #09796a;
//                   color: #FFFFFF;
//                   padding: 12px 25px;
//                   border: none;
//                   border-radius: 8px;
//                   cursor: pointer;
//                   margin-top: 25px;
//                   display: inline-block;
//                   text-align: center;
//                   font-size: 18px;
//                   font-weight: bold;
//                   text-decoration: none;
//                   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//                   transition: background-color 0.3s ease, transform 0.2s ease;
//                 }
//                 .button:hover {
//                   background-color: #065f4d;
//                   transform: translateY(-3px);
//                 }
//               </style>
//             </head>
//             <body>
//               <div class="poster">
//                 <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
//                 <div class="title">🌙 Mehfil-e-Milad 🌙</div>
//                 <div class="subtitle">Event Details</div>
//                 <div class="divider"></div>
//                 <div class="date-time"><h2>Day: <span class="highlight">${day}</span></h2></div>
//                 <div class="date-time"><h2>Date: <span class="highlight">${date}</span></h2></div>
//                 <div class="date-time"><h2>Time: <span class="highlight">${time}</span></h2></div>
//                 <div class="divider"></div>
//                 <div class="location">Naat Khuwan: <span class="highlight">${naatKhuan}</span></div>
//                 ${naatImageHTML} <!-- Naat Khuwan Image -->
//                 <div class="location">Khatib: <span class="highlight">${khatib}</span></div>
//                 ${khatibImageHTML} <!-- Khatib Image -->
//                 <div class="location">Address: <span class="highlight">${address}</span></div>
//                 ${langerContent}
//                 <div class="footer">Join Us for an Inspiring Evening!</div>
//               </div>
//             </body>
//           </html>
//         `;

//         try {
//           const pdf = await RNHTMLtoPDF.convert({
//             html: htmlContent,
//             fileName: 'Mehfil-e-Milad-Poster',
//             directory: 'Documents',
//           });

//           setPdfFilePath(pdf.filePath);
//           Alert.alert('PDF Created', 'PDF has been generated successfully.');
//         } catch (error) {
//           Alert.alert('Error', 'Failed to create PDF. Please try again.');
//         } finally {
//           setLoading(false); // Stop loader
//         }
//       };

//       const handleDownloadPDF = async () => {
//             if (Platform.OS === 'android') {
//               const hasPermission = await requestStoragePermission();
//               if (!hasPermission) {
//                 return;
//               }
//             }
        
//             const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
        
//             try {
//               await RNFS.copyFile(pdfFilePath, destinationPath);
//               Alert.alert('Download Complete', `PDF has been saved successfully to: ${destinationPath}`);
//               setShowOpenButton(true);
//             } catch (error) {
//               console.log('Error during file download: ', error);
//               Alert.alert('Error', 'Failed to download PDF. Please try again.');
//             }
//           };
        
//           const openPDF = async () => {
//             try {
//               const destinationPath = `${RNFS.DocumentDirectoryPath}/Mehfil-e-Milad-Poster.pdf`;
//               await FileViewer.open(destinationPath); // Opens the PDF using the destination path
//             } catch (error) {
//               console.log('Error opening file: ', error);
//               Alert.alert('Error', 'Failed to open the PDF file. Please make sure the file exists.');
//             }
//           };


//           const handleSubmit = () => {
//             setShowPoster(true);
//             generatePDF(); // Generate the PDF after showing the poster
//           };



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
//         <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
//           <TextInput
//             label="Date"
//             value={date}
//             editable={false} // Prevent editing directly
//             style={styles.input}
//           />
//         </TouchableOpacity>

//         {showDatePicker && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={selectedDate}
//             mode="date"
//             display="default"
//             onChange={onChangeDate}
//           />
//         )}

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
//           <Text style={styles.checkboxLabel}>Include "Langer" Announcment</Text>
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

//         {pdfFilePath !== '' && !showOpenButton && (
//           <Button mode="contained" onPress={handleDownloadPDF} style={styles.button}>
//             Download PDF
//           </Button>
//         )}

//         {showOpenButton && (
//           <Button mode="contained" onPress={openPDF} style={styles.button}>
//             Open PDF
//           </Button>
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
//   personContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   posterImage:{
//     height : 50,
//     width: 50,
//     margin:4,
//   },
//   posterContainer: {
//     backgroundColor: '#1687b9',
//     marginTop: 20,
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 20,
//   },
//   posterHeader: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   posterText: {
//     fontSize: 20,
//     marginVertical: 10,
//     textAlign: 'center',
//     color: '#FFFFFF',
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
// });

// export default MehfilApp;










import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, Alert, TouchableOpacity, PermissionsAndroid, Platform, ActivityIndicator, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import { launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker'; // Import the Picker component
import BouncyCheckbox from "react-native-bouncy-checkbox";


const MehfilApp = () => {
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [khatib, setKhatib] = useState('');
  const [address, setAddress] = useState('');
  const [showPoster, setShowPoster] = useState(false);
  const [pdfFilePath, setPdfFilePath] = useState('');
  const [showOpenButton, setShowOpenButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLangerChecked, setIsLangerChecked] = useState(false);
  const [khatibImage, setKhatibImage] = useState(null);

  const [eventType, setEventType] = useState(''); // New state for event type
  const [organization, setOrganization] = useState(''); // State for Organization Mehfil

  
  // State for multiple Naat Khuwans
  const [naatKhuans, setNaatKhuans] = useState([
    { name: '', image: null },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
    setDate(currentDate.toLocaleDateString('en-GB')); // Format the date
  };

   // Function to handle Khatib image selection
   const selectKhatibImage = () => {
    console.log("Selecting image for Khatib");
    const options = { mediaType: 'photo' };
    launchImageLibrary(options, (response) => {
      if (!response.didCancel && response.assets) {
        const uri = response.assets[0].uri;
        setKhatibImage(uri);
      }
    });
  };

  // Function to handle Naat Khuwan image selection
  const selectNaatKhuanImage = (index) => {
    console.log("Selecting image for Naat Khuwan at index:", index);
    const options = { mediaType: 'photo' };
    launchImageLibrary(options, (response) => {
      if (!response.didCancel && response.assets) {
        const uri = response.assets[0].uri;
        handleNaatKhuanChange(index, 'image', uri);
      }
    });
  };

  // Function to handle Naat Khuwan changes (name or image)
  const handleNaatKhuanChange = (index, field, value) => {
    const updatedNaatKhuans = [...naatKhuans];
    updatedNaatKhuans[index][field] = value;
    setNaatKhuans(updatedNaatKhuans);
  };

  // Function to add a new Naat Khuwan input field
  const addNaatKhuan = () => {
    setNaatKhuans([...naatKhuans, { name: '', image: null }]);
  };

  

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

  const generatePDF = async () => {
    setLoading(true);
    let langerContent = isLangerChecked ? `<div class="footer">لنگرِ میلاد کا بھی اہتمام ہے</div>` : '';
    
    // Create Naat Khuwans HTML
    let naatKhuansHTML = naatKhuans.map((nk, index) => `<div class="naatKhuwanDisplay">
      <div class="location">Naat Khuwan: <span class="highlight">${nk.name}</span></div>
      ${nk.image ? `<img src="${nk.image}" alt="Naat Khuwan Image" style="width:150px; height:150px; border-radius:50%;" /></div>` : ''}
    `).join('');
  
    let khatibImageHTML = khatibImage ? `<img src="${khatibImage}" alt="Khatib Image" style="width:150px; height:150px; border-radius:50%;" />` : '';
  
    let htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: 'Georgia', serif; background-color: #F3F4F6; padding: 20px; }
            .poster { max-width: 800px; margin: 0 auto; padding: 40px; border-radius: 20px; background: #fff; text-align: center; }
            .title h1 { color: #09796a; font-size: 42px; margin: 10px 0; }
            .date-time, .location { font-size: 20px; margin: 15px 0; }
            .highlight { font-weight: bold; color: #09796a; }
            .naatKhuwanDisplay{display:flex;justify-content: center; align-items: center}
          </style>
        </head>
        <body>
          <div class="poster">
            <div class="title"><h1>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</h1></div>
            <div class="title"><h1>Mehfil-e-Milad</h1></div>
            <div class="title"><h1>${eventType}</h1></div>
            <div class="date-time">Day: <span class="highlight">${day}</span></div>
            <div class="date-time">Date: <span class="highlight">${date}</span></div>
            <div class="date-time">Time: <span class="highlight">${time}</span></div>
            ${naatKhuansHTML} <!-- Naat Khuwans with Images -->
            <div class="divider"></div>
            ${khatibImageHTML} <!-- Khatib Image -->
            <div class="location">Khatib: <span class="highlight">${khatib}</span></div> <!-- Khatib Name -->
            <div class="location">Address: <span class="highlight">${address}</span></div>
            ${langerContent}
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
      setLoading(false);
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
    generatePDF();
  };

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/realistic-background-mawlid-al-nabi-celebration_23-2150679447.jpg?size=626&ext=jpg' }} 
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
        <TextInput label="Day" value={day} onChangeText={(text) => setDay(text)} style={styles.input} />
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
          <TextInput label="Date" value={date} editable={false} style={styles.input} />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker testID="dateTimePicker" value={selectedDate} mode="date" display="default" onChange={onChangeDate} />
        )}

        <TextInput label="Time" value={time} onChangeText={(text) => setTime(text)} style={styles.input} />
        
          {/* Naat Khuwan Section */}
            <Text style={{ fontSize: 18, marginTop: 10,marginBottom:10, }}>نعت خواں:</Text>
            {naatKhuans.map((naatKhuan, index) => (
              <View key={index} style={{ marginBottom: 1 }}>
                <TextInput 
                  value={naatKhuan.name} // Ensure this links to a state variable
                  onChangeText={(text) => {
                    const updatedNaatKhuans = [...naatKhuans];
                    updatedNaatKhuans[index].name = text; // Update the name in the array
                    setNaatKhuans(updatedNaatKhuans); // Update the state
                  }}
                  placeholder={`Naat Khuwan ${index + 1} Name`} // Add a placeholder for clarity
                />
                <Button onPress={() => selectNaatKhuanImage(index)} mode="contained" style={styles.button}>
                  {`Select Naat Khuwan ${index + 1} Image`}                
                </Button>
                {naatKhuan.image && (
                  <Image
                    source={{ uri: naatKhuan.image }}
                    style={{ width: 100, height: 100, marginTop: 10,marginBottom:10, }}
                  />
                )}
              </View>
            ))}

            {/* Button to add a new Naat Khuwan */}
            <Button onPress={addNaatKhuan} mode="contained" style={styles.button}>
              Add Another Naat Khuwan
            </Button>

            {/* Khatib Section */}
            <TextInput 
              label="Khatib Name" 
              value={khatib} // Ensure this links to the state variable
              onChangeText={(text) => setKhatib(text)} // Update the state on change
              style={styles.input} 
            />           
            <Button onPress={selectKhatibImage} mode="contained" style={styles.button}>
              Select Khatib Image
            </Button>
            {khatibImage && (
              <Image
                source={{ uri: khatibImage }}
                style={{ width: 100, height: 100, marginTop: 10,marginBottom:10, }}
              />
            )}


             {/* Dropdown for Event Type */}
              <Text style={{ fontSize: 18, marginTop: 10 }}>Select Event Type:</Text>
                <Picker
                  selectedValue={eventType}
                  onValueChange={(itemValue) => setEventType(itemValue)} // Set the selected value
                  style={styles.eventTypeText}
                >
                  <Picker.Item label="محفل بارھویں" value="محفل بارھویں" />
                  <Picker.Item label="محفل گیارہویں" value="محفل گیارہویں" />
                  <Picker.Item label="رسمِ آمین" value="رسمِ آمین" />
                  <Picker.Item label="شادی خانہ آبادی" value="شادی خانہ آبادی" />
                </Picker>

                { /* Add Organization Mehfil Input */ }
            <TextInput 
                label="Mehfil Organizar" 
                value={organization} // Ensure this links to the state variable
                onChangeText={(text) => setOrganization(text)} // Update the state on change
                style={styles.input} 
            />

        <TextInput label="Address" value={address} onChangeText={(text) => setAddress(text)} style={styles.input} />
        
        <View style={styles.checkboxContainer}>
        
            <BouncyCheckbox
              isChecked={isLangerChecked}
              text="Include Langer Information"
              onPress={(isChecked) => setIsLangerChecked(isChecked)}
              fillColor="green"
            />
        </View>

        <Button mode="contained" onPress={handleSubmit} style={styles.button} disabled={loading}>
          {loading ? <ActivityIndicator animating={true} color="#ffffff" /> : 'Generate Poster PDF'}
        </Button>

        {/* {loading && <ActivityIndicator size="large" color="#0000ff" />} */}

        {showPoster && (
          <View style={styles.posterContainer}>
            <Text style={styles.posterHeader}>اَلصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حبيبَ اللّٰهِ</Text>
            <Text style={styles.posterHeader}>Mehfil-E-Milad Poster</Text>
            <Text style={styles.posterHeader}>{eventType}</Text>
            <Text style={styles.posterText}>Day: {day}</Text>
            <Text style={styles.posterText}>Date: {date}</Text>
            <Text style={styles.posterText}>Time: {time}</Text>

            {/* Naat Khuwan Section with Image */}
              <View style={styles.naatKhuanContainer}>
                {naatKhuans.map((naatKhuan, index) => (
                  <View key={index} style={styles.personContainer}>
                    {naatKhuan.image && (
                      <Image source={{ uri: naatKhuan.image }} style={styles.posterImage} />
                    )}
                    <Text style={styles.naatKhuanName}>نعت خواں: {naatKhuan.name}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.khatibContainer}>
                  {khatibImage && (
                      <Image source={{ uri: khatibImage }} style={styles.posterImage} />
                  )}
                  <Text style={styles.khatibName}>خطیب: {khatib}</Text>
              </View>

              <Text style={styles.posterText}>Address: {address}</Text>

              <Text style={styles.posterText}>Mehfil Organizar: {organization}</Text>

                 {/* Langer Information based on Event Type */}
            {isLangerChecked && eventType === 'محفل بارھویں' && (
              <Text style={styles.posterText}>لنگرِ میلاد کا اہتمام ہے</Text>
            )}
            {isLangerChecked && eventType === 'محفل گیارہویں' && (
              <Text style={styles.posterText}>لنگرِ غوثیہ کا اہتمام ہے۔</Text>
            )}
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
          marginHorizontal:10,
        },
        button: {
          marginTop: 10,
          backgroundColor: '#09796a',
          marginBottom:10,
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

        posterContainer: {
          flexGrow: 1,
          padding: 20,
          backgroundColor: '#f5f5f5',  // Light background for poster
          alignItems: 'center',
        },
        posterHeader: {
          fontSize: 26,
          color: '#ffd700',  // Golden color for premium look
          fontWeight: '700',
          textAlign: 'center',
          marginVertical: 10,
          textShadowColor: '#000', // Adding shadow for depth
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 1,
        },
        eventTypeText: {
          fontSize: 22,
          color: '#006400',  // Dark green for event type
          backgroundColor:'#f5f5f5',
          textAlign: 'center',
          fontWeight: '600',
          marginVertical: 10,
        },
        dateTimeContainer: {
          marginVertical: 15,
          alignItems: 'center',
        },
        posterText: {
          fontSize: 18,
          color: '#333',  // Neutral black for text
          textAlign: 'center',
          marginVertical: 5,
          
        },
        naatKhuanContainer: {
          marginTop: 20,
          alignItems: 'center',
        },
        personContainer: {
          alignItems: 'center',
          marginBottom: 20,
        },
        posterImage: {
          width: 100,
          height: 100,
          borderRadius: 60,  // Circular image
          borderWidth: 2,
          borderColor: '#ffd700',  // Golden border
          marginBottom: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        },
        naatKhuanName: {
          fontSize: 18,
          color: '#444',  // Darker text for names
          textAlign: 'center',
          fontWeight: '500',
        },
        khatibContainer: {
          marginTop: 10,
          alignItems: 'center',
        },
        khatibName: {
          fontSize: 18,
          color: '#444',
          textAlign: 'center',
          marginTop: 10,
          fontWeight: '500',
        },
        langerText: {
          fontSize: 18,
          color: '#8B0000',  // Dark red for langer info
          textAlign: 'center',
          marginTop: 15,
          fontWeight: '600',
        },
});

export default MehfilApp;
