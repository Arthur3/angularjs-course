'use strict';

import route from './mail.route';

import maillistService from './maillist.service';

import controlbar from './controlbar/controlbar.component';

import sidebar from './sidebar/sidebar.component';

import lettersList from './letters-list/list.component';


export default app => {

	route(app);
	maillistService(app);

	controlbar(app);
	sidebar(app);
	lettersList(app);

	require('./mail.scss');

	app.component('mail', {
		template: require('./mail.html'),
		bindings: {
			mailboxes: '<'
		},
		controller: /*@ngInject*/ function (MaillistService, $state, $stateParams) {

			this.togglePick = function (val) {
				MaillistService.toggleAll(val);
			};

			this.refreshList = function () {
				if($state.is('index.mailbox.box')) {
					$state.reload($state.current.name);
				}
			};
		}
	});

}