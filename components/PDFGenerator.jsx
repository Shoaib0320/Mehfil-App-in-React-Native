import React, { useState } from 'react';
import { ActivityIndicator, Alert, PermissionsAndroid, Platform, Text, View } from 'react-native';
import { Button } from 'react-native-paper'; // Ensure you're using the right Button component
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';

const PDFGenerator = ({ htmlContent }) => {
  const [loading, setLoading] = useState(false);
  const [pdfFilePath, setPdfFilePath] = useState('');
  const [showOpenButton, setShowOpenButton] = useState(false);

  const generatePDF = async () => {
    setLoading(true);
    try {
      // Create a unique file name using the current timestamp
      const fileName = `Mehfil_E_Milad_Poster_${Date.now()}.pdf`;
      const options = {
        html: htmlContent,
        fileName: fileName,
        directory: 'Documents',
      };

      const file = await RNHTMLtoPDF.convert(options);
      setPdfFilePath(file.filePath);
      Alert.alert('Success', 'PDF Created Successfully');
      setShowOpenButton(false); // Reset the button visibility
    } catch (error) {
      Alert.alert('Error', 'Failed to generate PDF');
    } finally {
      setLoading(false);
    }
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
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const handleDownloadPDF = async () => {
    if (Platform.OS === 'android') {
      const hasPermission = await requestStoragePermission();
      if (!hasPermission) {
        Alert.alert('Permission Denied', 'Storage permission is required to download the PDF.');
        return;
      }
    }

    const destinationPath = `${RNFS.DocumentDirectoryPath}/${pdfFilePath.split('/').pop()}`; // Get the last part of the path for the destination file

    try {
      await RNFS.copyFile(pdfFilePath, destinationPath);
      Alert.alert('Download Complete', `PDF has been saved successfully to: ${destinationPath}`);
      setShowOpenButton(true); // Show the open button after download
    } catch (error) {
      console.log('Error during file download: ', error);
      Alert.alert('Error', 'Failed to download PDF. Please try again.');
    }
  };

  const openPDF = async () => {
    try {
      const destinationPath = `${RNFS.DocumentDirectoryPath}/${pdfFilePath.split('/').pop()}`; // Open the same downloaded PDF
      await FileViewer.open(destinationPath);
    } catch (error) {
      console.log('Error opening file: ', error);
      Alert.alert('Error', 'Failed to open the PDF file. Please make sure the file exists.');
    }
  };

  return (
    <View style={{ marginBottom: 10, paddingBottom: 20 }}>
      <Button mode="contained" onPress={generatePDF} style={{ marginTop: 10 }} disabled={loading}>
        {loading ? (
          <ActivityIndicator animating={true} color="#ffffff" />
        ) : (
          <Text>Generate Poster PDF</Text>
        )}
      </Button>

      {pdfFilePath !== '' && !showOpenButton && (
        <Button mode="contained" onPress={handleDownloadPDF} style={{ marginTop: 10 }}>
          <Text>Download PDF</Text>
        </Button>
      )}

      {showOpenButton && (
        <Button mode="contained" onPress={openPDF} style={{ marginTop: 10 }}>
          <Text>Open PDF</Text>
        </Button>
      )}
    </View>
  );
};

export default PDFGenerator;
