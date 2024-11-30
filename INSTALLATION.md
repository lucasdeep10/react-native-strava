# Instrucciones de instalación

Este archivo proporciona los pasos detallados para configurar y ejecutar el proyecto.

## Requisitos previos

- **Node.js**: Asegúrate de tener **Node.js** instalado en tu sistema (recomendado: versión 16 o superior).
- **Expo CLI**: Puedes instalar Expo CLI globalmente con el siguiente comando:
  ```bash
  npm install -g expo-cli

# Pasos para configurar y ejecutar el proyecto
## Clonar el repositorio:

bash
git clone https://github.com/tu-usuario/react-native-strava.git
Instalar dependencias: Navega hasta el directorio del proyecto y ejecuta:

bash
npm install
Iniciar la aplicación en Expo: Si usas Expo CLI, puedes iniciar la aplicación con el siguiente comando:

bash
expo start
Esto abrirá una ventana en tu navegador donde podrás ver un código QR para escanearlo con la aplicación Expo Go en tu dispositivo móvil.

## Para ejecutar en Android/iOS:
Si deseas compilar la aplicación para Android o iOS, puedes usar los siguientes comandos:

Para Android:
bash
eas build --platform android

Para iOS (solo en macOS):
bash
eas build --platform ios