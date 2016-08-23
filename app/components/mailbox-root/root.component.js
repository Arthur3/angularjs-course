'use strict';

import route from './root.route';

import header from './header/header.component';

import mail from './mail/mail.component';

import mailboxService from './mailbox.service';

export default app => {

	/* deps */
	header(app);
	mail(app);

	/* component */
	require('./root.scss');

	route(app);
	mailboxService(app);

	if (IS_TEST) {
		require('./root.test')(app);
	}


	app.component('mailboxRoot', {
		template: require('./root.html'),
		controller: function () {}
	});
}