import { create } from 'zustand';
import { User } from '../../domain/entities/user';
import { login } from '../../actions/auth/auth';

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

interface InitialState {
  token?: string;
  user?: User;
  status: AuthStatus;
}

interface Actions {
  login: (email: string, password: string) => Promise<boolean>;
}

type State = InitialState & Actions;

export const useAuthStore = create<State>()((set, get) => ({
  status: 'checking',
  token: '',
  user: undefined,
  login: async (email, password) => {
    const response = await login(email, password);
    console.log(response, 'RESPUESTA ');

    if (!response) {
      set({
        status: 'unauthenticated',
        token: undefined,
        user: undefined,
      });
      return false;
    }

    set({
      status: 'authenticated',
      token: response.token,
      user: response.user,
    });

    return true;
  },
}));
