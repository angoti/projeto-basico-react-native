import React from 'react';
import { View, TextInput, Button } from 'react-native';

const Componente = () => {
  return (
    <View>
      <Text>Alô</Text>
      <TextInput />
      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Componente;
