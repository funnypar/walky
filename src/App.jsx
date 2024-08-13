import { ThemeProvider } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import theme from './utils/theme';

const App = () => {
	// const persistor = persistStore(store);
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
			<Toaster />
		</ThemeProvider>
	);
};

// <Provider store={store}>
{
	/* <PersistGate persistor={persistor}> */
}

{
	/* </PersistGate> */
}
// </Provider>

export default App;
