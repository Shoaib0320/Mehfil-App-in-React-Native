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
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        height: 80, // You can adjust this height as needed
        textAlignVertical: 'top', // Ensures text starts at the top
    },
});

export default NoteComponent;
