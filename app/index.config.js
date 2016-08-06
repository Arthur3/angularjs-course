'use strict';

export default app => {
	app.config(($urlRouterProvider, $compileProvider) => {
		$urlRouterProvider.otherwise('/');
		$compileProvider.debugInfoEnabled(true);
	});
}