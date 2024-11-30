import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../auth/useAuth';

const LoginScreen = ({ navigation }: any) => {
  const { accessToken, error, promptAsync } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicia sesión con Strava</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <Button
        title="Iniciar sesión con Strava"
        onPress={() => promptAsync()}
      />
      {accessToken && (
        <Button
          title="Ver actividades"
          onPress={() => navigation.navigate('Activities')}
        />
      )}
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
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
