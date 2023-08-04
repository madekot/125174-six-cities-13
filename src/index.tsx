import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { reviews } from './mocks/reviews.ts';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchQuestionAction } from './store/api-actions.ts';

store.dispatch(fetchQuestionAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>
);
