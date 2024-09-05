import React, { useState } from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Hello World</Text>
      <Text>Platform: {Platform.OS}</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          value={text}
          placeholder="Write some text"
          onChangeText={setText}
          style={styles.input}
        />
        <Button title="Press Me" onPress={() => console.log("Button Pressed!")} />
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => console.log("Touchable Pressed!")}
        >
          <Text>Click Me Too</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  touchable: {
    padding: 10,
    backgroundColor: 'pink',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
