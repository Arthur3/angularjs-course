'use strict';

export default app => {

	require('./sidebar.scss');

	app.component('sidebar', {
		template: require('./sidebar.html'),
		bindings: {
			items: '<'
		},
		controller: [function () {
			this.itemClass = function () {
				// TODO
				// active, pending
				return {};
			}

			this.getStateItemName = item => {
				return item.title.toLowerCase().replace(' ', '_');
			}
		}]
	})

}