// ########################################################################
// ##### DEPENDENCIAS #####################################################
// ########################################################################

// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
	Text,
	View,
	Image,
	Button,
	TextInput,
	TouchableOpacity,
} from 'react-native';

// ########################################################################
// ##### APLICACION #######################################################
// ########################################################################

	const cambiaDisplay = (numero, display, setText) => {
		if (display === '0') {
			setText(numero);
		}
		else {
			setText(display + numero);
		}	
	};

	const botonPulsado = (botonPulsado, display, setText) => {
			cambiaDisplay(botonPulsado, display, setText);
	};

export const Calculadora = () => {
    const [display, setDisplay] = useState('0');

	const setText = (textoRecibido) => {
		setDisplay(textoRecibido);
	};

	return (
		<View style={styles.container}>


			{/* <View style={styles.cajaHorizontal}>
				<Text style={styles.titulo}>Texto</Text>
			</View> */}

			<View style={styles.cajaTexto}>
				<Text style={styles.titulo}>{display}</Text>
			</View>

			<View style={styles.cajaHorizontal}>
				<TouchableOpacity style={styles.button} onPress={() => botonPulsado('C', display, setText)}>
					<Text style={styles.buttonTextNumero}>C</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => console.log('()')}>
					<Text style={styles.buttonTextNumero}>( )</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => console.log('%')}>
					<Text style={styles.buttonTextNumero}>%</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => console.log('/')}>
					<Text style={styles.buttonTextSigno}>/</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cajaHorizontal}>
				<TouchableOpacity style={styles.button} onPress={() => botonPulsado('7', display, setText)}>
                    <Text style={styles.buttonTextNumero}>7</Text>
                </TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => botonPulsado('8', display, setText)}>
					<Text style={styles.buttonTextNumero}>8</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => botonPulsado('9', display, setText)}>
					<Text style={styles.buttonTextNumero}>9</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => console.log('X', display, setText)}>
					<Text style={styles.buttonTextSigno}>x</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cajaHorizontal}>
				<TouchableOpacity style={styles.button} onPress={() => botonPulsado('4', display, setText)}>
					<Text style={styles.buttonTextNumero}>4</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => botonPulsado('5', display, setText)}>
					<Text style={styles.buttonTextNumero}>5</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => botonPulsado('6', display, setText)}>
					<Text style={styles.buttonTextNumero}>6</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => console.log('-')}>
					<Text style={styles.buttonTextSigno}>-</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cajaHorizontal}>
				<TouchableOpacity style={styles.button} onPress={() => botonPulsado('1', display, setText)}>
					<Text style={styles.buttonTextNumero}>1</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => botonPulsado('2', display, setText)}>
					<Text style={styles.buttonTextNumero}>2</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => botonPulsado('3', display, setText)}>
					<Text style={styles.buttonTextNumero}>3</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => console.log('+')}>
					<Text style={styles.buttonTextSigno}>+</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cajaHorizontal}>
				<TouchableOpacity style={styles.button} onPress={() => console.log('+/-')}>
					<Text style={styles.buttonTextNumero}>+/-</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => botonPulsado('0', display)}>
					<Text style={styles.buttonTextNumero}>0</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => console.log(',')}>
					<Text style={styles.buttonTextNumero}>,</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => console.log('=')}>
					<Text style={styles.buttonTextSigno}>=</Text>
				</TouchableOpacity>
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
		backgroundColor: '#000000',
		alignItems: 'center',
		justifyContent: 'center',
	},

	cajaHorizontal: {
		flexDirection: 'row',
		width: '80%',
	},

	cajaTexto: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		width: '80%',
		marginBottom: 50,
	},

	titulo: {
		fontSize: 60,
		fontWeight: 'bold',
		color: '#ffffff',
		// backgroundColor: '#959',
	},

	button: {
		height: 70,
		width: 70,
		margin: 10,
		// centrar el contenido verticalmente
		justifyContent: 'center',
		// alinear el contenido horizontalmente
		alignItems: 'center',
		backgroundColor: '#2e2e2e',
		borderRadius: 50,
		opacity: 0.7,
	},

	buttonTextNumero: {
		fontSize: 26,
		color: '#fff',
	},

	buttonTextSigno: {
		fontSize: 28,
		// letra negrita
		fontWeight: 'bold',
		color: '#fff',
	},
});
