import React, { useContext } from 'react';
import { View, Text, StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DataContext from '../contexts/DataProvider';
import { styles } from '../styles/style';

export function Resumo() {
    const { dados } = useContext(DataContext)
    return (
        <View style={styles.container4}>
            <StatusBar backgroundColor="#000000" />
            <View style={styles.box}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 5 }}>
                    <MaterialIcons name='portrait' size={25} color="#000000" />
                    <Text style={styles.titulo4}> Dados Pessoais</Text>
                </View>
                <View style={styles.textos}>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='person' size={30} color="#000000" />
                        <Text style={styles.dados}> {dados.nome}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='subtitles' size={30} color="#000000" />
                        <Text style={styles.dados}> {dados.cpf}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='email' size={30} color="#000000" />
                        <Text style={styles.dados}> {dados.email}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.box}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 5 }}>
                    <MaterialIcons name='badge' size={25} color="#000000" />
                    <Text style={styles.titulo4}> Dados Profissionais</Text>
                </View>
                <View style={styles.textos}>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='school' size={30} color="#000000" />
                        <Text style={styles.dados}> {dados.escolaridade}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='language' size={30} color="#000000" />
                        <Text style={styles.dados}> {dados.idiomas}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <MaterialIcons name='work' size={30} color="#000000" />
                        <Text style={styles.dados}> {dados.experiencias}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}