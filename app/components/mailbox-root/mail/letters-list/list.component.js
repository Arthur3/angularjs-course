'use strict';

import route from './list.route';

import letter from './letter/letter.component';

import letterDetails from './letter-details/letter-details.component';

export default app => {

	route(app);

	require('./list.scss');

	letter(app);

	letterDetails(app);

	app.component('lettersList', {
		template: require('./list.html'),
		bindings: {
			letters: '<'
		},
		controller: /*@ngInject*/ function (MaillistService) {

			this.selection = MaillistService.getSelection();
			
		}
	});

}