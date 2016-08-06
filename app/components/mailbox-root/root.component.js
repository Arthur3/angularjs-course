'use strict';

import route from './root.route';

import header from './header/header.component';

import controlbar from './controlbar/controlbar.component';

export default app => {
	/* deps */
	header(app);
	controlbar(app);

	/* component */
	require('./root.scss');
	route(app);

	app.component('mailboxRoot', {
		template: require('./root.html')
	});
}