'use strict';

export default app => {

	require('./searchbox.scss');

	app.component('searchbox', {
		template: require('./searchbox.html')
	});

}