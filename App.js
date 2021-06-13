import React from 'react';
import { View, StyleSheet } from 'react-native';
import Champions from './components/Champions';

export default function App() {
	return (
		<View style={appStyles.container}>
			<Champions />
		</View>
	);
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dimgray'
  }
});
