import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

const championsStyles = StyleSheet.create({
	container: {
        backgroundColor: 'dimgray',
		alignItems: 'center',
		overflow: 'scroll',
		paddingTop: StatusBar.currentHeight,
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
	status: {
		height: 30,
		backgroundColor: 'blue'
	}
});

export default championsStyles;
