import React from 'react';
import { TextInput } from 'react-native-paper';

const DayComponent = ({ day, setDay }) => (
  <TextInput
    label="Day"
    value={day}
    onChangeText={setDay}
    style={{ margin: 10 }}
  />
);

export default DayComponent;
