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
    margin: 15,
    padding: 15,
    backgroundColor: '#000000', // Dark background for contrast
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FFD700', // Golden border for elegance
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    marginBottom: 10,
    fontSize: 20,
    color: '#FFD700', // Golden text color for the header
    textAlign: 'center',
  },
  khatibItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 10,
    backgroundColor: '#333333', // Darker background for item
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: '#444444', // Dark background for input
    color: '#FFD700', // Golden text for visibility
  },
  button: {
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default KhatibComponent;
