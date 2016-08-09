'use strict';

import route from './list.route';

import letter from './letter/letter.component';

export default app => {

	route(app);

	require('./list.scss');

	letter(app);

	app.component('lettersList', {
		template: require('./list.html'),
		bindings: {
			letters: '<'
		},
		controller: function () {

			this.selection = {};
			
		}
	});

}