'use strict';

export default app => {

	require('./sidebar.scss');

	app.component('sidebar', {
		template: require('./sidebar.html'),
		bindings: {
			items: '<'
		},
		controller: ['$state', function ($state) {
			this.getStateItemName = item => {
				return item.title.toLowerCase().replace(' ', '_');
			}

			if (this.items.length) {
				let item = this.items[0];
				$state.go('index.mailbox.box', { boxName: this.getStateItemName(item), boxID: item._id });
			}
		}]
	})

}