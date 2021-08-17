import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DataContext from '../contexts/DataProvider';
import { Input } from '../components/Input';
import { styles } from '../styles/style';

export function DadosProfissionais({ navigation }) {
    const { adcionarDados } = useContext(DataContext)
    const [escolaridade, setEscolaridade] = useState('')
    const [idiomas, setIdiomas] = useState('')
    const [experiencias, setExperiencias] = useState('')

    const propriedades = {
        'escolaridade': escolaridade,
        'idiomas': idiomas,
        'tipo': 'profissional',
        'experiencias': experiencias
    }
    return (
        <View style={styles.container3}>
            <View style={styles.header3}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.titulo3}>Cadastro</Text>
                </View>
                <View>
                    <Text style={{
                        color: "#fff",
                        fontSize: 15,
                        left: 50,
                    }}>Dados Profissionais</Text>
                </View>
            </View>

            <View style={styles.main3}>
                <Text style={styles.txt}>Escolaridade:</Text>
                <Input onChangeText={setEscolaridade} value={escolaridade} />
                <Text style={styles.txt1}>Idiomas:</Text>
                <Input onChangeText={setIdiomas} value={idiomas} />
                <Text style={styles.txt}>Experiências:</Text>
                <Input onChangeText={setExperiencias} value={experiencias} />
            </View>

            <View style={styles.boxButton3}>
                <TouchableOpacity style={styles.button3} onPress={() => adcionarDados(propriedades)} onPressOut={() => navigation.navigate('Resumo')}>
                    <Text style={{ color: '#fff', fontSize: 15, fontFamily: 'Roboto-Regular' }}>Resumo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}