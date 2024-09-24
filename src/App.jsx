import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import theme from './utils/theme';

const App = () => {
	// const persistor = persistStore(store);
	const queryClient = new QueryClient();

	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<Toaster />
			</QueryClientProvider>
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
