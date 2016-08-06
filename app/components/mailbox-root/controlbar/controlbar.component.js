'use strict';

export default app => {

	require('./controlbar.scss');

	app.component('controlbar', {
		template: require('./controlbar.html')
	});

}