import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const NaatKhuanComponent = ({ naatKhuans, setNaatKhuans, selectNaatKhuanImage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>نعت خواں:</Text>
      {naatKhuans.map((naatKhuan, index) => (
        <View key={index} style={styles.naatKhuanItem}>
          <TextInput
            value={naatKhuan.name}
            onChangeText={(text) => {
              const updatedNaatKhuans = [...naatKhuans];
              updatedNaatKhuans[index].name = text;
              setNaatKhuans(updatedNaatKhuans);
            }}
            placeholder={`Naat Khuwan ${index + 1} Name`}
            style={styles.textInput} // Apply styling to TextInput
          />
          <Button
            onPress={() => selectNaatKhuanImage(index)}
            mode="contained"
            style={styles.button}
          >
            {`Select Naat Khuwan ${index + 1} Image`}
          </Button>
          {naatKhuan.image && (
            <Image source={{ uri: naatKhuan.image }} style={styles.image} />
          )}
          {/* Conditionally render the delete button */}
          {naatKhuans.length > 1 && (
            <TouchableOpacity
              onPress={() => {
                const updatedNaatKhuans = naatKhuans.filter((_, i) => i !== index);
                setNaatKhuans(updatedNaatKhuans);
              }}
              mode="outlined"
              style={styles.deleteButton}
            >
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
      <Button
        onPress={() => setNaatKhuans([...naatKhuans, { name: '', image: null }])}
        mode="contained"
        style={styles.addButton}
      >
        Add Another Naat Khuwan
      </Button>
    </View>
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
  header: {
    marginBottom: 10,
    fontSize: 20,
    color: '#5A5A5A',
    textAlign: 'center',
  },
  naatKhuanItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: '#EAEAEA',
    color: '#333333',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
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
    fontWeight: 'bold',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#3BAFDA',
    color: '#FFFFFF',
  },
});

export default NaatKhuanComponent;
