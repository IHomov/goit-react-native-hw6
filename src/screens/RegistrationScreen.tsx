import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Title } from '../components/Title';
import { Input } from '../components/Input';
import { MainButton } from '../components/MainButton';
import { Avatar } from '../components/Avatar';
import { SecondaryText } from '../components/SecondaryText';
import { TaskCard } from '../components/TaskCard'; 

const RegistrationScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
     
      <View style={styles.section}>
        <Avatar />
        <Title text="Registration" />
        <Input placeholder="Login" />
        <Input placeholder="E-mail" />
        <Input placeholder="Password" secureTextEntry />
        <MainButton title="Registration" />
        <SecondaryText text="Do you have an account? Sign in" />
      </View>

      <View style={{ height: 40, borderBottomWidth: 1, borderColor: '#eee', marginVertical: 30 }} />

      
      <Title text="My Tasks" />
      <TaskCard title="Prepare weekly report" category="Work Project" color="#E3F2FD" />
      <TaskCard title="Watch lecture on Wireframing" category="UX Design" color="#FFF9C4" />
      <TaskCard title="Take children to the park" category="Family" color="#F3E5F5" />
      
      <MainButton title="Add New Task" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingVertical: 60, paddingHorizontal: 16 },
  section: { marginBottom: 20 }
});

export default RegistrationScreen;