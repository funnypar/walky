import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './layouts/modules/mainLayout';
import Dashboard from './pages/dashboard';

export const routes = [
	{
		element: <MainLayout />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
		],
	},
	// {
	// 	key: 'authentication',
	// 	children: [
	// 		{
	// 			key: 'signinLayout',
	// 			element: <SigninLayout />,
	// 			children: [
	// 				{
	// 					path: '/signin',
	// 					element: <SigninPage />,
	// 					sidebar: false,
	// 				},
	// 				{
	// 					path: '/forget-password',
	// 					element: <ForgetPasswordPage />,
	// 					sidebar: false,
	// 				},
	// 			],
	// 		},
	// 		{
	// 			key: 'signupLayout',
	// 			element: <SignupLayout />,
	// 			children: [
	// 				{
	// 					path: '/signup',
	// 					element: <SignupPage />,
	// 					sidebar: false,
	// 				},
	// 			],
	// 		},
	// 	],
	// },
	// {
	// element: <PrivateRoute />,
	// children: [
	// 	{
	// 		element: <MainLayout />,
	// 		children: [
	// 			{
	// 				path: '/dashboard',
	// 				icon: <RxDashboard />,
	// 				element: <Dashboard />,
	// 			},
	// 		],
	// 	},

	// ],
	{
		path: '*',
		element: <Navigate to='/dashboard' />,
	},
	// },
];

export default createBrowserRouter(routes);
