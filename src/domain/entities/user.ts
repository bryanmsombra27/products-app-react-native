import { AuthResponse } from '../../infrastructure/interfaces/auth.response';

export interface User extends Omit<AuthResponse, 'token'> {}
