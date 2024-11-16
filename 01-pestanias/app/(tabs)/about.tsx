// ####################################################################################
// ##### IMPORTS ######################################################################
// ####################################################################################

import {
	StyleSheet,
	Image,
} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// ####################################################################################
// ##### VARIABLES ####################################################################
// ####################################################################################

import { version } from './_layout';
import { colors } from './_layout';

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
				<ThemedText type="title">Versión:</ThemedText>
				<ThemedText type="title">{version.ver}</ThemedText>
			</ThemedView>

			<ThemedView lightColor={colors.light} darkColor={colors.dark} style={styles.cajaContenido}>
				<ThemedText style={styles.text}>Samon Software</ThemedText>
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
		backgroundColor: '#985858',
		flexDirection: 'column',
		height: '65%',	// Altura
		width: '100%',	// Anchura
		margin: 0,
		alignItems: 'center', // Alinea horizontalmente
		alignContent: 'center', // Alinea verticalmente
		justifyContent: 'center', // Justifica
	},

	cajaContenido: {
		// backgroundColor: '#f8f0f2',
		flexDirection: 'column',
		height: '50%',	// Altura
		width: '100%',	// Anchura
		margin: 0,
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
	
    text: {
		// backgroundColor: '#985858',
		// TODO: Poner color de light y dark mode
        color: '#333333',
        fontSize: 18,
    },
});