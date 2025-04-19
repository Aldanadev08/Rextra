import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Add({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla Add</Text>
      <Button title="Volver a Home" onPress={() => navigation.goBack()} />
    </View>
  );
}
