import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import Champion from './Champion';
import championsStyles from './styles';

const Champions = () => {
	const [champions, setChampions] = useState([]);
	const columns = 3;

	useEffect(() => {
		axios
			.get(
				'http://ddragon.leagueoflegends.com/cdn/11.12.1/data/pt_BR/champion.json'
			)
			.then((res) => {
				let newChampions = [];
				for (let key in res.data.data) {
					newChampions.push(res.data.data[key]);
				}
				setChampions(newChampions);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function createRows(data, columns) {
		const rows = Math.floor(data.length / columns);
		let lastRowElements = data.length - rows * columns;
		while (lastRowElements !== columns) {
			data.push({
				id: `empty-${lastRowElements}`,
				name: `empty-${lastRowElements}`,
				empty: true,
			});
			lastRowElements += 1;
		}
		return data;
	}

	return (
		<SafeAreaView style={championsStyles.container}>
            <StatusBar backgroundColor='dimgray' style='light' />
            <Text style={championsStyles.text}>Escolha um campeão para ver os dados</Text>
			<FlatList
            contentContainerStyle={{
                alignItems: 'center'
            }}
            style={championsStyles.list}
				showsVerticalScrollIndicator={false}
				data={createRows(champions, columns)}
				renderItem={({ item, index }) => (
					<Champion key={index} champion={item} />
				)}
				keyExtractor={(item) => item.id}
				numColumns={columns}
			/>
		</SafeAreaView>
	);
};

export default Champions;
