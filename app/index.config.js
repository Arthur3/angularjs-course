'use strict';

export default app => {
	app.config(($urlRouterProvider, $compileProvider) => {
		$urlRouterProvider.when('/', '/mailbox');
		$urlRouterProvider.otherwise('/mailbox');
		$compileProvider.debugInfoEnabled(true);
	});
}