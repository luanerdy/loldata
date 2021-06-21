import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import ChampionContext from '../../../contexts/ChampionContext';
import ChampionDataContext from '../../../contexts/ChampionDataContext';
import championLoreStyles from './styles';

const ChampionLore = () => {
	const { champion, setChampion } = useContext(ChampionContext);
	const { championData, setChampionData } = useContext(ChampionDataContext);

    useEffect(() => {
        axios.get(`http://ddragon.leagueoflegends.com/cdn/11.12.1/data/pt_BR/champion/${champion}.json`)
        .then(res => {
            const data = {
                lore: res.data.data[champion].lore,
                stats: res.data.data[champion].stats,
                spells: res.data.data[champion].spells
            };
            setChampionData(data);
        }).catch(err => {
          console.log(err);
        });
    }, [champion]);

    const goback = () => {
        setChampion('');
        setChampionData(null);
    };

	return (
		<View style={championLoreStyles.layout}>
			<StatusBar backgroundColor="black" style="light" />

			<ImageBackground
				style={championLoreStyles.background}
				source={{
					uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`,
				}}
			>
				<Pressable
					style={championLoreStyles.goback}
					onPress={goback}
				>
					<Text style={championLoreStyles.text}>Voltar</Text>
				</Pressable>
				<View style={championLoreStyles.container}>
					<Text style={championLoreStyles.text}>{championData ? championData.lore : "Carregando"}</Text>
				</View>
			</ImageBackground>
		</View>
	);
};

export default ChampionLore;
