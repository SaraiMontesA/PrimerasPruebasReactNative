// ########################
// ##### DEPENDENCIAS #####
// ########################

import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button
} from 'react-native';

const icon = require('./assets/icon.png');

// ########################
// ###### APLICACION ######
// ########################

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
			<Text>Hola mundo!</Text>
			<Button
				onPress={() => {
					console.log('Me estás tocando el botón!');
				}}
				title="Press Me"
			/>
			<Text>Hola mundo!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

// ########################
// ####### ESTILOS ########
// ########################

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#880',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
