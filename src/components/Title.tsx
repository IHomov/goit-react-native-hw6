import { Text, StyleSheet } from 'react-native';
export const Title = ({ text }) => <Text style={styles.text}>{text}</Text>;
const styles = StyleSheet.create({ text: { fontSize: 30, fontWeight: '500', color: '#212121', marginBottom: 32, textAlign: 'center' } });