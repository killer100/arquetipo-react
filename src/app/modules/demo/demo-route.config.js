import React from 'react';

const parentRoute = `/demo`;

export const DemoModuleRouteConfig = {
	settings: {
		layout: {}
	},
	routes: [{
		path: `${parentRoute}/formulario`,
		component: React.lazy(() => import('./pages/demo-formulario/demo-formulario.container'))
	}]
};