import { API_URL, STAGE, API_URL_ANDROID, API_URL_IOS } from '@env';
import axios from 'axios';
import { Platform } from 'react-native';

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
