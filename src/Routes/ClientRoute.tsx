import React from "react";
import { routerLinkClient, routerLinkAdmin } from "../Util/RouterLink";
// Page
import ClientLayout from "../Layout/ClientLayout/ClientLayout";
import ClientHomePage from "../Pages/ClientPage/HomePage/HomePage";
import OtherPage from "../Pages/ClientPage/OtherPage/OtherPage";
import LearningPage from "../Pages/ClientPage/LearningPage/LearningPage";
import LearningPathsPage from "../Pages/ClientPage/LearningPathsPage/LearningPathsPage";
import LearningPathsDetailPage from "../Pages/ClientPage/LearningPathsDetailPage/LearningPathsDetailPage";

import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import AdminHomeLayout from "../Pages/AdminPage/HomePage/HomePage";

export const ClientRoute = [
	{
		path: routerLinkClient.Home,
		element: <ClientLayout />,
		children: [
			{
				path: routerLinkClient.Home,
				element: <ClientHomePage />,
			},
			{
				path: routerLinkClient.LearningPaths,
				element: <LearningPathsPage />,
			},
			{
				path: `${routerLinkClient.LearningPathsDetail}/:course`,
				element: <LearningPathsDetailPage />,
			},
		],
	},
	{
		path: routerLinkClient.Learning,
		element: <LearningPage />,
	},
	{
		path: routerLinkClient.Other,
		element: <OtherPage />,
	},
	{
		path: routerLinkAdmin.Home,
		element: <AdminLayout />,
		children: [
			{
				path: routerLinkAdmin.Home,
				element: <AdminHomeLayout />,
			},
		],
	},
];
