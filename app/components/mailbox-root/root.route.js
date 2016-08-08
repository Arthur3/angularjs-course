'use strict';

export default app => {
	app.config($stateProvider => {

		$stateProvider.state('index', {
			url: '/',
			template: '<mailbox-root></mailbox-root>'
		});
		
	});
}