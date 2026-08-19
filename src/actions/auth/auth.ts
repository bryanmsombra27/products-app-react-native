import { tesloApi } from '../../api/tesloApi';
import { User } from '../../domain/entities/user';
import {
  AuthResponse,
  AuthTransformResponse,
} from '../../infrastructure/interfaces/auth.response';

const returnUserToken = ({
  token,
  ...data
}: AuthResponse): AuthTransformResponse => {
  const user: User = data;

  return {
    token,
    user,
  };
};

export const login = async (
  email: string,
  password: string,
): Promise<AuthTransformResponse | null> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
      email: email.toLowerCase(),
      password,
    });
    const user = returnUserToken(data);

    return user;
  } catch (error) {
    console.log(error, 'ERROR LOGIN');
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } = await tesloApi.get<AuthResponse>(`/auth/check-status`);

    return returnUserToken(data);
  } catch (error) {
    console.log('Check STATUS TOKEN');
    return null;
  }
};
