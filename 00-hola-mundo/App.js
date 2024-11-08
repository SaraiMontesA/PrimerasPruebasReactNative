// ########################################################################
// ##### DEPENDENCIAS #####################################################
// ########################################################################

import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	TextInput
} from 'react-native';

const icon = require('./assets/icon.png');
let contador = 0;

// ########################################################################
// ##### APLICACION #######################################################
// ########################################################################

export default function App() {
	return (
		<View style={styles.container}>
			<Image source={icon}
				style={{ 
					width: 200,
					height: 100,
					resizeMode: 'contain'
				}}
			/>
			<Text style={styles.titulo}>Hello</Text>
			<Text style={styles.subtitulo}>Sign in to your account</Text>	
			<TextInput
				style={styles.input}
				placeholder="Mete tu cuenta"
			>
			</TextInput>	
			<TextInput
				style={styles.password}
				placeholder="Mete tu cuenta"
			>
			</TextInput>			
			<Button className="pepe"
				onPress={() => {
					console.log('Me estás tocando el botón!');
					contador++;
					console.log({contador});
				}}
				title={"Sumar"}
			/>
			<Text>{contador}</Text>	
			<Button
				onPress={() => {
					console.log('Me estás tocando el botón de reset!');
					contador++;
				}}
				title={"Reset"}
			/>
			<StatusBar style="auto" />
		</View>
	);
};

// ########################################################################
// ##### ESTILOS ##########################################################
// ########################################################################

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1f1f1',
		alignItems: 'center',
		justifyContent: 'center',
	},

	titulo: {
		fontSize: 80,
		fontWeight: 'bold',
		color: '#34434d',
		// backgroundColor: '#959',
	},

	subtitulo: {
		fontSize: 20,
		color: 'grey'
		// backgroundColor: '#959',
	},

	input: {
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
