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

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

// ####################################################################################
// ##### PANTALLA PRINCIPAL (PANTALLA EXPLORE) ########################################
// ####################################################################################

export const colors = {
    light: '#dddddd',
    dark: '#353636',
};

export default function TabTwoScreen() {
	return (
				
	<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaBody}>

		<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaLogo}>
            <Image source={require('@/assets/images/MeLoPidoLogo/MeLoPidoPurple.png')} style={styles.logo} />
        </ThemedView>

		<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
			<ThemedText type="title">Crea una cuenta</ThemedText>
		</ThemedView>

		<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
			<ThemedText style={styles.cajaContenido}>Ingresa tu email para iniciar sesión</ThemedText>
		</ThemedView>

		<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
			<TextInput style={styles.inputText} placeholder='Email'></TextInput>
		</ThemedView>

		<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
			<ThemedText style={styles.cajaContenido}>------------------------------ o ------------------------------</ThemedText>
		</ThemedView>

		<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Continua con Google</Text>
			</TouchableOpacity>
		</ThemedView>

		<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Continua con Apple</Text>
			</TouchableOpacity>
		</ThemedView>

	</ThemedView>
	);
}

// ####################################################################################
// ##### ESTILOS ######################################################################
// ####################################################################################

const styles = StyleSheet.create({

	cajaBody: {
		flexDirection: 'column',
		height: '100%',	// Altura
		width: '100%',	// Anchura
	},

	cajaLogo: {
		flexDirection: 'column',
		// top: 60,
		height: '50%',	// Altura
		width: '100%',	// Anchura
		alignItems: 'center', // Alinea horizontalmente
		alignContent: 'center', // Alinea verticalmente
		justifyContent: 'flex-end', // Justifica
	},

	logo: {
		height: '35%', // Altura
		width: '60%', // Anchura
		margin: 50,
	},

	cajaContenido: {
		flexDirection: 'column',
		margin: 0,
		padding: 6,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
        // backgroundColor: '#f8f0f2',
	},

	inputText: {
		borderColor: '#f0f0f0',
		borderWidth: 2,
		height: 50,
		width: '80%',
		borderRadius: 15,
	},

    button: {
        // borderColor: 'black',
        // borderWidth: 1,
        height: 50,
        width: '80%',
        borderRadius: 15,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
		// Texto en negrita
		fontWeight: 'bold',
        fontSize: 18,
    },
});
