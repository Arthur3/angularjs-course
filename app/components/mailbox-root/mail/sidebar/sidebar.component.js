'use strict';

export default app => {

	require('./sidebar.scss');

	app.component('sidebar', {
		template: require('./sidebar.html'),
		bindings: {
			items: '<'
		},
		controller: ['$state', function ($state) {

			if (this.items.length && !$state.is('index.mailbox.letter')) {
				let item = this.items[0];
				$state.go('index.mailbox.box', { boxName: item.urlName, boxID: item._id });
			}
			
		}]
	})

}