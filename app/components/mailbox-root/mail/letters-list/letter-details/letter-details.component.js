'use strict';

import route from './letter-details.route';

export default app => {

	route(app);

	app.component('letterDetails', {
		template: require('./letter-details.html'),
		bindings: {
			letter: '<'
		},
		controller: function () {}
	});

}