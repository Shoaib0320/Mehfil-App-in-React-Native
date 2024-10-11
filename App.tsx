import React, { useState, useRef } from 'react';
import { ScrollView, StyleSheet, View, Alert, ImageBackground, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';


// import DatePickerComponent from './components/DatePickerComponent';
// import DayComponent from './components/DayComponent';\
import ParentComponent from './components/parentComponent'; // Adjust the path as needed

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
    const [childrenData, setChildrenData] = useState([]);
    const [dulhaData, setDulhaData] = useState([]);
    // const [childrenName, setChildrenName] = useState('');
    // const [childrenImage, setChildrenImage] = useState('');
    // const [dulhaName, setDulhaName] = useState('');
    // const [dulhaImage, setDulhaImage] = useState('');
    

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
                        `${childrenData.map(child => `
                            <div>
                                <img src="${child.image}" alt="${child.name}">
                                <p class="info">Children: <span>${child.name}</span></p>
                            </div>`).join('')}` : 
                        `${dulhaData.map(dulha => `
                            <div>
                                <img src="${dulha.image}" alt="${dulha.name}">
                                <p class="info">Dulha: <span>${dulha.name}</span></p>
                            </div>`).join('')}` 
                    }
                            <div style="flex-direction: column;">
                                <p class="info">Day: <span>${day}</span></p>
                                <p class="info">Date: <span>${date}</span></p>
                                <p class="info">Time: <span>${time}</span></p>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="naat-khuans">
                        <h4 style="width: 100%; text-align: center; color: #4A148C;">نعت خواں:</h4>
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
                        ${isLangerChecked && eventType === 'محفل بارھویں' ? `<p style="color: #4A148C; font-weight: bold;">لنگرِ میلاد کا اہتمام ہے</p>` : ''}
                        ${isLangerChecked && eventType === 'محفل گیارہویں' ? `<p style="color: #4A148C; font-weight: bold;">لنگرِ غوثیہ کا اہتمام ہے</p>` : ''}
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
                {/* <DatePickerComponent date={date} setDate={setDate} />
                <DayComponent day={day} setDay={setDay} /> */}
                      <ParentComponent />

                <TimeComponent time={time} setTime={setTime} />
                <EventTypePicker
                    eventType={eventType}
                    setEventType={setEventType}
                    setChildrenData={setChildrenData}
                    setDulhaData={setDulhaData}
                />
                {/* <EventTypePicker
                    eventType={eventType}
                    setEventType={setEventType}
                    setChildrenName={setChildrenName}
                    setDulhaName={setDulhaName}
                    setChildrenImage={setChildrenImage}
                    setDulhaImage={setDulhaImage}
                /> */}
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
                        // childrenName={childrenName}
                        // childrenImage={childrenImage}
                        // dulhaName={dulhaName}
                        // dulhaImage={dulhaImage}
                        childrenData={childrenData}
                        dulhaData={dulhaData}
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
