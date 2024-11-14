// ####################################################################################
// ##### IMPORTS ######################################################################
// ####################################################################################

import { StyleSheet, Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

// ####################################################################################
// ##### PANTALLA PRINCIPAL (PANTALLA EXPLORE) ########################################
// ####################################################################################

export default function TabTwoScreen() {
	return (

	<ThemedView style={{ light: '#D0D0D0', dark: '#353636' }}>

		{/* <ParallaxScrollView
		headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
		headerImage={
			// <IconSymbol
			// size={310}
			// color="#808080"
			// name="chevron.left.forwardslash.chevron.right"
			// style={styles.headerImage}
			// />
			<Image source={require('@/assets/images/MeLoPidoLogo/MeLoPidoGreen.png')} style={ styles.meLoPidoLogo } />
		}> */}

        <ThemedView style={styles.cajaLogo}>
            <Image source={require('@/assets/images/MeLoPidoLogo/MeLoPidoPurple.png')} style={styles.meLoPidoLogo} />
        </ThemedView>

		{/* <ThemedView style={styles.cajaLogo}>
			<Image source={require('@/assets/images/MeLoPidoLogo/MeLoPidoPurple.png')} style={ styles.meLoPidoLogo } />
		</ThemedView> */}

		<ThemedView style={styles.titleContainer}>
			<ThemedText type="title">Cosas a implementar</ThemedText>
		</ThemedView>

		<Collapsible title="Android, iOS, and web support">					
			<ThemedText> · Cosa 1</ThemedText>
			<ThemedText> · Cosa 2</ThemedText>
			<ThemedText> · Cosa 3</ThemedText>
			<ThemedText> · Cosa 4</ThemedText>
		</Collapsible>

		<Collapsible title="Front End">
			<Collapsible title="Pestaña Lista de deseos">		
				<ThemedText> · Cosa 1</ThemedText>
				<ThemedText> · Cosa 2</ThemedText>
				<ThemedText> · Cosa 3</ThemedText>
				<ThemedText> · Cosa 4</ThemedText>
			</Collapsible>
			<Collapsible title="Pestaña Contactos">		
				<ThemedText> · ListView con listado de amigos, enlace a sus listas</ThemedText>
				<ThemedText> · Cosa 2</ThemedText>
				<ThemedText> · Cosa 3</ThemedText>
				<ThemedText> · Cosa 4</ThemedText>
			</Collapsible>
			<Collapsible title="Pestaña Contactos Detalle">		
				<ThemedText> · ListView con listado de deseos del contacto elegido (enlaces ciegos)</ThemedText>
			</Collapsible>
			<Collapsible title="Pestaña Datos de usuario">		
				<ThemedText> · Cosa 1</ThemedText>
				<ThemedText> · Cosa 2</ThemedText>
				<ThemedText> · Cosa 3</ThemedText>
				<ThemedText> · Cosa 4</ThemedText>
			</Collapsible>
		</Collapsible>

		<Collapsible title="Back End">
			<Collapsible title="Base de datos">		
				<ThemedText> · Cosa 1</ThemedText>
				<ThemedText> · Cosa 2</ThemedText>
				<ThemedText> · Cosa 3</ThemedText>
				<ThemedText> · Cosa 4</ThemedText>
			</Collapsible>
		</Collapsible>
		
	</ThemedView>
	);
}

// ####################################################################################
// ##### ESTILOS ######################################################################
// ####################################################################################

const styles = StyleSheet.create({
	// body: {
	// 	backgroundColor: '#f0f0f0',
	// },

	headerImage: {
		color: '#808080',
		bottom: -90,
		left: -35,
		position: 'absolute',
	},

	titleContainer: {
		flexDirection: 'row',
		gap: 0,
	},

	cajaLogo: {
		flexDirection: 'column',
		top: 0,
		paddingTop: 25,
		height: 150,
		gap: 8,
		alignItems: 'center',
		alignContent: 'center',
		justifyContent: 'center',
	},

	meLoPidoLogo: {
		height: 100,
		width: 190,
	},
});
