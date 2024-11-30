// src/components/Statistics.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatisticsProps {
  totalDistance: number;
  totalTime: number;
  totalElevation: number;
}

const Statistics: React.FC<StatisticsProps> = ({ totalDistance, totalTime, totalElevation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Statistics</Text>
      <Text>Total Distance: {totalDistance.toFixed(2)} km</Text>
      <Text>Total Time: {totalTime} minutes</Text>
      <Text>Total Elevation: {totalElevation} meters</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Statistics;
