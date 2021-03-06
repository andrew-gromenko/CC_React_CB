import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './register-service-worker';

import 'assets/sass/style.scss';
import Root from './routes/Root';
import createStore from './store';
import {initializeAction} from './services/Application/aids/actions';

// media-query rules for window.matchMedia()
const mediaQuery = [
	{
		id: 'large',
		minWidth: 980
	}
];

const store = createStore({});

const render = Component =>
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<Component />
			</BrowserRouter>
		</Provider>,
		document.getElementById('root')
	);

if (module.hot) {
	module.hot.accept('./routes/Root', () => render(Root));
}

store.dispatch(initializeAction({
	media: mediaQuery,
}));

registerServiceWorker();
render(Root);