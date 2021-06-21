import React from 'react';
import ChampionTabsStyles from './styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChampionLore from './ChampionLore';
import MyTabBar from './MyTabBar';

const ChampionTabs = () => {
	const BottomTabs = createBottomTabNavigator();

	return (
        <BottomTabs.Navigator tabBar={props => <MyTabBar {...props} />} >
            <BottomTabs.Screen name="Lore" component={ChampionLore}  />
            <BottomTabs.Screen name="Base" component={ChampionLore}  />
            <BottomTabs.Screen name="Spells" component={ChampionLore}  />
        </BottomTabs.Navigator>
    );
};

export default ChampionTabs;
