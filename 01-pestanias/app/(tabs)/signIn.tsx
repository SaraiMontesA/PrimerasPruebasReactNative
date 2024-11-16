// ####################################################################################
// ##### IMPORTS ######################################################################
// ####################################################################################

import {
	StyleSheet,
	Image,
	Platform,
	View,
	TextInput,
	Text,
	Button,
	TouchableOpacity
} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

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
	return (
				
	<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaBody}>

		<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaLogo}>
			<Image source={require('@/assets/images/MeLoPidoLogo/MeLoPidoPurple.png')} style={styles.logo} />
		</ThemedView>

		<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaResto}>

			<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
				<ThemedText type="title">{lenguaje.createAccount}</ThemedText>
			</ThemedView>

			<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
				<ThemedText style={styles.text}>{lenguaje.signIn}</ThemedText>
			</ThemedView>

			<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
				<TextInput style={styles.inputText} placeholder='Email'></TextInput>
			</ThemedView>

			<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
				<ThemedText style={styles.text}>------------------------------ o ------------------------------</ThemedText>
			</ThemedView>

			<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>{lenguaje.contGoogle}</Text>
				</TouchableOpacity>
			</ThemedView>

			<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>{lenguaje.contApple}</Text>
				</TouchableOpacity>
			</ThemedView>
		</ThemedView>

	</ThemedView>
	);
}

// ####################################################################################
// ##### ESTILOS ######################################################################
// ####################################################################################

const styles = StyleSheet.create({

	cajaBody: {
		// backgroundColor: '#985858',
		flexDirection: 'column',
		height: '100%',	// Altura
		width: '100%',	// Anchura
	},

	cajaLogo: {
		// backgroundColor: '#985858',
		flexDirection: 'column',
		marginTop: 0,
		// marginBottom: 0,
		// paddingBottom: 0,
		height: '35%',	// Altura
		width: '100%',	// Anchura
		alignItems: 'center', // Alinea horizontalmente
		alignContent: 'center', // Alinea verticalmente
		justifyContent: 'center', // Justifica
	},

	cajaResto: {
		// backgroundColor: '#985858',
		flexDirection: 'column',
		height: '65%',	// Altura
		width: '100%',	// Anchura
		margin: 0,
		alignItems: 'center', // Alinea horizontalmente
		alignContent: 'center', // Alinea verticalmente
		justifyContent: 'center', // Justifica
		gap: 10,
	},

	cajaContenido: {
		// backgroundColor: '#f8f0f2',
		flexDirection: 'column',
		width: '100%',	// Anchura
		margin: 0,
		paddingBottom: 12,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
	},

	logo: {
		// backgroundColor: '#985858',
		// paddingTop: 20,
		marginTop: '15%',
		height: '40%', // Altura
		width: '55%', // Anchura
	},

	inputText: {
		// backgroundColor: '#985858',
		borderColor: '#f0f0f0',
		borderWidth: 2,
		height: 50,
		width: '80%',
		borderRadius: 15,
		paddingLeft: 15,
		paddingRight: 15,
	},

    button: {
		// backgroundColor: '#985858',
        backgroundColor: '#f0f0f0',
        height: 50,
        width: '80%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
	
    buttonText: {
		// backgroundColor: '#985858',
		// TODO: Poner color de light y dark mode
        color: '#333333',
		// Texto en negrita
		fontWeight: 'bold',
        fontSize: 18,
    },
	
    text: {
		// backgroundColor: '#985858',
		// TODO: Poner color de light y dark mode
        color: '#333333',
        fontSize: 18,
    },
});
