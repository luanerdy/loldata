import React from 'react';
import { Pressable, View } from 'react-native';
import tabStyles from './styles';

const MyTabBar = ({ navigation }) => {
	return (
		<View style={tabStyles.bar}>
			<Pressable
				onPress={() => {
					navigation.navigate('Lore');
				}}
			></Pressable>
			<Pressable
				onPress={() => {
					navigation.navigate('Base');
				}}
			></Pressable>
			<Pressable
				onPress={() => {
					navigation.navigate('Spells');
				}}
			></Pressable>
		</View>
	);
};

export default MyTabBar;
