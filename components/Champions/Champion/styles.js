import { StyleSheet } from 'react-native';

const championStyles = StyleSheet.create({
	container: {
		borderRadius: 10,
		margin: 3,
		alignItems: 'center',
		padding: 5,
		backgroundColor: 'black',
	},
	image: {
		borderRadius: 5,
		width: 100,
		height: 100,
	},
	text: {
		color: 'white',
		fontWeight: '700',
	},
	containerNull: {
		borderRadius: 5,
		margin: 3,
		alignItems: 'center',
		padding: 5,
		backgroundColor: 'dimgray',
	},
	imageNull: {
		borderRadius: 5,
		width: 100,
		height: 100,
	},
});

export default championStyles;
