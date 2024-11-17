// ####################################################################################
// ##### IMPORTS ######################################################################
// ####################################################################################

import {
	StyleSheet,
	Image,
	Platform,
	View,
	Text,
	Button,
	TouchableOpacity,
	Alert
} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// ####################################################################################
// ##### VARIABLES ####################################################################
// ####################################################################################

// ##### CARGAMOS LA VERSION #####
import { version } from './_layout';

// ##### CARGAMOS LOS COLORES #####
import { colors } from './_layout';

// ##### CARGAMOS EL IDIOMA #####
import { idio } from './_layout';

const idioma = idio.idioma;
let lenguaje;

switch (idioma) {
	case 'es':
		lenguaje = require(`@/app/lang/es.js`).lang; // Cargar dinámicamente el archivo de idioma
		break;
	case 'en':
		lenguaje = require(`@/app/lang/en.js`).lang; // Cargar dinámicamente el archivo de idioma
		break;
	default:
		lenguaje = require(`@/app/lang/es.js`).lang; // Cargar dinámicamente el archivo de idioma
		break;
}

// ####################################################################################
// ##### PANTALLA PRINCIPAL (PANTALLA EXPLORE) ########################################
// ####################################################################################

export default function TabTwoScreen() {
	// const showAlert = () => {
	// 	Alert.alert(
	// 		"Mensaje",
	// 		"Has pulsado el botón",
	// 		[
	// 		{ text: "OK", onPress: () => console.log("OK Pressed") }
	// 		],
	// 		{ cancelable: false }
	// 	);
	// };

	return (
		<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaApp}>
				{/* <ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaLogo}>
					<Image source={require('@/assets/images/MeLoPidoLogo/MeLoPidoPurple.png')} style={styles.logo} />
				</ThemedView> */}
			<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaBody}>
				
				<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaPizarra}>					
					<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaPalabra}>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>S</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>A</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>U</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>N</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>A</Text>
					</ThemedView>
					
					<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaPalabra}>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
					</ThemedView>
					
					<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaPalabra}>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
					</ThemedView>
					
					<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaPalabra}>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
					</ThemedView>
					
					<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaPalabra}>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
					</ThemedView>
					
					<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaPalabra}>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
						<Text lightColor={colors.light} darkColor={colors.dark} style={styles.letra}>X</Text>
					</ThemedView>
				</ThemedView>
				
				<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaTeclado}>
				</ThemedView>
				
				{/*

				<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaResto}>

					<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>{lenguaje.contGoogle}</Text>
						</TouchableOpacity>
					</ThemedView>

					<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
						<TouchableOpacity style={styles.button} onPress={showAlert}>
							<Text style={styles.buttonText}>{lenguaje.contApple}</Text>
						</TouchableOpacity>
					</ThemedView>
				</ThemedView> */}

			</ThemedView>
		</ThemedView>
	);
}

// ####################################################################################
// ##### ESTILOS ######################################################################
// ####################################################################################

const styles = StyleSheet.create({

	cajaApp: {
		backgroundColor: '#985858',
        flex: 1,
		flexDirection: 'column',
		height: '100%',	// Altura
		width: '100%',	// Anchura
		alignItems: 'center', // Alinea horizontalmente
		alignContent: 'center', // Alinea verticalmente
	},

	cajaBody: {
		backgroundColor: '#330033',
		flexDirection: 'column',
		height: '95%',	// Altura
		width: '100%',	// Anchura
		marginTop: '11%',
		margin: 0,
		alignItems: 'center', // Alinea horizontalmente
		alignContent: 'center', // Alinea verticalmente
		justifyContent: 'center', // Justifica
		// gap: '1%',
	},

	cajaPizarra: {
		backgroundColor: '#552255',
		flexDirection: 'column',
		height: '60%',	// Altura
		width: '100%',	// Anchura
		// marginTop: '15%',
		// margin: 0,
		alignItems: 'center', // Alinea horizontalmente
		alignContent: 'center', // Alinea verticalmente
		justifyContent: 'center', // Justifica
		gap: '1%',
	},

	cajaTeclado: {
		backgroundColor: '#115511',
		flexDirection: 'column',
		height: '40%',	// Altura
		width: '100%',	// Anchura
		// margin: 0,
		alignItems: 'center', // Alinea horizontalmente
		alignContent: 'center', // Alinea verticalmente
		justifyContent: 'center', // Justifica
		// gap: '1%',
	},

	cajaPalabra: {
		backgroundColor: '#bb00bb',
		flexDirection: 'row',
		height: '15.5%',	// Altura
		width: '95%',	// Anchura
		// margin: 5,
		gap: '1%',
		// paddingBottom: 12,
		alignItems: 'center',
		justifyContent: 'center',
		// alignContent: 'center',
	},

	letra: {
		height: '100%',	// Altura
		width: '19%',	// Anchura
		backgroundColor: '#abcdef',
		textAlign: 'center',
		//flexDirection: 'row',
		textAlignVertical: 'center',
		// alignItems: 'center', // Centra los elementos hijos horizontalmente.
		// justifyContent: 'center', //  Centra los elementos hijos verticalmente.
		//paddingTop: 20,
		// TODO: Poner color de light y dark mode
        color: '#333333',
		// Texto en negrita
		fontWeight: 'bold',
        fontSize: 45,
		padding: 0,
	},

	// logo: {
	// 	// backgroundColor: '#985858',
	// 	// paddingTop: 20,
	// 	marginTop: '15%',
	// 	height: '40%', // Altura
	// 	width: '55%', // Anchura
	// },

	// inputText: {
	// 	// backgroundColor: '#985858',
	// 	borderColor: '#f0f0f0',
	// 	borderWidth: 2,
	// 	height: 50,
	// 	width: '80%',
	// 	borderRadius: 15,
	// 	paddingLeft: 15,
	// 	paddingRight: 15,
	// },

    // button: {
	// 	// backgroundColor: '#985858',
    //     backgroundColor: '#f0f0f0',
    //     height: 50,
    //     width: '80%',
    //     borderRadius: 15,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
	
    // buttonText: {
	// 	// backgroundColor: '#985858',
	// 	// TODO: Poner color de light y dark mode
    //     color: '#333333',
	// 	// Texto en negrita
	// 	fontWeight: 'bold',
    //     fontSize: 18,
    // },
	
    // text: {
	// 	// backgroundColor: '#985858',
	// 	// TODO: Poner color de light y dark mode
    //     color: '#333333',
    //     fontSize: 18,
    // },
});
