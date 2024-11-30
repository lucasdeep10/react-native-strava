import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MonthlyStatsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estadísticas Mensuales</Text>
      {/* Aquí iría el código para mostrar las estadísticas */}
      <Button title="Ver actividades" onPress={() => navigation.navigate('Activities')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default MonthlyStatsScreen;
