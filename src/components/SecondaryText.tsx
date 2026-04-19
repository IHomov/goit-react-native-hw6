import { Text, StyleSheet } from 'react-native';
export const SecondaryText = ({ text }) => <Text style={styles.text}>{text}</Text>;
const styles = StyleSheet.create({ text: { color: '#1B4371', textAlign: 'center', marginTop: 16, fontSize: 16 } });