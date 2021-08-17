import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../styles/style';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props}
      editable
      maxLength={50}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <View
      style={styles.container1}>
      <UselessTextInput
        placeholder='Experiências'
        placeholderTextColor="#000000"
        multiline
        numberOfLines={5}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.uselessTextInput}
      />
    </View>
  );
}
export default UselessTextInputMultiline;