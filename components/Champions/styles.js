import { StyleSheet } from 'react-native';

const championsStyles = StyleSheet.create({
	container: {
        backgroundColor: 'dimgray',
		alignItems: 'center',
		overflow: 'scroll',
	},
	text: {
		marginTop: 35,
		marginBottom: 5,
		fontSize: 30,
		color: 'white',
		fontWeight: "700",
		textAlign: 'center',
		width: 300
	},
	list: {
		width: '100%',
		backgroundColor: 'dimgray',
		paddingBottom: 10,
	},
});

export default championsStyles;
