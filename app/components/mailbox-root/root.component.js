'use strict';

import route from './root.route';

export default app => {

	require('./root.scss');

	route(app);

	app.component('mailboxRoot', {
		template: require('./root.html')
	});
}