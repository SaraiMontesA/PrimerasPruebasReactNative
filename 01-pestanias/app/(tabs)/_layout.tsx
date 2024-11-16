// ####################################################################################
// ##### IMPORTS ######################################################################
// ####################################################################################

import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// ####################################################################################
// ##### VARIABLES ####################################################################
// ####################################################################################

export const version = {
	ver: '1.0',
};

export const idio = {
	idioma: 'es',
};

export const colors = {
    light: '#dddddd',
    dark: '#353636',
};

// ####################################################################################
// ##### PANTALLA PRINCIPAL (LAYOUT DE PANTALLAS O PESTAÑAS) ##########################
// ####################################################################################

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,	// Color del icono de  pestaña activa
				headerShown: false,	// Oculta el encabezado de la pantalla
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
				ios: {
					// Use a transparent background on iOS to show the blur effect
					position: 'absolute',
				},
				default: {},
				}),
			}}>
			<Tabs.Screen
				name="index"
				options={{
				title: 'Home',
				tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="palabra"
				options={{
				title: 'Palabra',
				tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
				title: 'Explore',
				tabBarIcon: ({ color }) => <IconSymbol size={28} name="book.fill" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="signIn"
				options={{
				title: 'signIn',
				tabBarIcon: ({ color }) => <IconSymbol size={28} name="star.fill" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
				title: 'Acerca de',
				tabBarIcon: ({ color }) => <IconSymbol size={28} name="info.fill" color={color} />,
				}}
			/>
		</Tabs>
	);
}
