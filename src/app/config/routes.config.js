import AppUtils from '@shared/utils';
import { modulesConfigs } from "app/modules/modules.config";

export const routeConfigs = [
	...modulesConfigs
];

const routes = [
	...AppUtils.generateRoutesFromConfigs(routeConfigs)
];

export default routes;