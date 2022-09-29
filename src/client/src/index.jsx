import React from 'react';
import App from './app';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
);
