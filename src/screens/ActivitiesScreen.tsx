import React, { useEffect, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getActivities } from '@utils/fakedata';
import { useStore } from '../store/useStore';
import Statistics from '../components/Statistics'; // Importar el componente de estadísticas

// Definir el tipo de actividad
interface Activity {
  id: string;
  name: string;
  date: string;
  distance: number;
  time: number;
  elevation: number;
}

const ActivitiesScreen = () => {
  const { setActivities } = useStore();

  // Obtener actividades con react-query
  const { data = [], isLoading, error } = useQuery<Activity[]>({
    queryKey: ['activities'],
    queryFn: getActivities,
  });

  // Guardar actividades en el estado global
  useEffect(() => {
    if (data.length > 0) {
      setActivities(data);
    }
  }, [data, setActivities]);

  // Calcular estadísticas usando useMemo
  const { totalDistance, totalTime, totalElevation } = useMemo(() => {
    return data.reduce(
      (totals, activity) => {
        totals.totalDistance += activity.distance;
        totals.totalTime += activity.time;
        totals.totalElevation += activity.elevation;
        return totals;
      },
      { totalDistance: 0, totalTime: 0, totalElevation: 0 }
    );
  }, [data]);

  if (isLoading) return <Text>Loading...</Text>;
  if (error instanceof Error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {/* Renderizar estadísticas */}
      <Statistics 
        totalDistance={totalDistance} 
        totalTime={totalTime} 
        totalElevation={totalElevation} 
      />

      {/* Renderizar lista de actividades */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Distance: {item.distance} km</Text>
            <Text>Time: {item.time} min</Text>
            <Text>Elevation: {item.elevation} m</Text>
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

export default ActivitiesScreen;
