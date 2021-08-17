import React from 'react';
import { Index } from './pages/index';
import { DadosProfissionais } from './pages/profissional';
import { Resumo } from './pages/resumo';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Index} options={{ headerShown: false, headerStyle: { backgroundColor: "#000000" } }}></Stack.Screen>
            <Stack.Screen name='Profissional' component={DadosProfissionais} options={{
                headerTintColor: '#fff',
                headerTitle: false,
                headerShown: false,
                headerStyle: { backgroundColor: "#000000" }
            }} />
            <Stack.Screen name='Resumo' component={Resumo} options={{
                headerTintColor: '#fff',
                headerTitle: false,
                headerStyle: { backgroundColor: "#000000" }
            }} />
        </Stack.Navigator>
    )
}
