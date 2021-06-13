import React from 'react';
import { Text, Image, View } from 'react-native';
import championStyles from './styles';

const Champion = ({ champion }) => {
	if (champion.empty)
		return (
			<View style={championStyles.containerNull}>
				<Image style={championStyles.imageNull} />
			</View>
		);

	return (
		<View style={championStyles.container}>
			<Image
				style={championStyles.image}
				source={{
					uri: `http://ddragon.leagueoflegends.com/cdn/11.12.1/img/champion/${champion.image.full}`,
				}}
			/>
			<Text style={championStyles.text}>{champion.name}</Text>
		</View>
	);
};

export default Champion;
