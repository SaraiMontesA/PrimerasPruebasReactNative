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

	// const botonPulsado = (botonPulsado, display, setText) => {
	// 		cambiaDisplay(botonPulsado, display, setText);
	// };

	let numero1 = 0;
	let numero2 = 0;
	let operacion = 'vacio';

	const cambiaDisplay = (botonPulsado, display, setText) => {

		console.log('');
		console.log('#################################################################');
		console.log('##### CONTROL SISTEM ANTES DE HACER NADA ########################');
		console.log('#################################################################');
		console.log('');
		console.log('botonPulsado:', botonPulsado);
		console.log('display:', display);
		console.log('numero1:', numero1);
		console.log('numero2:', numero2);
		console.log('operacion:', operacion);

		// Signos especiales
		if (botonPulsado === 'C') {
			setText('0');
			numero1 = 0;
			numero2 = 0;
			operacion = 'vacio';
		}
		else if (botonPulsado === '()') {
			console.log('botonPulsado:', botonPulsado);
		}
		else if (botonPulsado === '%') {
			console.log('botonPulsado:', botonPulsado);
		}
		else if (botonPulsado === '+/-') {
			console.log('botonPulsado:', botonPulsado);
		}
		else if (botonPulsado === '.') {
			console.log('botonPulsado:', botonPulsado);
		}

		// Signos matemáticos
		else if (botonPulsado === '+') {
			// if (numero1 === 0) {
			// 	// Si no hay numero en la variable numero1
			// }
			// else {
			// 	// Sumamos lo que hay en numero 1 con lo que hay en el display y lo guardamos en numero1
			// 	numero1 = numero1 + parseFloat(display);
			// 	// Ponemos el resultado de la suma en el display
			// 	setText(numero1.toString());
			// }
			// Guardamos el número del display en la variable numero1
			numero1 = parseFloat(display);
			// Guardamos el signo de la operación en la variable operacion
			operacion = '+';
			// Vaciamos el display
			setText('');
		}

		else if (botonPulsado === '=') {
			if (numero1 === 0) {
				numero1 = 'Error';
			}
			else {
				numero2 = parseFloat(display);
				let resultado = 0;
				switch (operacion) {
					case 'vacio':
						resultado = 'Error';
					case '+':
						resultado = numero1 + numero2;
						break;
					case '-':
						resultado = numero1 - numero2;
						break;
					case 'x':
						resultado = numero1 * numero2;
						break;
					case '/':
						resultado = numero1 / numero2;
						break;
				}
				setText(resultado.toString());
				numero1 =  0;
				numero2 = 0;
				operacion = 'vacio';
				resultado = 0;
			}
		}


		// Casos numéricos
		else if (botonPulsado === '0' || botonPulsado === '1' || botonPulsado === '2' || botonPulsado === '3' ||
			botonPulsado === '4' || botonPulsado === '5' || botonPulsado === '6' || botonPulsado === '7' ||
			botonPulsado === '8' || botonPulsado === '9') {
			if (display === '0') {
				setText(botonPulsado);
			}
			else {
				setText(display + botonPulsado);
			}
		}


		console.log('');
		console.log('#################################################################');
		console.log('##### CONTROL SISTEM DESPUES DE HACER ###########################');
		console.log('#################################################################');
		console.log('');
		console.log('botonPulsado:', botonPulsado);
		console.log('display:', display);
		console.log('numero1:', numero1);
		console.log('numero2:', numero2);
		console.log('operacion:', operacion);
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
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('C', display, setText)}>
					<Text style={styles.buttonTextNumero}>C</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => console.log('()')}>
					<Text style={styles.buttonTextNumero}>( )</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('%', display, setText)}>
					<Text style={styles.buttonTextNumero}>%</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('/', display, setText)}>
					<Text style={styles.buttonTextSigno}>/</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cajaHorizontal}>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('7', display, setText)}>
                    <Text style={styles.buttonTextNumero}>7</Text>
                </TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('8', display, setText)}>
					<Text style={styles.buttonTextNumero}>8</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('9', display, setText)}>
					<Text style={styles.buttonTextNumero}>9</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('x', display, setText)}>
					<Text style={styles.buttonTextSigno}>x</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cajaHorizontal}>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('4', display, setText)}>
					<Text style={styles.buttonTextNumero}>4</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('5', display, setText)}>
					<Text style={styles.buttonTextNumero}>5</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('6', display, setText)}>
					<Text style={styles.buttonTextNumero}>6</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('-', display, setText)}>
					<Text style={styles.buttonTextSigno}>-</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cajaHorizontal}>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('1', display, setText)}>
					<Text style={styles.buttonTextNumero}>1</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('2', display, setText)}>
					<Text style={styles.buttonTextNumero}>2</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('3', display, setText)}>
					<Text style={styles.buttonTextNumero}>3</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('+', display, setText)}>
					<Text style={styles.buttonTextSigno}>+</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cajaHorizontal}>
				<TouchableOpacity style={styles.button} onPress={() => console.log('+/-')}>
					<Text style={styles.buttonTextNumero}>+/-</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('0', display)}>
					<Text style={styles.buttonTextNumero}>0</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('.', display, setText)}>
					<Text style={styles.buttonTextNumero}>.</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => cambiaDisplay('=', display, setText)}>
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
		fontSize: 50,
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
