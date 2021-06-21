import { StyleSheet } from "react-native";

const championLoreStyles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'dimgray',
    },
    background: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center'
    },
    goback: {
        position: 'absolute',
        elevation: 12,
        top: 50,
        left: 20,
        backgroundColor: 'dimgray',
        padding: 5,
        borderRadius: 5
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: "justify",
        fontSize: 17
    },
    container: {
        width: '90%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 20,
        borderRadius: 20,
    }
});

export default championLoreStyles;
