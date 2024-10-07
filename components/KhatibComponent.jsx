import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const KhatibComponent = ({ khatib, setKhatib, selectKhatibImage, khatibImage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>خطیب:</Text>
      <View style={styles.khatibItem}>
        <TextInput
          label="Khatib Name"
          value={khatib}
          onChangeText={setKhatib}
          style={styles.textInput}
          mode="outlined"
          theme={{ colors: { primary: '#FFD700', placeholder: '#FFD700', text: '#FFD700' } }} // Golden colors for a cohesive look
        />
        <Button onPress={selectKhatibImage} mode="contained" style={styles.button}>
          Select Khatib Image
        </Button>
        {khatibImage && <Image source={{ uri: khatibImage }} style={styles.image} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: '#F0F0F0', // Light grey background for contrast
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#A5A5A5', // Light silver border for elegance
    shadowColor: '#A5A5A5',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    marginBottom: 10,
    fontSize: 20,
    color: '#5A5A5A', // Softer grey color for the header
    textAlign: 'center',
  },
  khatibItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DADADA', // Light border around items
    borderRadius: 10,
    backgroundColor: '#FFFFFF', // White background for item
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: '#EAEAEA', // Light background for input field
    color: '#333333', // Darker grey text for better readability
  },
  button: {
    marginTop: 10,
    backgroundColor: '#4CAF50', // Soft green button for a fresh look
    color: '#FFFFFF', // White text on buttons
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },

});

export default KhatibComponent;
