import React from 'react';
import { TextInput } from 'react-native-paper';

const TimeComponent = ({ time, setTime }) => (
  <TextInput
    label="Time"
    value={time}
    onChangeText={setTime}
    style={{ margin: 10 }}
  />
);

export default TimeComponent;
