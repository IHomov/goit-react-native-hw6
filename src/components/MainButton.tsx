import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export const MainButton = ({ title }) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.8}><Text style={styles.text}>{title}</Text></TouchableOpacity>
);
const styles = StyleSheet.create({ button: { backgroundColor: '#BB6BD9', height: 51, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginTop: 27 }, text: { color: '#fff', fontSize: 16 } });