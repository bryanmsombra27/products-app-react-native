import { create } from 'zustand';
import { User } from '../../domain/entities/user';
import { authCheckStatus, login } from '../../actions/auth/auth';
import { StorageAdapter } from '../../config/AsyncStorageAdapter';

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

interface InitialState {
  token?: string;
  user?: User;
  status: AuthStatus;
}

interface Actions {
  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

type State = InitialState & Actions;

export const useAuthStore = create<State>()((set, get) => ({
  status: 'checking',
  token: '',
  user: undefined,
  logout: async () => {
    await StorageAdapter.removeItem('token');
    set({
      status: 'unauthenticated',
      token: undefined,
      user: undefined,
    });
  },

  checkStatus: async () => {
    const resp = await authCheckStatus();
    if (!resp) {
      set({
        status: 'unauthenticated',
        token: undefined,
        user: undefined,
      });
      return;
    }
    await StorageAdapter.setItem('token', resp.token);

    set({
      status: 'authenticated',
      token: resp.token,
      user: resp.user,
    });
  },
  login: async (email, password) => {
    const response = await login(email, password);

    if (!response) {
      set({
        status: 'unauthenticated',
        token: undefined,
        user: undefined,
      });
      return false;
    }

    await StorageAdapter.setItem('token', response.token);

    set({
      status: 'authenticated',
      token: response.token,
      user: response.user,
    });

    return true;
  },
}));
