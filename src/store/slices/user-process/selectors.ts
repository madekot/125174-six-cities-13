import { AuthorizationStatus, NameSpace } from '@/const';
import { UserData } from '@/types';

import { State } from '../../types';

export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getUserInfo = (state: State): UserData | null => state[NameSpace.User].userInfo;

export const getIsSubmittingLogin = (state: State): boolean =>
  state[NameSpace.User].isSubmittingLogin;
