import { API_URL, STAGE, API_URL_ANDROID, API_URL_IOS } from '@env';
import axios from 'axios';
import { Platform } from 'react-native';
import { StorageAdapter } from '../config/AsyncStorageAdapter';

export const APIURL =
  STAGE == 'prod'
    ? API_URL
    : Platform.OS == 'ios'
    ? API_URL_IOS
    : API_URL_ANDROID;

export const tesloApi = axios.create({
  baseURL: APIURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// interceptores
tesloApi.interceptors.request.use(async config => {
  const token = await StorageAdapter.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
