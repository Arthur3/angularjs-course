'use strict';

export default app => {

	require('./profile.scss');

	app.component('profile', {
		template: require('./profile.html')
	});

}