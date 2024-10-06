// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';

// const NaatKhuanComponent = ({ naatKhuans, setNaatKhuans, selectNaatKhuanImage }) => {
//   return (
//     <View>
//       <Text style={{ margin: 10 }}>نعت خواں:</Text>
//       {naatKhuans.map((naatKhuan, index) => (
//         <View key={index} style={{ marginBottom: 10 }}>
//           <TextInput
//             value={naatKhuan.name}
//             onChangeText={(text) => {
//               const updatedNaatKhuans = [...naatKhuans];
//               updatedNaatKhuans[index].name = text;
//               setNaatKhuans(updatedNaatKhuans);
//             }}
//             placeholder={`Naat Khuwan ${index + 1} Name`}
//           />
//           <Button onPress={() => selectNaatKhuanImage(index)} mode="contained" style={{ marginTop: 10 }}>
//             {`Select Naat Khuwan ${index + 1} Image`}
//           </Button>
//           {naatKhuan.image && <Image source={{ uri: naatKhuan.image }} style={{ width: 100, height: 100 }} />}
//         </View>
//       ))}
//       <Button onPress={() => setNaatKhuans([...naatKhuans, { name: '', image: null }])} mode="contained">
//         Add Another Naat Khuwan
//       </Button>
//     </View>
//   );
// };

// export default NaatKhuanComponent;







import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
            theme={{ colors: { primary: '#FFD700' } }} // Golden primary color for label
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
  naatKhuanItem: {
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
  addButton: {
    marginTop: 20,
  },
});

export default NaatKhuanComponent;
