import { TextInput, StyleSheet } from 'react-native';
export const Input = ({ placeholder, secureTextEntry }) => (
  <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} placeholderTextColor="#BDBDBD" />
);
const styles = StyleSheet.create({ input: { width: '100%', height: 50, backgroundColor: '#F6F6F6', borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 8, padding: 16, marginBottom: 16 } });