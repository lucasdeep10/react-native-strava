// src/store/useStore.ts

import { create } from 'zustand';

// Definir la interfaz Activity con tipos correctos
interface Activity {
  id: string;
  name: string;
  date: string;
  distance: number; // Cambiado a number
  time: number;     // Cambiado a number
  elevation: number; // Cambiado a number
}

// Definir la interfaz para el estado global
interface Store {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

// Crear el store con Zustand
export const useStore = create<Store>((set) => ({
  activities: [],
  setActivities: (activities: Activity[]) => set({ activities }), // Actualizar el estado global
}));
