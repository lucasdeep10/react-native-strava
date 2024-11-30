// src/utils/fakedata.ts
export const getActivities = async () => {
  // Datos de actividades de ejemplo
  return [
    {
      id: '1',
      name: 'Morning Run',
      date: '2024-11-01',
      distance: 5.2,  // Distancia en kilómetros
      time: 30,       // Tiempo en minutos
      elevation: 120, // Elevación en metros
    },
    {
      id: '2',
      name: 'Afternoon Ride',
      date: '2024-11-02',
      distance: 20.5,
      time: 60,
      elevation: 200,
    },
    {
      id: '3',
      name: 'Evening Walk',
      date: '2024-11-03',
      distance: 3.1,
      time: 40,
      elevation: 50,
    },
    {
      id: '4',
      name: 'Night Cycling',
      date: '2024-11-04',
      distance: 15.0,
      time: 50,
      elevation: 180,
    },
    {
      id: '5',
      name: 'Weekend Hike',
      date: '2024-11-05',
      distance: 8.0,
      time: 120,
      elevation: 300,
    },
  ];
};
