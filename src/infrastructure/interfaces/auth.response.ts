import { User } from '../../domain/entities/user';

export interface AuthResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}
export interface AuthTransformResponse {
  user: User;
  token: string;
}
