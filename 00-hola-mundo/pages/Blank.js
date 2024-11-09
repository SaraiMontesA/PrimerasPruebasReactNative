// ########################################################################
// ##### DEPENDENCIAS #####################################################
// ########################################################################

// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {
	Text,
	View,
	Image,
	Button,
	TextInput
} from 'react-native';



// ########################################################################
// ##### APLICACION #######################################################
// ########################################################################

export const Blank = () => {
	return (
		<View style={styles.container}>

			<Text style={styles.titulo}>I WANT THIS</Text>
			
		</View>
	);
};

// ########################################################################
// ##### ESTILOS ##########################################################
// ########################################################################

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: '#1ba89f',
		alignItems: 'center',
		justifyContent: 'center',
	},

	titulo: {
		fontSize: 60,
		fontWeight: 'bold',
		color: '#c9fffc',
		padding: 20,
		// backgroundColor: '#959',
	},

	subtitulo: {
		fontSize: 20,
		color: '#c9fffc',
		padding: 20,
		// backgroundColor: '#959',
	},

	button: {
		fontSize: 20,
		color: '#c9fffc',
		// backgroundColor: '#959',
	},

	text: {
		fontSize: 20,
		color: '#c9fffc',
		// backgroundColor: '#959',
	},

	input: {
		fontSize: 18,
		color: '#15857d',
		borderRadius: 30,
		// borderWidth: 1,
		paddingStart: 25,
		width: '80%',
		height: 50,
		padding: 10,
		marginTop: 20,
		backgroundColor: '#fff',
		shadowColor: 'grey',
	},

	password: {
		fontSize: 18,
		color: '#15857d',
		borderRadius: 30,
		// borderWidth: 1,
		paddingStart: 25,
		width: '80%',
		height: 50,
		padding: 10,
		marginTop: 20,
		backgroundColor: '#fff',
		shadowColor: 'grey',
	},
});
