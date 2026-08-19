import { createAsyncStorage } from '@react-native-async-storage/async-storage';

// create a storage instance
const storage = createAsyncStorage('tesloDB');

export class StorageAdapter {
  static async getItem(key: string): Promise<string | null> {
    try {
      return await storage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  static async setItem(key: string, value: string): Promise<void> {
    try {
      return await storage.setItem(key, value);
    } catch (error) {
      throw new Error('no fue posible grabar en el storage');
    }
  }

  static async removeItem(key: string): Promise<void> {
    try {
      return await storage.removeItem(key);
    } catch (error) {
      throw new Error('No fue posible borrar el elento del storage');
    }
  }

  static async removeManyKeys(keys: string[]) {
    return await storage.removeMany(keys);
  }
  static async getManyKeys() {
    return await storage.getAllKeys();
  }
}
