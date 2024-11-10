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

export const Calculadora = () => {
	return (
		<View style={styles.container}>

			<Text style={styles.titulo}>Texto</Text>

			<View style={styles.cajaHorizontal}>
				<Button style={styles.button}
					onPress={() => {
						console.log('C');
					}}
					title={"C"}
				/> 
				<Button style={styles.button}
					onPress={() => {
						console.log('()');
					}}
					title={"()"}
				/> 
				<Button style={styles.button}
					onPress={() => {
						console.log('%');
					}}
					title={"%"}
				/> 
				<Button style={styles.button}
					onPress={() => {
						console.log('/');
					}}
					title={"/"}
				/> 
			</View>
			
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

	cajaHorizontal: {
		flexDirection: 'row',
	},

	titulo: {
		fontSize: 60,
		fontWeight: 'bold',
		color: '#c9fffc',
		padding: 20,
		// backgroundColor: '#959',
	},

	button: {
		fontSize: 20,
		padding: 20,
		backgroundColor: '#d9fffc',
	}
});
