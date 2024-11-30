import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { generateFakeActivities } from '../src/utils/fakeData';

const ActivitiesScreen = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Generar 15 actividades falsas
    const fakeActivities = generateFakeActivities(15);
    setActivities(fakeActivities);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Distance: {item.distance}</Text>
            <Text>Time: {item.time}</Text>
            <Text>Elevation: {item.elevation}</Text>
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
