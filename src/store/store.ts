import { createAPI } from '@/services/api';
import { rootReducer } from './root-reducer';
import { redirect } from './middlewares/redirect';
import { configureStore } from '@reduxjs/toolkit';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export { store };
