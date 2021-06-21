import React, { useContext } from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import ChampionContext from '../../../contexts/ChampionContext';
import championStyles from './styles';

const Champion = ({ champion }) => {
	const { champion: currentChampion, setChampion } =
		useContext(ChampionContext);

	if (champion.empty)
		return (
			<View style={championStyles.containerNull}>
				<Image style={championStyles.imageNull} />
			</View>
		);

	return (
		<Pressable onPress={() => setChampion(champion.id)}>
			<View style={championStyles.container}>
				<Image
					style={championStyles.image}
					source={{
						uri: `http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/${champion.image.full}`,
					}}
				/>
				<Text style={championStyles.text}>{champion.name}</Text>
			</View>
		</Pressable>
	);
};

export default Champion;
