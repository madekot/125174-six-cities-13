import { NameSpace } from '@/const';
import { State } from '../../types';

export const getHasError = (state: State): boolean => state[NameSpace.Data].hasError;
