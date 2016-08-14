'use strict';

import menu from './mailbox-menu/menu.component';

export default app => {
	
	menu(app);

	require('./controlbar.scss');

	app.component('controlbar', {
		template: require('./controlbar.html'),
		bindings: {
			togglePick 		: '&',
			refresh 		: '&'
		},
		controller: /*@ngInject*/ function (MaillistService) {

			MaillistService.registerInitHandler(() => {
				this.pickAll = false;
			});

		}
	});

}