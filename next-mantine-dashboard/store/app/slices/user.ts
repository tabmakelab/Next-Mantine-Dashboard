import { StateCreator } from 'zustand';
import { UserInfo } from 'MyApp';

export interface UserSlice {
  accessToken: string;
  refreshToken: string;
  userInfo: UserInfo | null;
  logout: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = () => ({
  accessToken: '',
  refreshToken: '',
  userInfo: null,
  logout: () => {},
});
