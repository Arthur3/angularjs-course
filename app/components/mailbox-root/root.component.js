'use strict';

import route from './root.route';

import header from './header/header.component';

export default app => {
	/* desp */
	header(app);

	/* component */
	require('./root.scss');
	route(app);

	app.component('mailboxRoot', {
		template: require('./root.html')
	});
}