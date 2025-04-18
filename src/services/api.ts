import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1. Base URL Configuration
const getBaseUrl = () => {
  if (__DEV__) {
    return Platform.select({
      android: 'http://10.0.2.2:3000/api', // Android emulator
      ios: 'http://localhost:3000/api',     // iOS simulator
      default: 'https://your-api.com/api',  // Physical device
    });
  }
  return 'https://your-api.com/api'; // Production
};

const BASE_URL = getBaseUrl();

// 2. Enhanced Fetch Wrapper
export const apiFetch = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  // Add auth token if available
  const token = await AsyncStorage.getItem('authToken');
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  // AbortController for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Request failed with status ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    throw handleFetchError(error);
  }
};

// 3. Error Handler
const handleFetchError = (error: unknown): Error => {
  if (error instanceof Error) {
    if (error.name === 'AbortError') {
      return new Error('Request timed out');
    }
    return error;
  }
  return new Error('Unknown network error');
};

// 4. HTTP Method Helpers
export const apiGet = (endpoint: string) => apiFetch(endpoint);
export const apiPost = (endpoint: string, body: object) =>
  apiFetch(endpoint, { method: 'POST', body: JSON.stringify(body) });
export const apiPut = (endpoint: string, body: object) =>
  apiFetch(endpoint, { method: 'PUT', body: JSON.stringify(body) });
export const apiDelete = (endpoint: string) =>
  apiFetch(endpoint, { method: 'DELETE' });