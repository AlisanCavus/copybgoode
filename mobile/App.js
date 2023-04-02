import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Copy B. Goode</Text>
      <StatusBar style='auto' />
      <View style={styles.view} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  view: { width: 200, height: 200, backgroundColor: 'red', borderRadius: 100 },
});
