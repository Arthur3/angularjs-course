'use strict';

import route from './mail.route';

import controlbar from './controlbar/controlbar.component';

import sidebar from './sidebar/sidebar.component';

import letter from './letter/letter.component';


export default app => {

	route(app);

	controlbar(app);
	sidebar(app);
	letter(app);

	require('./mail.scss');

	app.component('mail', {
		template: require('./mail.html'),
		bindings: {
			mailboxes: '<'
		},
		controller: [function () {
			this.selection = {};

			this.letters = [{_id: '123', body: '123', to: '123', 'subject': '123'}];


			this.togglePick = function (val) {
				console.log('toggle pick call', val)
			};
		}]
	});

}