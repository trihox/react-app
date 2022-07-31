import ReactDOM from 'react-dom/client';
import './styles.scss';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = configureStore({
    reducer: reducer,
});
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);