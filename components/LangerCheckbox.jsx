import React from 'react';
import { View, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const LangerCheckbox = ({ isLangerChecked, setIsLangerChecked }) => {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        isChecked={isLangerChecked}
        text="Include Langer Information"
        onPress={(isChecked) => setIsLangerChecked(isChecked)}
        fillColor="green"
        style={styles.checkbox}
        textStyle={styles.checkboxText} // Style for the checkbox text
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#A0A0A0', // Lighter gray border for contrast
    backgroundColor: '#FFFFFF', // Light background for contrast
    borderRadius: 10,
    shadowColor: '#A0A0A0', // Lighter shadow color
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
},
checkbox: {
    // Style for the BouncyCheckbox
    marginVertical: 10,
},
checkboxText: {
    color: '#333333', // Darker text color for better readability
    fontSize: 16, // Increase font size for better readability
},

});

export default LangerCheckbox;
