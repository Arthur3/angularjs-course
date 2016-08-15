'use strict';

export default app => {
	app.config(function ($urlRouterProvider, $compileProvider, $httpProvider) {
		
		$urlRouterProvider.when('/', '/mailbox');
		$urlRouterProvider.otherwise('/mailbox');

		$compileProvider.debugInfoEnabled(!IS_PROD);

		$httpProvider.interceptors.push(function ($injector, $q) {
			return {
				responseError: rejection => {

					if(rejection.data && angular.isObject(rejection.data.errors)) {
						let toastr = $injector.get('toastr');

						let errors = rejection.data.errors;

						Object.keys(errors).forEach(key => {

							let errorMsg = errors[key];

							if(angular.isString(errorMsg)) {
								toastr.error(errorMsg);
							}

						})
					} 

					return $q.reject(rejection);
				}
			}
		})
	});
}