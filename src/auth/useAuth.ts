import { useAuthRequest } from 'expo-auth-session';
import { useState } from 'react';

// Configuración de Strava OAuth
const STRAVA_CLIENT_ID = 'tu_client_id';
const STRAVA_CLIENT_SECRET = 'tu_client_secret';
const REDIRECT_URI = 'strava-app://auth';
const STRAVA_AUTH_URL = 'https://www.strava.com/oauth/authorize';
const STRAVA_TOKEN_URL = 'https://www.strava.com/oauth/token';

export const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: STRAVA_CLIENT_ID,
      redirectUri: REDIRECT_URI,
      scopes: ['activity:read_all'], // Específica los permisos que necesitas
    },
    STRAVA_AUTH_URL
  );

  // Cuando la respuesta de la autenticación esté disponible
  if (response?.type === 'success') {
    const { code } = response.params;

    // Intercambiar el código por un access_token
    fetch(STRAVA_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          setAccessToken(data.access_token);
        } else {
          setError('No se pudo obtener el token de acceso');
        }
      })
      .catch(() => setError('Error al obtener el token de acceso'));
  }

  return {
    accessToken,
    error,
    promptAsync,
  };
};
