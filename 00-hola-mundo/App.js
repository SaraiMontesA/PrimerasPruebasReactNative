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

// ########################################################################
// ##### VARIABLES ########################################################
// ########################################################################

const icon = require('./assets/icon.png');
let contador = 0;

// ########################################################################
// ##### APLICACION #######################################################
// ########################################################################

export default function App() {
	return (
		<View style={styles.container}>
			{/* <Image source={icon}
				style={{ 
					width: 200,
					height: 100,
					resizeMode: 'contain'
				}}
			/> */}
			<Text style={styles.titulo}>ME LO PIDO</Text>
			<Text style={styles.titulo}>I WANT THIS</Text>
			{/* <Text style={styles.subtitulo}>Introduce tu cuenta</Text> */}
			<TextInput
				style={styles.input}
				placeholder="Usuario"
			>
			</TextInput>	
			<TextInput
				style={styles.password}
				placeholder="Contraseña"
			>
			</TextInput>
			<Text style={styles.subtitulo}>¿No tienes cuenta? regístrate</Text>	

			{/* <Button className="pepe"
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
					console.log('Reseteando');
					contador = 0;
				}}
				title={"Reset"}
			/> */}
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
