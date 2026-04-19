import { View, Text, StyleSheet } from 'react-native';
export const TaskCard = ({ title, category, color }) => (
  <View style={[styles.card, { backgroundColor: color }]}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.category}>{category}</Text>
  </View>
);
const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: 15, marginBottom: 10, width: '100%' },
  title: { fontSize: 16, fontWeight: 'bold' },
  category: { fontSize: 12, opacity: 0.7 }
});