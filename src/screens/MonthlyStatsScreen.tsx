import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useStore } from '../store/useStore';  // Usamos Zustand

const MonthlyStatsScreen = ({ navigation }: any) => {
  const { activities } = useStore();  // Obtenemos las actividades desde el estado global

  // Agregar lógica para calcular las estadísticas mensuales (distancia total, tiempo total, etc.)
  const calculateMonthlyStats = () => {
    const months = ['2024-11', '2024-10', '2024-09']; // Los últimos tres meses

    return months.map((month) => {
      const monthlyActivities = activities.filter((activity) => activity.date.startsWith(month));

      const totalDistance = monthlyActivities.reduce((sum, activity) => sum + activity.distance, 0);
      const totalTime = monthlyActivities.reduce((sum, activity) => sum + activity.time, 0);
      const totalElevation = monthlyActivities.reduce((sum, activity) => sum + activity.elevation, 0);

      return { month, totalDistance, totalTime, totalElevation };
    });
  };

  const monthlyStats = calculateMonthlyStats();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estadísticas Mensuales</Text>
      <FlatList
        data={monthlyStats}
        keyExtractor={(item) => item.month}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.month}</Text>
            <Text>Total Distance: {item.totalDistance} km</Text>
            <Text>Total Time: {item.totalTime} min</Text>
            <Text>Total Elevation: {item.totalElevation} m</Text>
            <Button
              title="Ver actividades de este mes"
              onPress={() => navigation.navigate('Activities')}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default MonthlyStatsScreen;
