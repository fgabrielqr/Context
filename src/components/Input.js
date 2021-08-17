import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../styles/style';

export function Input(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputText}
                placeholder={props.placeholder}
                placeholderTextColor="#000000"
                onChangeText={props.onChangeText}
                value={props.value} />
        </View>
    )
}