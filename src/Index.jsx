import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { App } from './App';

const rootNode = document.getElementById('app');
if (rootNode) {
  createRoot(rootNode)
    .render(
      <Provider store={store}>
        <App />
      </Provider>
    );
}