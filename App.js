import React, { useState } from 'react';
import Champions from './components/Champions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChampionTabs from './components/ChampionTabs';
import ChampionContext from './contexts/ChampionContext';
import ChampionDataContext from './contexts/ChampionDataContext';

export default function App() {
	const Stack = createStackNavigator();
	const [champion, setChampion] = useState('');
	const [championData, setChampionData] = useState(null);

	return (
		<NavigationContainer>
			<ChampionContext.Provider value={{ champion, setChampion }}>
			<ChampionDataContext.Provider value={{ championData, setChampionData }}>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					{!champion ? (
						<Stack.Screen name="Champions" component={Champions} />
					) : (
						<Stack.Screen name="Tabs" component={ChampionTabs} />
					)}
				</Stack.Navigator>
			</ChampionDataContext.Provider>
			</ChampionContext.Provider>
		</NavigationContainer>
	);
}
