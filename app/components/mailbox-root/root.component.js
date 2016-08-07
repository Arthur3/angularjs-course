'use strict';

import route from './root.route';

import header from './header/header.component';

import controlbar from './controlbar/controlbar.component';

import sidebar from './sidebar/sidebar.component';

import mailboxService from './mailbox.service';

export default app => {
	/* deps */
	header(app);
	controlbar(app);
	sidebar(app);

	/* component */
	require('./root.scss');
	route(app);
	mailboxService(app);

	app.component('mailboxRoot', {
		template: require('./root.html'),
		bindings: {
			mailboxes: '<'
		},
		controller: [function () {
		}]
	});
}