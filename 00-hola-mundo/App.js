// ########################################################################
// ##### DEPENDENCIAS #####################################################
// ########################################################################

import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button
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
			<Text style={styles.pepe}>Hola mundo!</Text>			
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
		backgroundColor: '#880',
		alignItems: 'center',
		justifyContent: 'center',
	},

	pepe: {
		fontSize: 40,
		backgroundColor: '#950',
	},
});
