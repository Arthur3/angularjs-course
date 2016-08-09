'use strict';

import route from './mail.route';

import controlbar from './controlbar/controlbar.component';

import sidebar from './sidebar/sidebar.component';

import lettersList from './letters-list/list.component';


export default app => {

	route(app);

	controlbar(app);
	sidebar(app);
	lettersList(app);

	require('./mail.scss');

	app.component('mail', {
		template: require('./mail.html'),
		bindings: {
			mailboxes: '<'
		},
		controller: [function () {
			this.selection = {};

			this.togglePick = function (val) {
				console.log('toggle pick call', val)
			};
		}]
	});

}