import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
export const Avatar = () => (
  <View style={styles.box}>
    <TouchableOpacity style={styles.btnAdd}><Text style={{color: '#FF6C00'}}>+</Text></TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({ box: { width: 120, height: 120, backgroundColor: '#F6F6F6', borderRadius: 16, alignSelf: 'center', marginBottom: 32 }, btnAdd: { position: 'absolute', bottom: 14, right: -12, width: 25, height: 25, borderRadius: 13, borderWidth: 1, borderColor: '#FF6C00', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' } });