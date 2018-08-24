import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import 'materialize-css/dist/css/materialize.min.css';

import App from './components/App';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
,
     document.getElementById('root')
);

