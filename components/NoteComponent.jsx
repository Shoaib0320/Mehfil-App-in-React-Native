import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const NoteComponent = ({ notes, setNotes }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Add Notes:</Text>
            <TextInput
                style={styles.input}
                multiline
                numberOfLines={4}
                value={notes}
                onChangeText={setNotes}
                placeholder="Enter your notes here..."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff', // Lightened text color for the label
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa', // Lighter border color
        borderRadius: 5,
        padding: 10,
        height: 80, // You can adjust this height as needed
        textAlignVertical: 'top', // Ensures text starts at the top
        backgroundColor: '#f9f9f9', // Light background color for the input
        color: '#555', // Lightened text color for the label

    },
});

export default NoteComponent;
