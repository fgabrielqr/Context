import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input } from '../components/Input';
import Icon from 'react-native-vector-icons/Feather'
import DataContext from '../contexts/DataProvider';
import { styles } from '../styles/style';

export function Index({ navigation }) {
    const { adcionarDados } = useContext(DataContext)
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')

    const propriedades = {
        'nome': nome,
        'cpf': cpf,
        'email': email,
        'tipo': 'pessoal'
    }

    return (
        <View style={styles.container2}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.titulo}>Cadastro</Text>
                </View>
                <View>
                    <Text style={{
                        color: "#fff",
                        fontSize: 15,
                        left: 50,
                    }}>Dados Pessoais</Text>
                </View>
            </View>

            <View style={styles.main}>
                <Text style={styles.txt2}>Nome:</Text>
                <Input onChangeText={setNome} value={nome} />
                <Text style={styles.txt3}>CPF:</Text>
                <Input onChangeText={setCpf} value={cpf} />
                <Text style={styles.txt2}>E-mail:</Text>
                <Input onChangeText={setEmail} value={email} />
            </View>
            <View style={styles.boxButton}>
                <TouchableOpacity style={styles.button} onPress={() => adcionarDados(propriedades)} onPressOut={() => navigation.navigate("Profissional")}>
                    <Icon name='chevron-right' size={25} color='#fff' />
                </TouchableOpacity>
            </View>

        </View>
    )
}